import { mdiContentCopy } from "@mdi/js";
import Icon from "@mdi/react";
import CountdownTimer from "../Common/CountdownTimer";

export default function PresaleInfo() {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-12">
        <CountdownTimer
          durationInSeconds={60 * 3}
          size={200}
          onComplete={() => { }}
        />
      </div>

      <div className="flex gap-4 items-stretch mb-12">
        <div className="w-full px-3 py-6 rounded-xl bg-cyan-900">
          <div className="uppercase text-gray-400">Total Raised:</div>
          <div className="text-3xl font-bold">$0.00</div>
        </div>

        <div className="w-full px-3 py-6 rounded-xl bg-cyan-900">
          <div className="uppercase text-gray-400">You Earned:</div>
          <div className="text-3xl font-bold">$0.00</div>
        </div>
      </div>

      <p className="mb-3 text-gray-400">Send ETH to following to participate</p>

      <button className="flex justify-between items-center break-all w-full lg:w-3/4 mx-auto p-3 rounded-2xl bg-slate-600 hover:bg-slate-500 transition cursor-pointer">
        0x1234567890abcdef1234567890abcdef12345678

        <Icon path={mdiContentCopy} size="1em" className="ms-3" />
      </button>
    </div>
  );
};