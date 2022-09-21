import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import BonusList from "../components/Bonus";
import Heading from "../components/Header";
import MyHero from "../components/MyHero";
import UnlockedHeroes from "../components/UnlockedHeroes";
import { bonuses } from "../data/bonuses";
import { allHeroes, SingleHero } from "../data/heroes";

const defaultHero = allHeroes.find((h) => h.name === "Atreus")!;

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const localStorageKey = "ArcheroMinesHelperDefaultHero";
const writeToLocalStorage = (heroName: string) => {
  if (window.localStorage) {
    window.localStorage.setItem(localStorageKey, heroName);
  }
};

const Home: NextPage = () => {
  const [myHero, setMyHero] = useState<SingleHero>(defaultHero);
  useEffect(() => {
    if (window.localStorage) {
      const storedHero = window.localStorage.getItem(localStorageKey);
      const matchedHero = allHeroes.find((h) => h.name === storedHero);
      setMyHero(matchedHero || defaultHero);
    } else {
      setMyHero(defaultHero);
    }
  }, []);

  const [unlockedHeroes, setUnlockedHeroes] = useState<SingleHero[]>([
    ...allHeroes,
  ]);

  const validHeroes = useMemo(
    () => [...unlockedHeroes, myHero].map((h) => h.name),
    [unlockedHeroes, myHero]
  );

  const activeBonuses = useMemo(
    () =>
      bonuses.filter((b) =>
        b.heroes.every((h) => validHeroes.includes(h) && h !== myHero.name)
      ),
    [myHero, validHeroes]
  );

  return (
    <div className="h-screen">
      <Head>
        <title>Archero Mines Helper</title>
        <meta name="description" content="Find the best bonus for the mines" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-white mx-auto flex flex-col h-screen overflow-hidden">
          <Heading />
          <div className="px-2 pt-2 flex flex-col gap-4 mb-4">
            <MyHero
              hero={myHero}
              onChange={(v) => {
                setMyHero(v);
                writeToLocalStorage(v.name);
              }}
            />
            <UnlockedHeroes
              heroes={unlockedHeroes}
              onChange={setUnlockedHeroes}
            />
          </div>

          <div className="border-t-4 border-gray-300 px-2 pl-4 pr-0 sm:px-6 h-full overflow-y-auto">
            <div className="bg-white sm:rounded-md pr-4">
              <BonusList bonuses={activeBonuses} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
