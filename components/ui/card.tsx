import { clsx } from "clsx";

export function Card({
  variant = "default",
  children,
  className,
}: {
  variant?: "default" | "highlighted";
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "rounded-2xl border p-6 transition-all duration-300",
        variant === "highlighted"
          ? "gold-border-glow scale-[1.02] bg-white/[0.05] border-gold/40"
          : "bg-white/[0.03] border-white/5 hover:border-white/10",
        className
      )}
    >
      {children}
    </div>
  );
}
