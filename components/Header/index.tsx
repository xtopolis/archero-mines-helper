import { SparklesIcon } from "@heroicons/react/24/solid";

const Heading = () => {
  //
  return (
    <header className="bg-slate-700">
      <nav className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-4 lg:border-none">
          <h1 className="text-base font-medium text-white">
            <SparklesIcon
              width={24}
              height={24}
              color="#FFF"
              className="inline-block mr-4"
            />
            Archero Mines Helper
          </h1>
        </div>
      </nav>
    </header>
  );
};

export default Heading;
