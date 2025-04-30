import Link from "next/link";
import Button from "../Common/Button";

export default function Navbar() {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center p-4">
        <Link href="/">
          <img src="/img/rocket.png" alt="rocket" className="w-8 h-8 me-2 inline" />
          <span className="font-bold font-poppins text-xl">rocketapps</span>
        </Link>

        <div>
          <Button className="py-2!">Connect Wallet</Button>
        </div>

      </div>
      <div className="divider my-0!" />
    </div>
  );
};