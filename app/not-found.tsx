"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";

export default function NotFound() {
  // No <Preloader/> on this page to flip body.loading -> ready, so do it
  // directly — otherwise the page inherits the homepage's pre-animation
  // hidden state (see globals.css body.loading).
  useEffect(() => {
    document.body.classList.remove("loading");
    document.body.classList.add("ready");
  }, []);

  return (
    <main className="hero" style={{ minHeight: "100svh" }}>
      <div className="wrap">
        <div className="tag">404 — NOT FOUND</div>
        <h1>
          Nothing&apos;s running <span className="g">at this address</span>.
        </h1>
        <p className="hero-lead">
          The link is stale, or the route never existed. Either way, there&apos;s no code behind
          this page.
        </p>
        <div className="btns">
          <Link className="btn btn-a" href="/">
            Back to home
            <ArrowUpRight />
          </Link>
          <Link className="btn btn-b" href="/#work">
            View selected work
          </Link>
        </div>
      </div>
    </main>
  );
}
