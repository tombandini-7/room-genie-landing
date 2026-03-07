import clsx from "clsx";

type ButtonVariant = "solid" | "outline" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const variants: Record<ButtonVariant, string> = {
  solid:
    "bg-gold text-primary font-semibold shadow-lg shadow-gold/20 hover:bg-gold-light active:bg-gold-dark",
  outline:
    "border border-white/20 text-text-primary hover:border-gold/50 hover:text-gold",
  ghost:
    "text-text-secondary hover:text-text-primary",
};

export function Button({
  children,
  variant = "solid",
  href,
  className,
  onClick,
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm tracking-wide transition-all duration-300",
    variants[variant],
    className
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
