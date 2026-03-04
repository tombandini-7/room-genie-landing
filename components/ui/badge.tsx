import { clsx } from "clsx";

const variants = {
  gold: "bg-gold/10 text-gold border-gold/20",
  muted: "bg-white/5 text-white/60 border-white/10",
};

export function Badge({
  variant = "muted",
  children,
  className,
}: {
  variant?: keyof typeof variants;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
