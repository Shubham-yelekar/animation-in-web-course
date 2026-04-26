import CourseLogo from "./CourseLogo";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <section className="relative flex flex-col gap-8 bg-neutral-50 p-2 dark:bg-neutral-900">
      <div className="flex">
        <ThemeSwitcher />
      </div>
      <h1 className="text-5xl font-semibold tracking-tight dark:tracking-tight">
        Collection of all the components I created in the course.
      </h1>
      <div className="flex gap-4">
        <div className="rounded-xl bg-neutral-100 p-3 dark:bg-neutral-800">
          <CourseLogo />
        </div>
        <div>
          <h3 className="text-md font-semibold">Animation on the Web</h3>
          <p className="text-sm text-neutral-800 dark:text-neutral-400">
            Web Animation Course by Emil{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
