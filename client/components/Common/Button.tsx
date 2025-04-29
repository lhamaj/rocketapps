interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className = '' }: ButtonProps) {
  const defaultClassName = "font-semibold rounded-xl px-5 py-3 bg-blue-500 cursor-pointer";

  return (
    <button className={[defaultClassName, className].join(' ')}>
      {children}
    </button>
  );
}