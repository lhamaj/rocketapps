import Button from "@/components/Common/Button";
import { useState } from "react";

const placeholderText = 'Enter your app idea to get started';

interface IdeaFormProps {
  defaultText: string;
  onSubmit: (idea: string) => void;
}

export default function IdeaForm({ defaultText, onSubmit }: IdeaFormProps) {
  const [text, setText] = useState(defaultText);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        className="w-full rounded-xl p-5 bg-black placeholder:text-slate-400 mb-2"
        placeholder={placeholderText}
      />

      <Button className="w-full" type="submit">
        Get Instand Funding
      </Button>
    </form>
  );
};