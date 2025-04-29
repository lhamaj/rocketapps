import { mdiHeart } from "@mdi/js";
import Icon from "@mdi/react";
import Button from "@/components/Common/Button";

const NETWORK_FEE = 5;

export default function PresaleForm() {
  return (
    <div className="text-center">
      <Icon path={mdiHeart} size="3em" className="inline text-purple-400 mb-6" />

      <h3 className="text-3xl font-bold mb-6">People are loving your idea</h3>

      <div className="text-gray-400 mb-6">
        <p>
          Start your <span className="text-white">3-minute token presale</span>.
        </p>
        <p>
          You get <span className="text-white">30%</span> of funds raised + <span className="text-white">3%</span> trade tax later.
        </p>
      </div>

      <Button className="bg-purple-500 w-1/2 mx-auto block mb-2">Start Presale</Button>

      <small className="text-gray-400">A small network fee (~${NETWORK_FEE}) applies to launch the presale</small>
    </div>
  );
};