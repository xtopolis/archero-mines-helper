import { BeakerIcon } from "@heroicons/react/24/solid";

const Heading = () => {
  //
  return (
    <header className="bg-slate-700">
      <nav className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center py-4">
          <BeakerIcon width={20} height={20} color="#FFF" className="mr-4" />
          <h1 className="text-base font-medium text-white">
            Archero Mines Helper
          </h1>
        </div>
      </nav>
    </header>
  );
};

export default Heading;
