import Image from "next/image";
import { beyond } from "@/lib/content";

export default function Beyond() {
  return (
    <section id="beyond">
      <div className="wrap">
        <div className="sec-head rv">
          <span className="tag up">{beyond.tag}</span>
          <h2 className="mask">
            <span style={{ "--d": "60ms" } as React.CSSProperties}>{beyond.heading}</span>
          </h2>
          <p className="lead up" style={{ "--d": "140ms" } as React.CSSProperties}>
            {beyond.lead}
          </p>
        </div>

        <div className="mosaic">
          {beyond.photos.map((p, i) => (
            <figure
              key={p.src}
              className={`mos-item rv up${p.tall ? " tall" : ""}`}
              style={{ "--d": `${i * 90}ms` } as React.CSSProperties}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 760px) 92vw, (max-width: 1200px) 45vw, 32vw"
              />
              <figcaption>{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
