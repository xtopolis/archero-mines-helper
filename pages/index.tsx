import { Tab } from "@headlessui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useMemo, useState } from "react";
import BonusList from "../components/Bonus";
import Heading from "../components/Header";
import MyHero from "../components/MyHero";
import UnlockedHeroes from "../components/UnlockedHeroes";
import { bonuses } from "../data/bonuses";
import { allHeroes, SingleHero } from "../data/heroes";
import styles from "../styles/Home.module.css";

const defaultHero = allHeroes.find((h) => h.name === "Atreus")!;

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Home: NextPage = () => {
  const [myHero, setMyHero] = useState<SingleHero>(defaultHero);
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
    <div className={styles.container}>
      <Head>
        <title>Archero Mines Helper</title>
        <meta name="description" content="Find the best bonus for the mines" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="bg-white mx-auto">
          <Heading />
          <div className="px-2 pt-2 sticky z-50 flex flex-col gap-4 mb-4">
            <MyHero hero={myHero} onChange={setMyHero} />
            <UnlockedHeroes
              heroes={unlockedHeroes}
              onChange={setUnlockedHeroes}
            />
          </div>

          <div className="border-t-4 border-gray-300 px-2 pl-4 pr-0 sm:px-6">
            <div className="h-screen overflow-y-auto bg-white sm:rounded-md pr-4">
              <BonusList bonuses={activeBonuses} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
