import { mdiArrowRight, mdiLinkVariant } from "@mdi/js";
import Icon from "@mdi/react";
import LinkButton from "../Common/LinkButton";

const socialMediaLinks = [{
  id: 'x',
  href: 'https://x.com',
  icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-white"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
}, {
  id: 'tg',
  href: 'https://t.me',
  icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-white"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
}];

const linkClassName = 'rounded-full p-4 bg-slate-600 w-14 h-14 cursor-pointer hover:bg-slate-500 hover:-translate-y-1 transition';

export default function SharingTools() {
  const handleCopyLink = () => {
    console.log('Link copied!');
  };

  return (
    <div className="pt-18  text-center">
      <h3 className="text-3xl font-bold mb-6">Spread the Word & Pump Your token!</h3>

      <div className="flex gap-4 items-center justify-center mb-12">
        {socialMediaLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={linkClassName}
          >
            {link.icon}
          </a>
        ))}

        <span
          className={linkClassName}
          onClick={handleCopyLink}
        >
          <Icon path={mdiLinkVariant} size="1.5em" />
        </span>
      </div>

      <div className="divider" />

      <LinkButton href="/" className="block w-full">
        Start Trading Other Ideas

        <Icon path={mdiArrowRight} size="1.2em" className="inline ms-2" />
      </LinkButton>
    </div >
  );
};