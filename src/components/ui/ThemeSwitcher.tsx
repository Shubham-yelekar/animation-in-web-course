import { useTheme } from "../../stores/ThemeProvider";
import { SunIcon } from "@phosphor-icons/react";
const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="flex w-fit gap-2 place-self-end rounded-full border border-neutral-200 p-1 dark:border-neutral-700">
      <button
        onClick={() => handleToggle()}
        className="cursor-pointer rounded-full p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800"
      >
        <SunIcon
          size={16}
          weight="fill"
          className={theme === "light" ? "text-yellow-500" : "text-yellow-300"}
        />
      </button>
      {/* <button onClick={() => setTheme("dark")}>
        <MoonIcon size={16} weight="fill" />
      </button> */}
    </div>
  );
};

export default ThemeSwitcher;
