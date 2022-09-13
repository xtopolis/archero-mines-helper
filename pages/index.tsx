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
        <div className="bg-white mx-auto px-0 pb-4  sticky top-0 z-50 border-b-4 border-slate-800">
          <Heading />
          <div className="px-2 flex flex-col gap-4">
            <MyHero hero={myHero} onChange={setMyHero} />
            <UnlockedHeroes
              heroes={unlockedHeroes}
              onChange={setUnlockedHeroes}
            />
          </div>
        </div>
        <BonusList bonuses={activeBonuses} showNames />
      </main>
    </div>
  );
};

export default Home;
