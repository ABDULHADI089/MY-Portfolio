"use client";
import { ReactNode } from "react";

export default function BracketFrame({
  children,
  label,
  className = "",
  active = false,
}: {
  children: ReactNode;
  label?: string;
  className?: string;
  active?: boolean;
}) {
  const corner =
    "absolute w-5 h-5 border-[#0891B2] transition-all duration-300 " +
    (active ? "opacity-80" : "opacity-20 group-hover:opacity-80");

  return (
    <div className={`relative group ${className}`}>
      <span className={`${corner} top-0 left-0 border-t-2 border-l-2`} />
      <span className={`${corner} top-0 right-0 border-t-2 border-r-2`} />
      <span className={`${corner} bottom-0 left-0 border-b-2 border-l-2`} />
      <span className={`${corner} bottom-0 right-0 border-b-2 border-r-2`} />
      {label && (
        <span className="absolute -top-3.5 left-4 font-mono text-[10px] text-[#0891B2] bg-white px-1.5 border border-[#0891B2]/30 rounded">
          {label}
        </span>
      )}
      {children}
    </div>
  );
}
