import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { BeakerIcon } from "@heroicons/react/24/solid";

const Heading = () => {
  //
  return (
    <header className="bg-slate-700">
      <nav className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center py-4 justify-between">
          <div className="flex">
            <BeakerIcon width={20} height={20} color="#FFF" className="mr-4" />
            <h1 className="text-base font-medium text-white">
              Archero Mystery Mines Helper
            </h1>
          </div>
          <a
            href="https://github.com/xtopolis/archero-mines-helper"
            title="Github Repo"
          >
            <CodeBracketIcon
              className="text-slate-500 hover:text-white"
              width={24}
              height={24}
            />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Heading;
