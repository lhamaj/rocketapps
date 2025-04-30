import IdeaWizard from "@/components/Idea/IdeaWizard";

export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto py-16">
      <div className="text-center mb-16">
        <h1 className="uppercase text-7xl font-black text-center mb-4">
          Got the next billion-dollar idea?
        </h1>

        <p className="text-slate-500 font-bold text-xl mb-4">
          Funding for app ideas, open to everyone
        </p>
      </div>

      <IdeaWizard />
    </div>
  );
}
