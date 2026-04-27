import CourseLogo from "./CourseLogo";

const Header = () => {
  return (
    <section className="relative flex flex-col gap-8 bg-neutral-50 px-2 py-4 dark:bg-neutral-900">
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
