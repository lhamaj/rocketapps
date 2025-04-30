import Link, { LinkProps } from "next/link";

interface LinkButtonProps extends LinkProps, Omit<React.ComponentProps<'a'>, 'href'> { }

export default function LinkButton({ children, className, ...props }: LinkButtonProps) {
  const defaultClassName = "font-semibold rounded-xl px-5 py-3 bg-blue-500 hover:bg-blue-600 transition cursor-pointer";

  const combinedClassName = className
    ? `${defaultClassName} ${className}`
    : defaultClassName;

  return (
    <Link className={combinedClassName} {...props}>
      {children}
    </Link>
  );
}