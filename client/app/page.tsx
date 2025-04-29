import StepWrapper from "@/components/Project/StepWrapper";
import IdeaForm from "@/components/Project/IdeaForm";
import Presale from "@/components/Project/Presale";
import TradingBox from "@/components/Project/TokenInfo";
import AppBox from "@/components/Project/AppInfo";
import ShareBox from "@/components/Project/SharingTools";

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

      <StepWrapper><IdeaForm /></StepWrapper>

      <StepWrapper title="Start Presale">
        <Presale />
      </StepWrapper>

      <StepWrapper title="Launch Token">
        <TradingBox />
      </StepWrapper>

      <StepWrapper title="Build Your App">
        <AppBox />
      </StepWrapper>

      <StepWrapper title="Share & Go Viral!">
        <ShareBox />
      </StepWrapper>
    </div>
  );
}
