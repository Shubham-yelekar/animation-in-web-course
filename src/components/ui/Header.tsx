import { GlobeIcon, LinkedinLogoIcon, XLogoIcon } from "@phosphor-icons/react";
import ThemeSwitcher from "./ThemeSwitcher";

const SOCIAL_LINKS = [
  {
    label: "Twitter",
    href: "https://twitter.com/shubhamyelekar",
    icon: <XLogoIcon size={14} weight="bold" />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/shubhamyelekar",
    icon: <LinkedinLogoIcon size={14} weight="bold" />,
  },
  {
    label: "Website",
    href: "https://shubhamyelekar.com",
    icon: <GlobeIcon size={14} weight="bold" />,
  },
];

const Header = () => {
  return (
    <nav className="bg-card border-border flex items-center justify-between border-b px-3 py-2 backdrop-blur-sm">
      <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
        Shubham Yelekar
      </p>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          {SOCIAL_LINKS.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center justify-center rounded-md p-1.5 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
            >
              {icon}
            </a>
          ))}
        </div>

        <div className="h-4 w-px bg-neutral-200 dark:bg-neutral-700" />

        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Header;
