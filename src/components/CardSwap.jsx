import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import "./CardSwap.css";

export const Card = forwardRef(({ customClass, ...rest }, ref) => (
  <div ref={ref} {...rest} className={`card ${customClass ?? ""} ${rest.className ?? ""}`.trim()} />
));

Card.displayName = "Card";

const makeSlot = (index, distX, distY, total) => ({
  x: index * distX,
  y: -index * distY,
  z: -index * distX * 1.5,
  zIndex: total - index,
});

const placeNow = (element, slot, skew) => {
  gsap.set(element, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });
};

const CardSwap = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = "elastic",
  speed = 1,
  dropDistance = 500,
  autoStart = true,
  swapOnClick = false,
  children,
}) => {
  const animationSpeed = Math.max(0.2, speed);
  const config =
    easing === "elastic"
      ? {
          ease: "elastic.out(0.6,0.9)",
          durDrop: 2 * animationSpeed,
          durMove: 2 * animationSpeed,
          durReturn: 2 * animationSpeed,
          promoteOverlap: 0.9,
          returnDelay: 0.05,
        }
      : {
          ease: "power1.inOut",
          durDrop: 0.8 * animationSpeed,
          durMove: 0.8 * animationSpeed,
          durReturn: 0.8 * animationSpeed,
          promoteOverlap: 0.45,
          returnDelay: 0.2,
        };

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(() => childArr.map(() => React.createRef()), [childArr.length]);
  const order = useRef(Array.from({ length: childArr.length }, (_, index) => index));
  const timelineRef = useRef(null);
  const intervalRef = useRef(null);
  const swapRef = useRef(null);
  const animatingRef = useRef(false);
  const container = useRef(null);

  useEffect(() => {
    const total = refs.length;

    refs.forEach((ref, index) => {
      if (ref.current) {
        placeNow(ref.current, makeSlot(index, cardDistance, verticalDistance, total), skewAmount);
      }
    });

    const swap = () => {
      if (order.current.length < 2 || animatingRef.current) return;

      const [front, ...rest] = order.current;
      const frontElement = refs[front]?.current;
      if (!frontElement) return;

      const timeline = gsap.timeline();
      timelineRef.current = timeline;
      animatingRef.current = true;

      timeline.to(frontElement, {
        y: `+=${dropDistance}`,
        duration: config.durDrop,
        ease: config.ease,
      });

      timeline.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);

      rest.forEach((idx, index) => {
        const element = refs[idx]?.current;
        if (!element) return;

        const slot = makeSlot(index, cardDistance, verticalDistance, refs.length);
        timeline.set(element, { zIndex: slot.zIndex }, "promote");
        timeline.to(
          element,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease,
          },
          `promote+=${index * 0.15}`,
        );
      });

      const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
      timeline.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
      timeline.call(
        () => {
          gsap.set(frontElement, { zIndex: backSlot.zIndex });
        },
        undefined,
        "return",
      );
      timeline.to(
        frontElement,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease,
        },
        "return",
      );

      timeline.call(() => {
        order.current = [...rest, front];
        animatingRef.current = false;
      });
    };

    swapRef.current = swap;

    if (autoStart) {
      swap();
    }

    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current;
      const pause = () => {
        timelineRef.current?.pause();
        window.clearInterval(intervalRef.current);
      };
      const resume = () => {
        timelineRef.current?.play();
        intervalRef.current = window.setInterval(swap, delay);
      };

      node?.addEventListener("mouseenter", pause);
      node?.addEventListener("mouseleave", resume);

      return () => {
        node?.removeEventListener("mouseenter", pause);
        node?.removeEventListener("mouseleave", resume);
        window.clearInterval(intervalRef.current);
        timelineRef.current?.kill();
      };
    }

    return () => {
      window.clearInterval(intervalRef.current);
      timelineRef.current?.kill();
      animatingRef.current = false;
    };
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing, dropDistance, autoStart, refs, config.durDrop, config.durMove, config.durReturn, config.ease, config.promoteOverlap, config.returnDelay]);

  const triggerManualSwap = () => {
    if (!swapOnClick) return;

    window.clearInterval(intervalRef.current);

    if (animatingRef.current && timelineRef.current) {
      timelineRef.current.progress(1).kill();
      animatingRef.current = false;
    }

    swapRef.current?.();
    intervalRef.current = window.setInterval(() => swapRef.current?.(), delay);
  };

  const rendered = childArr.map((child, index) =>
    isValidElement(child)
      ? cloneElement(child, {
          key: index,
          ref: refs[index],
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: (event) => {
            child.props.onClick?.(event);
            triggerManualSwap();
            onCardClick?.(index);
          },
          onKeyDown: (event) => {
            child.props.onKeyDown?.(event);
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              triggerManualSwap();
              onCardClick?.(index);
            }
          },
          role: swapOnClick ? "button" : child.props.role,
          tabIndex: swapOnClick ? 0 : child.props.tabIndex,
        })
      : child,
  );

  return (
    <div ref={container} className="card-swap-container" style={{ width, height }}>
      {rendered}
    </div>
  );
};

export default CardSwap;