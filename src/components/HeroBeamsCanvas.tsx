/**
 * HeroBeamsCanvas — Three.js animated light-beam background for HeroParallax.
 * Renders a full-cover WebGL canvas with procedural noise-driven plane beams.
 * Imported lazily (client-side only) inside HeroParallax to avoid SSR crash.
 *
 * Color: Mavora green palette (#7fcf83 / soft emerald)
 * Rotation: ~40° — diagonal sweep matching the existing ambient gradient angle.
 */
import { forwardRef, useImperativeHandle, useEffect, useRef, useMemo } from "react"
import * as THREE from "three"
import { MathUtils } from "three"
import { Canvas, useFrame } from "@react-three/fiber"

const { degToRad } = MathUtils

// ─── GLSL noise ─────────────────────────────────────────────────────────────
const NOISE_GLSL = `
float random(in vec2 st){return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);}
float noise(in vec2 st){vec2 i=floor(st);vec2 f=fract(st);float a=random(i);float b=random(i+vec2(1.0,0.0));float c=random(i+vec2(0.0,1.0));float d=random(i+vec2(1.0,1.0));vec2 u=f*f*(3.0-2.0*f);return mix(a,b,u.x)+(c-a)*u.y*(1.0-u.x)+(d-b)*u.x*u.y;}
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x,289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}
float cnoise(vec3 P){
  vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);
  Pi0=mod(Pi0,289.0);Pi1=mod(Pi1,289.0);
  vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);
  vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);
  vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;
  vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);
  vec4 gx0=ixy0/7.0;vec4 gy0=fract(floor(gx0)/7.0)-0.5;gx0=fract(gx0);
  vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));
  gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);
  vec4 gx1=ixy1/7.0;vec4 gy1=fract(floor(gx1)/7.0)-0.5;gx1=fract(gx1);
  vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));
  gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);
  vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);
  vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));
  g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;
  vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));
  g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;
  float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));
  float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));
  float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));
  float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);
  vec3 fade_xyz=fade(Pf0);
  vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);
  vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);
  float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);
  return 2.2*n_xyz;
}`

// ─── Shader material factory ─────────────────────────────────────────────────
type ShaderWithDefines = THREE.ShaderLibShader & { defines?: Record<string, string | number | boolean> }

function buildBeamMaterial(speed: number, noiseIntensity: number, scale: number): THREE.ShaderMaterial {
  const physical = THREE.ShaderLib.physical as ShaderWithDefines
  const { vertexShader: baseVert, fragmentShader: baseFrag, uniforms: baseUniforms } = physical
  const baseDefines = physical.defines ?? {}

  const uniforms: Record<string, THREE.IUniform> = THREE.UniformsUtils.clone(baseUniforms)

  // Mavora green beam colour
  uniforms.diffuse.value = new THREE.Color(0x06110c)
  uniforms.roughness.value = 0.3
  uniforms.metalness.value = 0.3

  const extra: Record<string, THREE.IUniform> = {
    time:            { value: 0 },
    uSpeed:          { value: speed },
    uNoiseIntensity: { value: noiseIntensity },
    uScale:          { value: scale },
  }
  Object.assign(uniforms, extra)

  const header = `varying vec3 vEye;varying float vNoise;varying vec2 vUv;varying vec3 vPosition;uniform float time;uniform float uSpeed;uniform float uNoiseIntensity;uniform float uScale;\n${NOISE_GLSL}`
  const vHeader = `
float getPos(vec3 pos){vec3 n=vec3(pos.x*0.,pos.y-uv.y,pos.z+time*uSpeed*3.)*uScale;return cnoise(n);}
vec3 getCurrentPos(vec3 pos){vec3 np=pos;np.z+=getPos(pos);return np;}
vec3 getNormal(vec3 pos){vec3 cp=getCurrentPos(pos);vec3 nx=getCurrentPos(pos+vec3(0.01,0.,0.));vec3 nz=getCurrentPos(pos+vec3(0.,-0.01,0.));return normalize(cross(normalize(nz-cp),normalize(nx-cp)));}`

  const vert = `${header}\n${vHeader}\n${baseVert}`
    .replace("#include <begin_vertex>", "#include <begin_vertex>\ntransformed.z += getPos(transformed.xyz);")
    .replace("#include <beginnormal_vertex>", "#include <beginnormal_vertex>\nobjectNormal = getNormal(position.xyz);")

  const frag = `${header}\n${baseFrag}`
    .replace("#include <dithering_fragment>", "#include <dithering_fragment>\nfloat rn=noise(gl_FragCoord.xy);gl_FragColor.rgb-=rn/15.*uNoiseIntensity;")

  return new THREE.ShaderMaterial({
    defines: { ...baseDefines },
    uniforms,
    vertexShader: vert,
    fragmentShader: frag,
    lights: true,
    fog: true,
  })
}

