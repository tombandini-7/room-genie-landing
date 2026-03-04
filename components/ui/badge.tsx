import clsx from "clsx";

export function Badge({
  children,
  variant = "gold",
  className,
}: {
  children: React.ReactNode;
  variant?: "gold" | "muted";
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-md px-3 py-1 text-xs font-medium tracking-wider uppercase",
        variant === "gold" &&
          "bg-gold/10 text-gold border border-gold/20",
        variant === "muted" &&
          "bg-white/5 text-text-secondary border border-white/10",
        className
      )}
    >
      {children}
    </span>
  );
}
