import { toolkit } from "@/lib/content";

export default function Toolkit() {
  return (
    <section id="toolkit">
      <div className="wrap">
        <div className="sec-head rv">
          <span className="tag up">Toolkit</span>
          <h2 className="mask">
            <span style={{ "--d": "60ms" } as React.CSSProperties}>
              What I <span className="g">work with</span>
            </span>
          </h2>
        </div>

        <div className="rv">
          {toolkit.map((group) => (
            <div className="tk" key={group.group}>
              <h3 className="up">{group.group}</h3>
              <div className="chips up" style={{ "--d": "60ms" } as React.CSSProperties}>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
