import { Bonus } from "../../data/bonuses";
import { CalendarIcon } from "@heroicons/react/24/solid";

interface BonusList {
  bonuses: Bonus[];
  showNames?: boolean;
}

const BonusList = ({ bonuses, showNames = false }: BonusList) => {
  if (bonuses.length === 0) return <p>No matches.</p>;

  return (
    <div className="h-screen overflow-y-auto bg-white shadow sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {bonuses.map((bonus) => (
          <li key={bonus.id}>
            <a href="#" className="block hover:bg-gray-50">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div className="truncate">
                    <div className="flex text-sm">
                      <p className="truncate font-medium text-indigo-600">
                        {bonus.attribute}
                      </p>
                      <p className="ml-1 flex-shrink-0 font-normal text-gray-500">
                        +{bonus.percentIncrease}%
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                    <div className="flex space-x-2 overflow-hidden">
                      {!showNames &&
                        bonus.heroes.map((hero) => (
                          <img
                            key={hero}
                            className="inline-block h-8 w-8 rounded-full "
                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt={hero}
                          />
                        ))}
                      {showNames && (
                        <p key={bonus.id} className="text-sm text-gray-500">
                          {bonus.heroes.join(", ")}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BonusList;
