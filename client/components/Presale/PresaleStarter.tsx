'use client';

import { mdiHeart } from "@mdi/js";
import Icon from "@mdi/react";
import Button from "@/components/Common/Button";
import Spinner from "@/components/Common/Spinner";
import { useState } from "react";

const NETWORK_FEE = 5;

interface PresaleStarterProps {
  onPresaleStart: () => void;
}

export default function PresaleStarter({ onPresaleStart }: PresaleStarterProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePresaleStart = () => {
    setIsLoading(true);

    setTimeout(() => {
      onPresaleStart();
    }, 3000);
  };

  return (
    <div className="text-center">
      <Icon path={mdiHeart} size="3em" className="inline text-purple-400 mb-6" />

      <h3 className="text-3xl font-bold mb-6">That&apos;s a top notch idea</h3>

      <div className="text-gray-400 mb-6">
        <p>
          Start your <span className="text-white">3-minute token presale</span>.
        </p>
        <p>
          You get <span className="text-white">30%</span> of funds raised + <span className="text-white">3%</span> trade tax later.
        </p>
      </div>

      <Button
        className="bg-purple-500 hover:bg-purple-600 w-full mb-2 disabled:opacity-50 disabled:cursor-default"
        disabled={isLoading}
        onClick={handlePresaleStart}
      >
        {isLoading ? (
          <>Launching <Spinner /></>
        ) : (
          'Connect & Start Presale'
        )}
      </Button>

      <small className="text-gray-400">A small network fee (~${NETWORK_FEE}) applies to launch the presale</small>
    </div>
  );
};