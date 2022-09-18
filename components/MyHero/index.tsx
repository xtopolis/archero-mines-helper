import { Dispatch, Fragment, SetStateAction, useState } from "react";
import { allHeroes, SingleHero } from "../../data/heroes";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/24/solid";
import { Transition, Listbox } from "@headlessui/react";
import Image from "next/image";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const everyHero = [...allHeroes].sort((a, b) => a.name.localeCompare(b.name));

interface iMyHero {
  hero: SingleHero;
  onChange: Dispatch<SetStateAction<SingleHero>>;
}

const MyHero = ({ hero, onChange }: iMyHero) => {
  return (
    <div>
      <Listbox value={hero} onChange={onChange}>
        {({ open }) => (
          <>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                <span className="flex items-center">
                  <Image
                    src={`avatars/${hero.name.toLocaleLowerCase()}.jpeg`}
                    alt={hero.name}
                    className="h-6 w-6 flex-shrink-0 rounded-full"
                    width={24}
                    height={24}
                  />
                  <span className="ml-3 block truncate">{hero.name}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {everyHero.map((hero) => (
                    <Listbox.Option
                      key={hero.id}
                      className={({ active }) =>
                        classNames(
                          active ? "text-white bg-indigo-600" : "text-gray-900",
                          "relative cursor-default select-none py-2 pl-3 pr-9"
                        )
                      }
                      value={hero}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <Image
                              src={`avatars/${hero.name.toLocaleLowerCase()}.jpeg`}
                              alt={hero.name}
                              className="h-6 w-6 flex-shrink-0 rounded-full"
                              width={24}
                              height={24}
                            />
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal",
                                "ml-3 block truncate"
                              )}
                            >
                              {hero.name}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-indigo-600",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default MyHero;
