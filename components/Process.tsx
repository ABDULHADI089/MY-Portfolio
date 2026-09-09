import { processSteps } from "@/lib/content";

export default function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <div className="sec-head rv">
          <span className="tag up">Process</span>
          <h2 className="mask">
            <span style={{ "--d": "60ms" } as React.CSSProperties}>
              How I <span className="g">build things</span>
            </span>
          </h2>
          <p className="lead up" style={{ "--d": "140ms" } as React.CSSProperties}>
            Every project is different, but the shape of the work rarely changes. This is how
            something goes from a conversation to code running in production.
          </p>
        </div>

        <div className="stack-wrap">
          {processSteps.map((step, i) => (
            <div
              className="pcard rv up"
              key={step.n}
              style={{ "--o": 0.9 - i * 0.15 } as React.CSSProperties}
            >
              <div className="n">{step.n}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                <div className="chips">
                  {step.chips.map((c) => (
                    <span key={c}>{c}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
