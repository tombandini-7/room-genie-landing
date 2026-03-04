import { clsx } from "clsx";

const variants = {
  solid:
    "bg-gold text-primary hover:bg-gold-light font-semibold",
  outline:
    "border border-white/20 text-white hover:border-gold hover:text-gold",
};

const sizes = {
  default: "px-6 py-2.5 text-sm",
  large: "px-8 py-3.5 text-base",
};

type ButtonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
} & (
  | React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
  | React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }
);

export function Button({
  variant = "solid",
  size = "default",
  className,
  children,
  ...props
}: ButtonProps) {
  const cls = clsx(
    "inline-flex items-center justify-center rounded-lg transition-all duration-200 cursor-pointer",
    variants[variant],
    sizes[size],
    className
  );

  if ("href" in props && props.href) {
    return (
      <a className={cls} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
