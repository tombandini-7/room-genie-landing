import clsx from "clsx";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16", className)}>
      {children}
    </div>
  );
}
