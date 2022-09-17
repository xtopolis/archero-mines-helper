import { Dispatch, Fragment, SetStateAction } from "react";
import { allHeroes, SingleHero } from "../../data/heroes";
import {
  ChevronUpDownIcon,
  CheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { UserGroupIcon as EmptyUserUserGroupIcon } from "@heroicons/react/24/outline";
import { Transition, Listbox } from "@headlessui/react";
import Image from "next/image";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const everyHero = [...allHeroes].sort((a, b) => a.name.localeCompare(b.name));
const ALL_HEROES_LENGTH = everyHero.length;
const avatar = (id: number) => {
  const avatars = [
    "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'",
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'",
    "https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'",
    "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'",
    "https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'",
    "https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'",
  ];
  const a = Math.abs(avatars.length - id);
  return avatars[a];
};

interface iUnlockedHeroes {
  heroes: SingleHero[];
  onChange: Dispatch<SetStateAction<SingleHero[]>>;
}

const UnlockedHeroes = ({ heroes, onChange }: iUnlockedHeroes) => {
  const SELECTED_HEROES_LENGTH = heroes.length;
  const allSelected = SELECTED_HEROES_LENGTH === ALL_HEROES_LENGTH;
  const selectedHeroesText = allSelected
    ? "All heroes"
    : SELECTED_HEROES_LENGTH
    ? `${SELECTED_HEROES_LENGTH} heroes`
    : "No heroes";

  return (
    <div>
      <Listbox value={heroes} onChange={onChange} multiple>
        {({ open }) => (
          <>
            <div className="relative mt-1">
              <Listbox.Button className="relative cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                <span className="flex items-center">
                  {allSelected ? (
                    <UserGroupIcon className="h-6 w-6 flex-shrink-0 rounded-full" />
                  ) : (
                    <EmptyUserUserGroupIcon className="h-6 w-6 flex-shrink-0 rounded-full" />
                  )}
                  <span className="ml-3 block truncate">
                    {selectedHeroesText}
                  </span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <button
                type="button"
                className="items-center right-0 absolute top-1/2 -translate-y-1/2 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 focus:outline-none"
                onClick={() => onChange(allSelected ? [] : [...allHeroes])}
                aria-label={
                  allSelected ? "Deselect all heroes" : "Select all heroes"
                }
              >
                Select {allSelected ? "None" : "All"}
              </button>

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
                              src={`/avatars/${hero.name.toLocaleLowerCase()}.jpeg`}
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

export default UnlockedHeroes;
