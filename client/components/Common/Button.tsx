export default function Button({ children, className, ...props }: React.ComponentProps<'button'>) {
  const defaultClassName = "font-semibold rounded-xl px-5 py-3 bg-blue-500 hover:bg-blue-600 transition cursor-pointer";

  const combinedClassName = className
    ? `${defaultClassName} ${className}`
    : defaultClassName;

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}