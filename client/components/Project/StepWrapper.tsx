'use client';

interface StepWrapperProps {
  children: React.ReactNode;
  title?: string;
  isComplete?: boolean,
}

export default function StepWrapper({
  children,
  title,
  isComplete,
}: StepWrapperProps) {
  return (
    <div className={`${isComplete ? 'bg-green-900 py-3' : 'bg-slate-800'} mb-6 p-6 rounded-xl`}>
      {title && !isComplete && (
        <h2 className="text-gray-400 text-xl font-semibold">{title}</h2>
      )}

      {children}
    </div>
  );
};