"use client";

import { useState } from "react";
import { profile, CV_FILE } from "@/lib/content";
import { asset } from "@/lib/asset";
import {
  MailIcon,
  PhoneIcon,
  GithubIcon,
  LinkedinIcon,
  DownloadIcon,
  CopyIcon,
  CheckIcon,
  ArrowUpRight,
} from "./icons";

export default function ContactChannels() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      // Clipboard API is blocked in some browsers/contexts — fall back to a selection copy.
      const el = document.createElement("textarea");
      el.value = profile.email;
      el.setAttribute("readonly", "");
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      try {
        document.execCommand("copy");
      } catch {
        return;
      } finally {
        document.body.removeChild(el);
      }
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="channels">
      <a className="channel" href={`mailto:${profile.email}`}>
        <span className="ic">
          <MailIcon />
        </span>
        <span className="meta">
          <b>Email</b>
          <span>{profile.email}</span>
        </span>
        <span className="go-ic">
          <ArrowUpRight />
        </span>
      </a>

      <button className="channel" onClick={copyEmail} type="button">
        <span className="ic">{copied ? <CheckIcon /> : <CopyIcon />}</span>
        <span className="meta">
          <b>{copied ? "Copied to clipboard" : "Copy email address"}</b>
          <span>{profile.email}</span>
        </span>
      </button>

      <a className="channel" href={`tel:${profile.phoneHref}`}>
        <span className="ic">
          <PhoneIcon />
        </span>
        <span className="meta">
          <b>Phone</b>
          <span>{profile.phone}</span>
        </span>
        <span className="go-ic">
          <ArrowUpRight />
        </span>
      </a>

      <a className="channel" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
        <span className="ic">
          <LinkedinIcon />
        </span>
        <span className="meta">
          <b>LinkedIn</b>
          <span>in/abdul-hadi-72b190201</span>
        </span>
        <span className="go-ic">
          <ArrowUpRight />
        </span>
      </a>

      <a className="channel" href={profile.github} target="_blank" rel="noopener noreferrer">
        <span className="ic">
          <GithubIcon />
        </span>
        <span className="meta">
          <b>GitHub</b>
          <span>github.com/ABDULHADI089</span>
        </span>
        <span className="go-ic">
          <ArrowUpRight />
        </span>
      </a>

      <a className="channel" href={asset(CV_FILE)} download="Abdul-Hadi-CV.pdf">
        <span className="ic">
          <DownloadIcon />
        </span>
        <span className="meta">
          <b>Download CV</b>
          <span>PDF · full résumé</span>
        </span>
        <span className="go-ic">
          <ArrowUpRight />
        </span>
      </a>
    </div>
  );
}
