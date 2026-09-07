import { Fragment } from "react";
import { marquee } from "@/lib/content";

export default function Ticker() {
  const set = (
    <div className="tk-set">
      {marquee.map((m) => (
        <Fragment key={m}>
          <span>{m}</span>
          <i />
        </Fragment>
      ))}
    </div>
  );

  return (
    <div className="ticker" aria-hidden="true">
      <div className="tk-track">
        {set}
        {set}
      </div>
    </div>
  );
}
