import Image from "next/image";
import { profile, heroMeta, heroPhoto, CV_FILE } from "@/lib/content";
import { asset } from "@/lib/asset";
import Lattice from "./Lattice";
import { DownloadIcon, ArrowUpRight } from "./icons";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <Lattice />
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
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
              Software engineer at DevNodes — full-stack web and mobile on one side, applied
              computer vision on the other. I take models out of notebooks and get them running
              where the lighting is bad and the phones are slow.
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
          </div>

          <figure className="hero-photo up" style={{ "--d": "300ms" } as React.CSSProperties}>
            <span className="hp-glow" aria-hidden="true" />
            <span className="hp-frame">
              <Image
                src={asset(heroPhoto.src)}
                alt={heroPhoto.alt}
                width={1400}
                height={1050}
                sizes="(max-width: 960px) 62vw, 380px"
                preload
              />
              <i className="hp-cnr tl" aria-hidden="true" />
              <i className="hp-cnr tr" aria-hidden="true" />
              <i className="hp-cnr bl" aria-hidden="true" />
              <i className="hp-cnr br" aria-hidden="true" />
            </span>
            <figcaption>{heroPhoto.caption}</figcaption>
          </figure>
        </div>

        <div className="cue up" style={{ "--d": "760ms" } as React.CSSProperties}>
          <span className="ln" aria-hidden="true" />
          SCROLL
        </div>
      </div>
    </header>
  );
}
