import Button from "@/components/Common/Button";

const placeholderText = 'Enter your app idea to get started';

export default function IdeaForm() {
  return (
    <div>
      <textarea className="w-full rounded-xl p-5 bg-slate-700 placeholder:text-slate-500 mb-2" placeholder={placeholderText} />
      <Button className="w-full">Get Instand Funding</Button>
    </div>
  );
};