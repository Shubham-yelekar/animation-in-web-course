import { GlobeIcon, LinkedinLogoIcon, XLogoIcon } from "@phosphor-icons/react";

const LINKS = [
  {
    label: "Twitter",
    href: "https://twitter.com/shubhamyelekar",
    icon: <XLogoIcon size={16} weight="bold" />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/shubhamyelekar",
    icon: <LinkedinLogoIcon size={16} weight="bold" />,
  },
  {
    label: "Website",
    href: "https://shubhamyelekar.com",
    icon: <GlobeIcon size={16} weight="bold" />,
  },
];

const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 border-t border-neutral-200 px-2 py-4 dark:border-neutral-800">
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Components built while taking{" "}
        <span className="font-medium text-neutral-800 dark:text-neutral-200">
          Animations on the Web
        </span>{" "}
        by Emil Kowalski. Each piece explores a different animation pattern.
      </p>

      <div className="flex items-center gap-2">
        <span className="text-xs text-neutral-400 dark:text-neutral-500">
          Find me on
        </span>
        <div className="flex gap-2">
          {LINKS.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-1.5 text-xs font-medium text-neutral-600 transition-colors hover:border-neutral-300 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-700 dark:hover:bg-neutral-800"
            >
              {icon}
              {label}
            </a>
          ))}
        </div>
      </div>

      <p className="text-xs text-neutral-400 dark:text-neutral-600">
        © {new Date().getFullYear()} Shubham Yelekar
      </p>
    </footer>
  );
};

export default Footer;
