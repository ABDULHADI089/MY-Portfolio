import Image from "next/image";
import { certifications } from "@/lib/content";
import { asset } from "@/lib/asset";
import { AwardIcon, FileIcon, ArrowUpRight } from "./icons";

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="wrap">
        <div className="sec-head rv">
          <span className="tag up">Certifications</span>
          <h2 className="mask">
            <span style={{ "--d": "60ms" } as React.CSSProperties}>
              Time put into <span className="g">learning it properly</span>
            </span>
          </h2>
        </div>

        <div className="cert-grid">
          {certifications.map((c, i) => (
            <article
              className="cert-card rv up"
              key={c.id}
              style={{ "--d": `${i * 70}ms` } as React.CSSProperties}
            >
              {c.fileType === "image" ? (
                <div className="cert-thumb">
                  <Image src={asset(c.file)} alt={`${c.title} certificate`} fill sizes="220px" />
                </div>
              ) : (
                <div className="cert-glyph" aria-hidden="true">
                  <FileIcon width={22} height={22} />
                </div>
              )}

              <div className="cert-body">
                <div className="cert-issuer">
                  <AwardIcon width={14} height={14} />
                  {c.issuer}
                </div>
                <h3>{c.title}</h3>
                <div className="cert-date">{c.date}</div>
              </div>

              <div className="cert-actions">
                <a className="demo-btn" href={asset(c.file)} target="_blank" rel="noreferrer">
                  <FileIcon width={14} height={14} />
                  VIEW CERTIFICATE
                </a>
                {c.verifyUrl && (
                  <a
                    className="demo-btn demo-btn-alt"
                    href={c.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    VERIFY
                    <ArrowUpRight width={12} height={12} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
