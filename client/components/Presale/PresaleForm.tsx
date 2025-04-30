import { mdiContentCopy } from "@mdi/js";
import Icon from "@mdi/react";

export default function PresaleForm() {
  return (
    <div>
      <p className="mb-3 text-gray-400">Send ETH to following to participate</p>

      <button className="flex text-start justify-between break-all w-full p-3 rounded-2xl bg-slate-600 hover:bg-slate-500 transition cursor-pointer">
        0x1234567890abcdef1234567890abcdef12345678

        <Icon path={mdiContentCopy} size="1.5em" className="ms-3 text-blue-400" />
      </button>
    </div>
  );
};