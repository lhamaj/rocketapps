interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="bg-slate-800 mb-6 p-6 rounded-xl">
      {children}
    </div>
  );
};