import { useTheme } from "../../stores/ThemeProvider";
import { SunIcon, MoonIcon } from "@phosphor-icons/react";
const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex w-fit gap-2 place-self-end rounded-full border border-neutral-200 p-1 dark:border-neutral-700">
      <button onClick={() => setTheme("light")}>
        <SunIcon size={16} weight="fill" />
      </button>
      <button onClick={() => setTheme("dark")}>
        <MoonIcon size={16} weight="fill" />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
