import clsx from "clsx";

export function SectionHeading({
  children,
  className,
  gradient = false,
}: {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}) {
  return (
    <h2
      className={clsx(
        "font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-center",
        gradient && "text-gold-gradient",
        className
      )}
      style={{ letterSpacing: "-0.02em", lineHeight: 1.15 }}
    >
      {children}
    </h2>
  );
}
