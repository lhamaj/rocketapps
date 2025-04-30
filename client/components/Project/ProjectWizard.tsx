'use client';
import { useState } from "react";
import Icon from "@mdi/react";
import { mdiCheckCircle, mdiPencil } from "@mdi/js";
import StepWrapper from "@/components/Project/StepWrapper";
import IdeaForm from "@/components/Project/IdeaForm";
import PresaleForm from "@/components/Project/PresaleForm";
import PresaleInfo from "@/components/Project/PresaleInfo";
import TradingBox from "@/components/Project/TokenInfo";
import AppBox from "@/components/Project/AppInfo";
import ShareBox from "@/components/Project/SharingTools";

interface TempProject {
  stage: number,
  idea: string;
}

export default function ProjectWizard() {
  const [project, setProject] = useState<TempProject>({
    stage: 1,
    idea: '',
  });

  const handleIdeaSubmit = (idea: string) => {
    setProject(prev => ({ ...prev, idea, stage: 2 }));
  };
  const handelPresaleSubmit = () => {
    setProject(prev => ({ ...prev, stage: 3 }));
  };

  return (
    <>
      <StepWrapper isComplete={project.stage > 1 && !!project.idea}>
        {project.stage === 1 && <IdeaForm handleSubmit={handleIdeaSubmit} />}
        {project.stage > 1 && project.idea && (
          <div className="flex">
            <Icon path={mdiCheckCircle} size="1.5em" className="text-green-300 inline-block me-2" />

            <div className="w-full">
              <p className="mb-3">Idea submitted</p>

              <div className="flex items-start w-full p-4 py-2 rounded-2xl border border-green-300">
                <p className="w-full">{project.idea}</p>

                <button className="p-1 cursor-pointer"><Icon path={mdiPencil} size="1em" /></button>
              </div>
            </div>
          </div>
        )}
      </StepWrapper>

      <StepWrapper title="Start Presale" isComplete={project.stage > 2}>
        {project.stage === 2 && <PresaleForm handleSubmit={handelPresaleSubmit} />}
        {project.stage > 2 && (
          <div className="flex">
            <Icon path={mdiCheckCircle} size="1.5em" className="text-green-300 inline-block me-2" />
            <div className="w-full">Presale Launched!</div>
          </div>
        )}
      </StepWrapper>

      <StepWrapper title="Presale is Live!">
        <PresaleInfo />
      </StepWrapper>

      <StepWrapper title="Token is Live!">
        <TradingBox />
      </StepWrapper>

      <StepWrapper title="Build Your App">
        <AppBox />
      </StepWrapper>

      <StepWrapper title="Share & Go Viral!">
        <ShareBox />
      </StepWrapper>
    </>
  );
};