import Button from "@/components/Common/Button";
import { useState } from "react";

const placeholderText = 'Enter your app idea to get started';

interface IdeaFormProps {
  handleSubmit: (idea: string) => void,
}

export default function IdeaForm({ handleSubmit }: IdeaFormProps) {
  const [text, setText] = useState('');

  return (
    <div>
      <textarea
        onChange={e => setText(e.target.value)}
        className="w-full rounded-xl p-5 bg-slate-700 placeholder:text-slate-500 mb-2"
        placeholder={placeholderText}
      />

      <Button className="w-full" onClick={() => handleSubmit(text)}>
        Get Instand Funding
      </Button>
    </div>
  );
};