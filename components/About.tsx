import { aboutParagraphs, aboutFacts } from "@/lib/content";

/** Splits a paragraph so one phrase can be lifted out of the muted body colour. */
function withEmphasis(text: string, emphasis: string | null) {
  if (!emphasis) return text;
  const i = text.indexOf(emphasis);
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i)}
      <span className="em">{emphasis}</span>
      {text.slice(i + emphasis.length)}
    </>
  );
}

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="sec-head rv">
          <span className="tag up">About</span>
          <h2 className="mask">
            <span style={{ "--d": "60ms" } as React.CSSProperties}>
              Two halves of the <span className="g">same job</span>
            </span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="rv">
            {aboutParagraphs.map((p, i) => (
              <p key={i} className="up" style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
                {withEmphasis(p.text, p.emphasis)}
              </p>
            ))}
          </div>

          <div className="panel rv up" style={{ "--d": "180ms" } as React.CSSProperties}>
            <dl>
              {aboutFacts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>
                    {f.accent && f.accent !== f.value ? (
                      <>
                        {f.value.replace(f.accent, "")}
                        <span className="k">{f.accent}</span>
                      </>
                    ) : f.accent === f.value ? (
                      <span className="k">{f.value}</span>
                    ) : (
                      f.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
