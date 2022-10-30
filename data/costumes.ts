import { Hero } from "./types";

type Attribute = "Max HP" | "Attack" | "Weapon droprate +%";

// TODO: Calcs
// https://old.reddit.com/r/Archero/comments/nekj5o/guide_to_ancient_maze_tickets/

interface Costume {
  name: string;
  hero: Hero;
  bonus: string;
  ticketCost: number;
  ticketType: "Premium" | "Exquisite" | "Event";
  allHeroBonus: {
    amount: number;
    attribute: Attribute;
  };
}

export const costumes: Costume[] = [
  {
    name: "Royal Knight",
    hero: "Urasil",
    ticketCost: 55,
    ticketType: "Exquisite",
    bonus: "15% chance to resist long-distance damage",
    allHeroBonus: { amount: 150, attribute: "Max HP" },
  },
  {
    name: "Black Order",
    hero: "Urasil",
    ticketCost: 60,
    ticketType: "Exquisite",
    bonus: "When HP is lower than 25%, Poison damage increased 100%",
    allHeroBonus: { amount: 150, attribute: "Max HP" },
  },
  {
    name: "Flame Student",
    hero: "Phoren",
    ticketCost: 20,
    ticketType: "Exquisite",
    bonus: "Flame damage can reduce enemy movement speed, lasting 2s",
    allHeroBonus: { amount: 40, attribute: "Attack" },
  },
  {
    name: "Brawler",
    hero: "Phoren",
    ticketCost: 0,
    ticketType: "Event",
    bonus:
      "Chance to instakill enemies. Enemies explode when taking Fire damage over time",
    allHeroBonus: { amount: 85, attribute: "Attack" },
  },
  {
    name: "Thunder Lord",
    hero: "Taranis",
    ticketCost: 100,
    ticketType: "Exquisite",
    bonus:
      "When moving, chance to deal Lightning damage to nearby enemies each sec",
    allHeroBonus: { amount: 200, attribute: "Max HP" },
  },
  {
    name: "Zombie Incoming",
    hero: "Helix",
    ticketCost: 100,
    ticketType: "Premium",
    bonus: "Chance for Headshot when own HP is lower than 30%",
    allHeroBonus: { amount: 60, attribute: "Attack" },
  },
  {
    name: "Coast Guard",
    hero: "Helix",
    ticketCost: 120,
    ticketType: "Exquisite",
    bonus: "When near water, attack & movement speed increased",
    allHeroBonus: { amount: 60, attribute: "Attack" },
  },
  {
    name: "Bear Master",
    hero: "Helix",
    ticketCost: 120,
    ticketType: "Exquisite",
    bonus: "5% increase damage to enemies on foot",
    allHeroBonus: { amount: 60, attribute: "Attack" },
  },
  {
    name: "Sweetheart Teddy",
    hero: "Helix",
    ticketCost: 100,
    ticketType: "Premium",
    bonus: "Hitting enemies has a chance to freeze or burn them",
    allHeroBonus: { amount: 600, attribute: "Max HP" },
  },
  {
    name: "Cat Warlock",
    hero: "Meowgik",
    ticketCost: 120,
    ticketType: "Exquisite",
    bonus:
      "Dodge rate increased 5s after kill; the higher your level, the higher the dodge rate",
    allHeroBonus: { amount: 200, attribute: "Max HP" },
  },
  {
    name: "Cherry Kitty",
    hero: "Meowgik",
    ticketCost: 105,
    ticketType: "Premium",
    bonus:
      "When dying there's a 20% chance to be resurrected in a random Meowspirit's location",
    allHeroBonus: { amount: 500, attribute: "Max HP" },
  },
  {
    name: "Holiday Kitty",
    hero: "Meowgik",
    ticketCost: 100,
    ticketType: "Premium",
    bonus:
      "Collision damage reduced 20%, spinning Crabs can be used replace Tornado",
    allHeroBonus: { amount: 500, attribute: "Max HP" },
  },
  {
    name: "Chef Kitty",
    hero: "Meowgik",
    ticketCost: 150,
    ticketType: "Premium",
    bonus:
      "Increases attack after Crit attack. Meowspirit has chance to cause Fire damage",
    allHeroBonus: { amount: 600, attribute: "Max HP" },
  },
  {
    name: "Shaman Sacrifice",
    hero: "Shari",
    ticketCost: 40,
    ticketType: "Exquisite",
    bonus: "When around vines, damage resistance is increased by 10%",
    allHeroBonus: { amount: 150, attribute: "Max HP" },
  },
  {
    name: "Little Witch",
    hero: "Ayana",
    ticketCost: 145,
    ticketType: "Exquisite",
    bonus:
      "After being transported, collision damage is reduced by 25% within 3s",
    allHeroBonus: { amount: 60, attribute: "Attack" },
  },
  {
    name: "Beach Dance",
    hero: "Ayana",
    ticketCost: 100,
    ticketType: "Premium",
    bonus: "After each Charm, a small puddle is left which reduces enemy speed",
    allHeroBonus: { amount: 60, attribute: "Attack" },
  },
  {
    name: "Enchantress",
    hero: "Ayana",
    ticketCost: 0,
    ticketType: "Event",
    bonus: "Continuously charms nearby enemies",
    allHeroBonus: { amount: 110, attribute: "Attack" },
  },
  {
    name: "Athenian Lord",
    hero: "Onir",
    ticketCost: 95,
    ticketType: "Exquisite",
    bonus:
      "Every 10s, Light stats damage is increased 10%, disappears at the end of battle",
    allHeroBonus: { amount: 250, attribute: "Max HP" },
  },
  {
    name: "Ice Empress",
    hero: "Rolla",
    ticketCost: 70,
    ticketType: "Premium",
    bonus: "Surrounding enemies will automatically have reduced movement speed",
    allHeroBonus: { amount: 100, attribute: "Attack" },
  },
  {
    name: "Sweet Proposal",
    hero: "Rolla",
    ticketCost: 0,
    ticketType: "Event",
    bonus:
      "Continuously attacking the enemy will increase attack and dodge rate, can be stack up to 10%",
    allHeroBonus: { amount: 100, attribute: "Attack" },
  },
  {
    name: "Pirate Captain",
    hero: "Bonnie",
    ticketCost: 20,
    ticketType: "Premium",
    bonus: "Bonnie's clone duration increased with the amount of abilities",
    allHeroBonus: { amount: 250, attribute: "Max HP" },
  },
  {
    name: "Ghost Captain",
    hero: "Bonnie",
    ticketCost: 120,
    ticketType: "Premium",
    bonus:
      "Turn into a ghost at intervals, during which projectiles and enemies will pass through",
    allHeroBonus: { amount: 250, attribute: "Max HP" },
  },
  {
    name: "Elegant Prince",
    hero: "Sylvan",
    ticketCost: 95,
    ticketType: "Premium",
    bonus: "When stationary, attack is increased by 4%",
    allHeroBonus: { amount: 120, attribute: "Attack" },
  },
  {
    name: "Commander",
    hero: "Sylvan",
    ticketCost: 0,
    ticketType: "Event",
    bonus:
      "Gain elemental damage resistance. Boost summoned creatures' random elemental damage",
    allHeroBonus: { amount: 350, attribute: "Max HP" },
  },
  {
    name: "Sweet Proposal",
    hero: "Sylvan",
    ticketCost: 0,
    ticketType: "Event",
    bonus:
      "When getting Skills, there's a higher chance to get an Elemental skill",
    allHeroBonus: { amount: 120, attribute: "Attack" },
  },
  {
    name: "Vampire Count",
    hero: "Sylvan",
    ticketCost: 250,
    ticketType: "Exquisite",
    bonus:
      "Killing enemies restores a little HP. Killing bosses restores more HP",
    allHeroBonus: { amount: 350, attribute: "Max HP" },
  },
  {
    name: "Legendary Assassin",
    hero: "Shade",
    ticketCost: 95,
    ticketType: "Premium",
    bonus: "In shadow form, collision damage is reduced by 5%",
    allHeroBonus: { amount: 120, attribute: "Attack" },
  },
  {
    name: "Crimson Blade",
    hero: "Shade",
    ticketCost: 0,
    ticketType: "Event",
    bonus: "Lower the HP, faster the movement speed",
    allHeroBonus: { amount: 120, attribute: "Attack" },
  },
  {
    name: "Diver Pro",
    hero: "Shade",
    ticketCost: 100,
    ticketType: "Premium",
    bonus: "During Shadow form, dodge rate increased 8%",
    allHeroBonus: { amount: 120, attribute: "Attack" },
  },
  {
    name: "Demon Shift",
    hero: "Shade",
    ticketCost: 55,
    ticketType: "Premium",
    bonus: "The lower the HP, the stronger the recovery of HP",
    allHeroBonus: { amount: 100, attribute: "Attack" },
  },
  {
    name: "Trick or Treat",
    hero: "Ryan",
    ticketCost: 100,
    ticketType: "Premium",
    bonus:
      "Hitting enemy has a chance to summon a magic Pumpkin, dealing continuous elemental damage",
    allHeroBonus: { amount: 600, attribute: "Max HP" },
  },
  {
    name: "Boy Scout",
    hero: "Ryan",
    ticketCost: 150,
    ticketType: "Exquisite",
    bonus: "Attack speed increased after Crit attack, can be stacked",
    allHeroBonus: { amount: 600, attribute: "Max HP" },
  },
  {
    name: "Christmas Elf",
    hero: "Ryan",
    ticketCost: 100,
    ticketType: "Premium",
    bonus:
      "After killing the enemy, there is a chance to summon a chest that can freeze surrounding enemies",
    allHeroBonus: { amount: 8, attribute: "Weapon droprate +%" },
  },
  {
    name: "Royal Princess",
    hero: "Lina",
    ticketCost: 75,
    ticketType: "Premium",
    bonus: "Damage received when moving reduced 10%",
    allHeroBonus: { amount: 500, attribute: "Max HP" },
  },
  {
    name: "Mermaid Garb",
    hero: "Lina",
    ticketCost: 100,
    ticketType: "Premium",
    bonus: "Can walk on water",
    allHeroBonus: { amount: 525, attribute: "Max HP" },
  },
  {
    name: "Family Armor",
    hero: "Shingen",
    ticketCost: 100,
    ticketType: "Premium",
    bonus:
      "Immunity to collision damage +7%, projectile damage +4%, attack increased +4%",
    allHeroBonus: { amount: 125, attribute: "Attack" },
  },
  {
    name: "Sushi Master",
    hero: "Shingen",
    ticketCost: 125,
    ticketType: "Premium",
    bonus:
      "Chance to perform +1 attack when melee attacking. Also increases movement speed",
    allHeroBonus: { amount: 130, attribute: "Attack" },
  },
  {
    name: "Mummy Returns",
    hero: "Gugu",
    ticketCost: 0,
    ticketType: "Event",
    bonus: "Reduces enemy movement speed, reduces damage received from behind",
    allHeroBonus: { amount: 125, attribute: "Attack" },
  },
  {
    name: "Merry Christmas",
    hero: "Iris",
    ticketCost: 100,
    ticketType: "Premium",
    bonus:
      "When HP is low, it'll be recovered over time (only triggered once).",
    allHeroBonus: { amount: 700, attribute: "Max HP" },
  },
  {
    name: "Baking Sweety",
    hero: "Melinda",
    ticketCost: 120,
    ticketType: "Premium",
    bonus:
      "Gain Rage 5s after damage, increases attack. Gain Joy 5s after looting a Heart, increases dodge rate",
    allHeroBonus: { amount: 750, attribute: "Max HP" },
  },
  {
    name: "Huffy Melinda",
    hero: "Melinda",
    ticketCost: 150,
    ticketType: "Premium",
    bonus:
      "Melinda hates math, but when her HP is multiples of 3, 17, and 59, her Attack is greatly increased. Her Movement and Dodge Rate are increased at",
    allHeroBonus: { amount: 750, attribute: "Max HP" },
  },
  {
    name: "Rockstar",
    hero: "Blazo",
    ticketCost: 120,
    ticketType: "Premium",
    bonus:
      "Rock n' roll style changes with mood; various styles have various effects",
    allHeroBonus: { amount: 130, attribute: "Attack" },
  },
  {
    name: "Snow Maiden Elaine",
    hero: "Elaine",
    ticketCost: 150,
    ticketType: "Premium",
    bonus:
      "Immune to freeze. Also slows or freezes surrounding enemies. Greatly increases ice damage and ice damage resistance",
    allHeroBonus: { amount: 150, attribute: "Attack" },
  },
];
