import { profile } from "@/lib/content";
import ContactChannels from "./ContactChannels";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="sec-head rv">
          <span className="tag up">Contact</span>
          <h2 className="mask">
            <span style={{ "--d": "60ms" } as React.CSSProperties}>
              Got something to <span className="g">build</span>?
            </span>
          </h2>
          <p className="lead up" style={{ "--d": "140ms" } as React.CSSProperties}>
            Open to full-time roles and interesting contract work — especially anything where the
            web and the model have to meet.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-panel rv up">
            <h3>Send a message</h3>
            <p className="note">
              Tell me what you&rsquo;re working on. I read everything and reply to anything real.
            </p>
            <ContactForm />
          </div>

          <div className="contact-panel rv up" style={{ "--d": "90ms" } as React.CSSProperties}>
            <h3>Or reach me directly</h3>
            <p className="note">
              Based in {profile.location} and happy to work with teams in any timezone.
            </p>
            <a className="mail" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <ContactChannels />
          </div>
        </div>
      </div>
    </section>
  );
}
