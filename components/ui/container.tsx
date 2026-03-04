import clsx from "clsx";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("max-w-6xl mx-auto px-6 sm:px-8", className)}>
      {children}
    </div>
  );
}
