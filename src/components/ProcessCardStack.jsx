import CardSwap, { Card } from "./CardSwap.jsx";

const processSteps = [
  {
    title: "Scope",
    detail: "Define the buyer, offer, goals, and key action.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Design",
    detail: "Shape the page flow so visitors understand the value quickly.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Build",
    detail: "Create a fast, responsive site with a clear path to contact.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Launch",
    detail: "Check mobile, links, SEO basics, and go-live details.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  },
];

const ProcessCardStack = ({ steps = processSteps }) => (
  <div className="process-swap-stage">
    <CardSwap
      width="min(76vw, 30rem)"
      height="23rem"
      cardDistance={42}
      verticalDistance={46}
      delay={2800}
      pauseOnHover={false}
      skewAmount={3.5}
      easing="elastic"
      speed={0.32}
      dropDistance={190}
      autoStart={false}
      swapOnClick={true}
    >
      {steps.map((step, index) => (
        <Card customClass="process-swap-card process-card" key={step.title}>
          <figure className="process-swap-photo">
            <img src={step.image} alt={`${step.title} process preview`} loading="lazy" decoding="async" />
          </figure>
          <span className="process-swap-badge">0{index + 1} {step.title}</span>
          <span className="process-swap-index">0{index + 1}</span>
          <p className="process-swap-copy">{step.detail}</p>
        </Card>
      ))}
    </CardSwap>
  </div>
);

export default ProcessCardStack;