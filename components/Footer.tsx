export default function Footer() {
  return (
    <footer className="py-10 px-4 bg-white border-t border-[#7C3AED]/10 text-center">
      <div className="section-glow-line mb-6" />
      <p className="font-mono text-xs text-[#4B5563]/60">
        © {new Date().getFullYear()}{" "}
        <span className="gradient-text font-semibold">Abdul Hadi</span>
        {" "}· Built with Next.js · Tailwind · Framer Motion
      </p>
    </footer>
  );
}
