import { Buff, Hero } from "./types";

interface Bonus {
    id: number;
    attribute: Buff;
    percentIncrease: number;
    heroes: Hero[];
}

export const bonuses: Bonus[] = [
    { id: 1, attribute: "Damage bonus", percentIncrease: 20, heroes: ["Urasil", "Phoren", "Taranis", "Shade"] },
    { id: 2, attribute: "Damage bonus", percentIncrease: 30, heroes: ["Sylvan", "Shade", "Aquea", "Shingen"] },
    { id: 3, attribute: "Crit Chance", percentIncrease: 17, heroes: ["Meowgik", "Ryan", "Aquea"] },
    { id: 4, attribute: "Attack Speed", percentIncrease: 22, heroes: ["Sylvan", "Shingen"] },
    { id: 5, attribute: "Damage to Mobs", percentIncrease: 15, heroes: ["Urasil", "Phoren", "Taranis"] },
    { id: 6, attribute: "Damage to Bosses", percentIncrease: 13, heroes: ["Onir", "Sylvan"] },
    { id: 7, attribute: "Damage to Airborne Units", percentIncrease: 13, heroes: ["Shari", "Ayana"] },
    { id: 8, attribute: "Damage to Ground Units", percentIncrease: 15, heroes: ["Rolla", "Shade", "Lina"] },
    { id: 9, attribute: "Damage bonus", percentIncrease: 13, heroes: ["Atreus", "Rolla"] },
    { id: 10, attribute: "Crit Damage", percentIncrease: 40, heroes: ["Ophelia", "Ryan", "Lina"] },
    { id: 11, attribute: "Crit Chance", percentIncrease: 15, heroes: ["Sylvan", "Shade", "Ryan"] },
    { id: 12, attribute: "Attack Speed", percentIncrease: 15, heroes: ["Taranis", "Helix", "Onir"] },
    { id: 13, attribute: "Damage bonus", percentIncrease: 24, heroes: ["Helix", "Meowgik", "Ayana"] },
    { id: 14, attribute: "Damage to Mobs", percentIncrease: 15, heroes: ["Shade", "Urasil"] },
    { id: 15, attribute: "Damage to Bosses", percentIncrease: 10, heroes: ["Urasil", "Ryan"] },
    { id: 16, attribute: "Damage to Airborne Units", percentIncrease: 10, heroes: ["Meowgik", "Ryan"] },
    { id: 17, attribute: "Damage to Ground Units", percentIncrease: 10, heroes: ["Rolla", "Sylvan"] },
    { id: 18, attribute: "Crit Damage", percentIncrease: 24, heroes: ["Atreus", "Urasil", "Phoren"] },
    { id: 19, attribute: "Crit Chance", percentIncrease: 12, heroes: ["Rolla", "Bonnie", "Ayana", "Lina"] },
    { id: 20, attribute: "Attack Speed", percentIncrease: 17, heroes: ["Helix", "Meowgik", "Shade"] },
    { id: 21, attribute: "Attack Speed", percentIncrease: 30, heroes: ["Meowgik", "Ryan", "Gugu", "Iris"] },
    { id: 22, attribute: "Damage to Bosses", percentIncrease: 18, heroes: ["Ophelia", "Blazo"] },
];