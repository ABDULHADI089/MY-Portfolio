"use client";

import { useMemo, useState } from "react";
import { profile } from "@/lib/content";
import { SendIcon, CheckIcon } from "./icons";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
const ENDPOINT = "https://api.web3forms.com/submit";

type Status = "idle" | "sending" | "ok" | "error";
type Errors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [note, setNote] = useState("");

  // With no access key configured the form still works — it just hands the
  // message to the visitor's mail client instead of posting it.
  const direct = useMemo(() => ACCESS_KEY.trim().length > 0, []);

  const validate = (): Errors => {
    const e: Errors = {};
    if (name.trim().length < 2) e.name = "Please enter your name.";
    if (!EMAIL_RE.test(email.trim())) e.email = "Please enter a valid email address.";
    if (message.trim().length < 10) e.message = "A little more detail helps — 10 characters minimum.";
    return e;
  };

  const mailtoFallback = () => {
    const subj = subject.trim() || `Portfolio enquiry from ${name.trim()}`;
    const body = `${message.trim()}\n\n—\n${name.trim()}\n${email.trim()}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
    setStatus("ok");
    setNote(
      `Your email app should have opened with the message ready to send. If nothing happened, write to ${profile.email} directly.`,
    );
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (company) return; // bot filled the hidden field

    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("idle");
      setNote("");
      return;
    }

    if (!direct) {
      mailtoFallback();
      return;
    }

    setStatus("sending");
    setNote("");

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim() || `Portfolio enquiry from ${name.trim()}`,
          message: message.trim(),
          from_name: "Portfolio contact form",
          replyto: email.trim(),
        }),
      });
      const data: { success?: boolean; message?: string } = await res.json();

      if (res.ok && data.success) {
        setStatus("ok");
        setNote("Thanks — your message is on its way. I'll reply to that address shortly.");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        throw new Error(data.message || "Send failed");
      }
    } catch {
      setStatus("error");
      setNote("That didn't go through. Opening your email app instead…");
      window.setTimeout(mailtoFallback, 1200);
    }
  };

  const clearError = (key: keyof Errors) =>
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="field-row">
        <div className="fld">
          <label htmlFor="cf-name">YOUR NAME</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Cooper"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              clearError("name");
            }}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "cf-name-err" : undefined}
          />
          {errors.name && (
            <span className="err" id="cf-name-err">
              {errors.name}
            </span>
          )}
        </div>

        <div className="fld">
          <label htmlFor="cf-email">YOUR EMAIL</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              clearError("email");
            }}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "cf-email-err" : undefined}
          />
          {errors.email && (
            <span className="err" id="cf-email-err">
              {errors.email}
            </span>
          )}
        </div>
      </div>

      <div className="fld">
        <label htmlFor="cf-subject">SUBJECT (OPTIONAL)</label>
        <input
          id="cf-subject"
          name="subject"
          type="text"
          placeholder="Full-time role · Contract project · Something else"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <div className="fld">
        <label htmlFor="cf-message">MESSAGE</label>
        <textarea
          id="cf-message"
          name="message"
          placeholder="Tell me what you're building and what you need."
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            clearError("message");
          }}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "cf-message-err" : undefined}
        />
        {errors.message && (
          <span className="err" id="cf-message-err">
            {errors.message}
          </span>
        )}
      </div>

      {/* Honeypot — hidden from people, tempting to bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        style={{ position: "absolute", left: "-9999px", opacity: 0 }}
        aria-hidden="true"
      />

      <div className="form-foot">
        <button className="btn btn-a" type="submit" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <span className="spinner" aria-hidden="true" />
              Sending…
            </>
          ) : status === "ok" ? (
            <>
              <CheckIcon />
              Sent
            </>
          ) : (
            <>
              <SendIcon />
              Send message
            </>
          )}
        </button>

        <p
          className={`form-status${status === "ok" ? " ok" : status === "error" ? " bad" : ""}`}
          role="status"
          aria-live="polite"
        >
          {note}
        </p>
      </div>
    </form>
  );
}
