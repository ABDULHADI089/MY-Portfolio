export default function MonoTag({
  children,
  accent = "cyan",
}: {
  children: string;
  accent?: "cyan" | "amber" | "violet";
}) {
  const colors = {
    cyan:   "text-[#0891B2] border-[#0891B2]/30 bg-[#0891B2]/8",
    amber:  "text-[#D97706] border-[#D97706]/30 bg-[#D97706]/8",
    violet: "text-[#7C3AED] border-[#7C3AED]/30 bg-[#7C3AED]/8",
  };
  return (
    <span className={`font-mono text-xs px-2.5 py-1 rounded-md border font-medium ${colors[accent]} whitespace-nowrap`}>
      {children}
    </span>
  );
}
