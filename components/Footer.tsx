import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <>
      <div className="wrap">
        <p className="f-name">{profile.name}</p>
      </div>
      <footer>
        <span>
          {profile.name} — {profile.location}
        </span>
        <div className="foot-links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </>
  );
}