// ─── Plane geometry factory ──────────────────────────────────────────────────
function buildGeometry(n: number, width: number, height: number, segs: number): THREE.BufferGeometry {
  const geo = new THREE.BufferGeometry()
  const verts = n * (segs + 1) * 2
  const faces = n * segs * 2
  const pos = new Float32Array(verts * 3)
  const idx = new Uint32Array(faces * 3)
  const uvs = new Float32Array(verts * 2)
  let vi = 0, ii = 0, ui = 0
  const totalW = n * width
  const xStart = -totalW / 2
  for (let i = 0; i < n; i++) {
    const xOff = xStart + i * width
    const uOff = Math.random() * 300
    const vOff = Math.random() * 300
    for (let j = 0; j <= segs; j++) {
      const y = height * (j / segs - 0.5)
      pos.set([xOff, y, 0, xOff + width, y, 0], vi * 3)
      const uvY = j / segs
      uvs.set([uOff, uvY + vOff, uOff + 1, uvY + vOff], ui)
      if (j < segs) {
        const a = vi, b = vi + 1, c = vi + 2, d = vi + 3
        idx.set([a, b, c, c, b, d], ii)
        ii += 6
      }
      vi += 2; ui += 4
    }
  }
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3))
  geo.setAttribute("uv", new THREE.BufferAttribute(uvs, 2))
  geo.setIndex(new THREE.BufferAttribute(idx, 1))
  geo.computeVertexNormals()
  return geo
}

// ─── Inner mesh component ────────────────────────────────────────────────────
const BeamMesh = forwardRef<
  THREE.Mesh<THREE.BufferGeometry, THREE.ShaderMaterial>,
  { material: THREE.ShaderMaterial; count: number; width: number; height: number }
>(({ material, count, width, height }, ref) => {
  const mesh = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.ShaderMaterial>>(null!)
  useImperativeHandle(ref, () => mesh.current)
  const geo = useMemo(() => buildGeometry(count, width, height, 80), [count, width, height])
  useFrame((_, dt) => { mesh.current.material.uniforms.time.value += 0.1 * dt })
  return <mesh ref={mesh} geometry={geo} material={material} />
})
BeamMesh.displayName = "BeamMesh"

// ─── Scene ────────────────────────────────────────────────────────────────────
function BeamScene() {
  const meshRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.ShaderMaterial>>(null!)
  // Mavora: soft emerald light (#7fcf83), very subtle speed, few wide beams
  const mat = useMemo(() => buildBeamMaterial(1.6, 1.4, 0.18), [])

  useEffect(() => {
    const light = new THREE.DirectionalLight("#7fcf83", 1.2)
    light.position.set(0, 3, 10)
    return () => { light.removeFromParent() }
  }, [])

  return (
    <>
      <group rotation={[0, 0, degToRad(38)]}>
        <BeamMesh ref={meshRef} material={mat} count={10} width={3} height={20} />
        <directionalLight color="#7fcf83" intensity={1.2} position={[0, 3, 10]} />
      </group>
      <ambientLight intensity={0.6} />
      <color attach="background" args={["#06110c"]} />
      <perspectiveCamera position={[0, 0, 20]} fov={30} />
    </>
  )
}

// ─── Public canvas component ─────────────────────────────────────────────────
export default function HeroBeamsCanvas() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop="always"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      camera={{ position: [0, 0, 20], fov: 30 }}
    >
      <BeamScene />
    </Canvas>
  )
}
