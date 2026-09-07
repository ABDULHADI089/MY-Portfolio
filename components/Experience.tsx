import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="sec-head rv">
          <span className="tag up">Experience</span>
          <h2 className="mask">
            <span style={{ "--d": "60ms" } as React.CSSProperties}>
              Where I&rsquo;ve <span className="g">shipped things</span>
            </span>
          </h2>
        </div>

        {experience.map((job) => (
          <article className="job rv up" key={`${job.org}-${job.role}`}>
            <div className="job-when">
              {job.live ? <span className="live">{job.when}</span> : job.when}
            </div>
            <div>
              <h3>{job.role}</h3>
              <p className="org">{job.org}</p>
              <ul>
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
