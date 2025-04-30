'use client';

import CountdownTimer from "../Common/CountdownTimer";

export default function PresaleStatus() {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-12">
        <CountdownTimer
          durationInSeconds={60 * 3}
          size={200}
          onComplete={() => { }}
        />
      </div>

      <div className="flex gap-4 items-stretch">
        <div className="w-full px-3 py-6 rounded-xl border border-green-400">
          <div className="uppercase text-sm">Total Raised:</div>
          <div className="text-3xl font-bold text-green-400">$0.00</div>
        </div>

        <div className="w-full px-3 py-6 rounded-xl border border-gray-400">
          <div className="uppercase text-sm">Total Participants:</div>
          <div className="text-3xl font-bold">0</div>
        </div>

        <div className="w-full px-3 py-6 rounded-xl border border-gray-400">
          <div className="uppercase text-sm">You Earned:</div>
          <div className="text-3xl font-bold">$0.00</div>
        </div>
      </div>
    </div>
  );
};