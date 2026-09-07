import { profile, heroMeta, CV_FILE } from "@/lib/content";
import { asset } from "@/lib/asset";
import Lattice from "./Lattice";
import { DownloadIcon, ArrowUpRight } from "./icons";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <Lattice />
      <div className="wrap">
        <div className="status up" style={{ "--d": "380ms" } as React.CSSProperties}>
          <i aria-hidden="true" />
          {profile.availabilityNote}
        </div>

        <h1>
          <span className="mask">
            <span style={{ "--d": "80ms" } as React.CSSProperties}>I build software</span>
          </span>
          <span className="mask">
            <span style={{ "--d": "180ms" } as React.CSSProperties}>
              that <span className="g">sees</span>.
            </span>
          </span>
        </h1>

        <p className="hero-lead up" style={{ "--d": "480ms" } as React.CSSProperties}>
          Software engineer at DevNodes — full-stack web and mobile on one side, applied computer
          vision on the other. I take models out of notebooks and get them running where the
          lighting is bad and the phones are slow.
        </p>

        <div className="btns up" style={{ "--d": "560ms" } as React.CSSProperties}>
          <a className="btn btn-a" href="#work">
            View selected work
            <ArrowUpRight />
          </a>
          <a className="btn btn-b" href={asset(CV_FILE)} download="Abdul-Hadi-CV.pdf">
            <DownloadIcon />
            Download CV
          </a>
          <a className="btn btn-b" href="#contact">
            Get in touch
          </a>
        </div>

        <dl className="hero-meta up" style={{ "--d": "660ms" } as React.CSSProperties}>
          {heroMeta.map((m) => (
            <div className="hm" key={m.label}>
              <dt>{m.label}</dt>
              <dd>{m.value}</dd>
            </div>
          ))}
        </dl>

        <div className="cue up" style={{ "--d": "760ms" } as React.CSSProperties}>
          <span className="ln" aria-hidden="true" />
          SCROLL
        </div>
      </div>
    </header>
  );
}
