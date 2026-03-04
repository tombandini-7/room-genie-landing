import { clsx } from "clsx";

export function SectionHeading({
  title,
  subtitle,
  gold = false,
  className,
}: {
  title: string;
  subtitle?: string;
  gold?: boolean;
  className?: string;
}) {
  return (
    <div className={clsx("text-center", className)}>
      <h2
        className={clsx(
          "font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
          gold ? "text-gold-gradient" : "text-white"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/60 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
