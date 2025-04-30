interface CardTitleProps {
  text: string;
}

export default function CardTitle({ text }: CardTitleProps) {
  return (
    <h2 className="text-gray-400 text-sm uppercase font-semibold mb-3">{text}</h2>
  );
};