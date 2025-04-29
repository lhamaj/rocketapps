interface StepWrapperProps {
  children: React.ReactNode;
  title?: string;
}

export default function StepWrapper({
  children,
  title,
}: StepWrapperProps) {
  return (
    <div className="bg-slate-800 mb-5 p-5 rounded-xl">
      {title && (
        <h2 className="text-gray-400 text-2xl font-semibold mb-3">{title}</h2>
      )}

      {children}
    </div>
  );
};