'use client';

import Icon from "@mdi/react";
import { mdiPencilCircle } from "@mdi/js";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { motion } from "motion/react";
import IdeaForm from "@/components/Idea/IdeaForm";
import PresaleStarter from "@/components/Presale/PresaleStarter";
import Card from "@/components/Card/Card";
import CardTitle from "../Card/CardTitle";

export default function ProjectWizard() {
  const router: AppRouterInstance = useRouter();
  const targetRef = useRef<HTMLDivElement>(null);
  const [idea, setIdea] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleIdeaSubmit = (idea: string) => {
    setIdea(idea);
    setIsSubmitted(true);

    setTimeout(() => {
      if (targetRef.current) {
        targetRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  const handleEditIdea = () => {
    setIsSubmitted(false);
  };

  const redirectToAppPage = () => {
    router.push('/app');
  };

  return (
    <>
      <Card>
        {!isSubmitted ? (
          <IdeaForm defaultText={idea} onSubmit={handleIdeaSubmit} />
        ) : (
          <div>
            <CardTitle text="App Idea" />

            <div className='flex justify-between'>
              <p className="w-full">{idea}</p>

              <button className="p-1 cursor-pointer" onClick={handleEditIdea}>
                <Icon path={mdiPencilCircle} size="1.5em" />
              </button>
            </div>
          </div>
        )}
      </Card>

      {isSubmitted && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.25 }}>
          <div ref={targetRef}>
            <Card>
              <PresaleStarter onPresaleStart={redirectToAppPage} />
            </Card>
          </div>
        </motion.div>
      )}

    </>
  );
};