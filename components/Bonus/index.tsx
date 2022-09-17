import { useMemo, useState } from "react";
import { Bonus } from "../../data/bonuses";

const Synergy = ({ bonus }: { bonus: Bonus }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex items-center space-x-4 m-2">
      <div className="min-w-0 flex-1">
        <p className=" text-sm text-gray-500">
          {show
            ? `${bonus.heroes.join(", ")}`
            : `+${bonus.percentIncrease}% ${bonus.attribute}`}
        </p>
      </div>
      <div>
        <a
          href="#"
          className="inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50"
          onClick={() => setShow(!show)}
        >
          {show ? "Hide" : "Show"}
        </a>
      </div>
    </div>
  );
};

const Synergies = ({ synergies }: { synergies: Bonus[] }) => {
  return (
    <div className="mt-4">
      <p className="text-xs underline underline-offset-2">Synergies</p>
      {synergies.map((b) => (
        <Synergy key={b.id} bonus={b} />
      ))}
    </div>
  );
};

interface BonusList {
  bonuses: Bonus[];
}

const BonusList = ({ bonuses }: BonusList) => {
  const sortedBonuses = useMemo(() => {
    return bonuses.sort((a, b) =>
      a.percentIncrease > b.percentIncrease
        ? -1
        : a.percentIncrease === b.percentIncrease
        ? 0
        : 1
    );
  }, [bonuses]);

  const topSynergiesMap = useMemo(() => {
    const synMap = new Map<number, Bonus[]>();
    bonuses.forEach((bonus) => {
      const bId = bonus.id;
      const heroSet = new Set(bonus.heroes);

      const synergies = bonuses.reduce((prev: Bonus[], curr: Bonus) => {
        if (bId === curr.id) return prev;

        const isSubset = curr.heroes.every((h) => heroSet.has(h));

        if (!isSubset) return prev;

        return [...prev, curr];
      }, []);

      if (synergies.length > 0) {
        synMap.set(bId, synergies);
      }
    });
    return synMap;
  }, [bonuses]);

  if (bonuses.length === 0) return <p className="mt-4">No matches.</p>;

  return (
    <ul role="list" className="p-2">
      {sortedBonuses.map((bonus) => {
        let attributeClass = "";
        switch (bonus.attribute) {
          case "Attack Speed":
            attributeClass = "text-green-600";
            break;
          case "Crit Chance":
          case "Crit Damage":
            attributeClass = "text-red-600";
            break;
          default:
            attributeClass = "text-sky-600";
        }

        const synergies = topSynergiesMap.get(bonus.id);

        return (
          <li
            key={bonus.id}
            className="rounded-lg bg-white mt-4 mb-4 border border-slate-500 shadow"
          >
            <div className="flex items-center px-4 py-4 sm:px-6">
              <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                <div className="truncate">
                  <div className="flex text-sm">
                    <p className={`truncate font-medium ${attributeClass}`}>
                      {bonus.attribute}
                    </p>
                    <p className="ml-1 flex-shrink-0 font-normal text-gray-500">
                      +{bonus.percentIncrease}%
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                  <div className="flex space-x-2 overflow-hidden">
                    <p key={bonus.id} className="text-sm text-gray-500">
                      {bonus.heroes.join(", ")}
                    </p>
                  </div>
                  {synergies && <Synergies synergies={synergies} />}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default BonusList;
