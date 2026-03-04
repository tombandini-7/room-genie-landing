import clsx from "clsx";

export function Card({
  children,
  highlighted = false,
  className,
}: {
  children: React.ReactNode;
  highlighted?: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "rounded-xl p-6 sm:p-8 transition-all duration-300",
        highlighted
          ? "gold-border-glow border border-gold/30 bg-white/[0.04]"
          : "bg-white/[0.02] border border-white/[0.06]",
        className
      )}
    >
      {children}
    </div>
  );
}
