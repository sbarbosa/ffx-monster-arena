type GenericValue = {
  name: string;
  percentage?: string;
  values: string | string[];
};

type Monster = {
  sensorDescription: string;
  img: string;
  statusesAndImmunities: GenericValue[];
  abilities: GenericValue[];
  stats: GenericValue[];
  monsterArena: string;
  otherInformation: string;
  items: GenericValue[];
  species: string;
  scanDescription: string;
  location: string[];
  elementalAffinities: GenericValue[];
};

export const monsters: { [monsterName: string]: Monster } = {
  Condor: {
    sensorDescription: 'Aerial. Magic attacks are the way to go.',
    img: 'Condor-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack only.']
      },
      {
        name: 'Ronso Rage',
        values: 'N/A'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '95'
      },
      {
        name: 'MP',
        values: '15'
      },
      {
        name: 'Strength',
        values: '9'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '1'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '10'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '2'
      },
      {
        name: 'Gil',
        values: '12'
      }
    ],
    monsterArena: 'besaid',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Phoenix Down'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Smoke Bomb'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Speed Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Speed Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-2 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Sensor', 'Piercing', 'Distill Speed']
      },
      {
        name: 'Armor abilities',
        values: ['Dark Ward', 'Magic Def +3%']
      },
      {
        name: 'Bribe',
        values: 'Smoke Bomb x3'
      }
    ],
    species: 'Bird',
    scanDescription:
      "Aerial and hard to hit. Use Wakka's attack to knock it down. It's vulnerable to fire, so you can also use Lulu's Fire spell.",
    location: ['Besaid'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '150%'
      },
      {
        name: 'Ice',
        values: '-'
      },
      {
        name: 'Lightning',
        values: '-'
      },
      {
        name: 'Water',
        values: '-'
      },
      {
        name: 'Holy',
        values: '-'
      }
    ]
  },
  'Floating Death': {
    sensorDescription: 'Immune to sensors',
    img: 'Ahriman-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'gaze attack', 'Sonic Wave']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '6,700'
      },
      {
        name: 'MP',
        values: '520'
      },
      {
        name: 'Strength',
        values: '1'
      },
      {
        name: 'Magic',
        values: '45'
      },
      {
        name: 'Defense',
        values: '1 [10]'
      },
      {
        name: 'Magic Defense',
        values: '120 [150]'
      },
      {
        name: 'Agility',
        values: '33'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '18'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '7,100'
      },
      {
        name: 'Gil',
        values: '1,265'
      }
    ],
    monsterArena: 'omegadungeon',
    otherInformation: 'Numbers in square brackets are attributes in the International release.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Musk x4'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Musk x5'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '2-4 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Icestrike', 'Strength +5%', 'Magic +5%', 'Distill Speed']
      },
      {
        name: 'Armor abilities',
        values: ['Confuse Ward', 'Confuseproof', 'MP +10%']
      },
      {
        name: 'Bribe',
        values: "Gambler's Spirit x10"
      }
    ],
    species: 'Evil Eye',
    scanDescription: 'Immune to scans',
    location: ['Omega Ruins'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '-'
      },
      {
        name: 'Ice',
        values: '-'
      },
      {
        name: 'Lightning',
        values: '-'
      },
      {
        name: 'Water',
        values: '-'
      },
      {
        name: 'Holy',
        values: '-'
      }
    ]
  },
  'Nega Elemental': {
    sensorDescription: 'Immune to sensors',
    img: 'DarkElement-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: 'Immune'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (200)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 4'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Bio', 'Blizzaga', 'Drain', 'Firaga', 'Flare', 'Thundaga', 'Ultima', 'Waterga', 'Osmose', 'Reflect']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '1,300,000'
      },
      {
        name: 'MP',
        values: '999'
      },
      {
        name: 'Strength',
        values: '1'
      },
      {
        name: 'Magic',
        values: '80'
      },
      {
        name: 'Defense',
        values: '140'
      },
      {
        name: 'Magic Defense',
        values: '42'
      },
      {
        name: 'Agility',
        values: '44'
      },
      {
        name: 'Accuracy',
        values: '150'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '10,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'speciesconquest',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Star Curtain x4'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Twin Stars'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Twin Stars x2'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '2-4 slots, 2-4 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Firestrike', 'Lightningstrike (fixed)', 'Waterstrike', 'Icestrike']
      },
      {
        name: 'Armor abilities',
        values: ['Fire Eater', 'Lightning Eater (fixed)', 'Water Eater', 'Ice Eater']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Elemental',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '-100%'
      },
      {
        name: 'Ice',
        values: '-100%'
      },
      {
        name: 'Lightning',
        values: '-100%'
      },
      {
        name: 'Water',
        values: '-100%'
      },
      {
        name: 'Holy',
        values: '-100%'
      }
    ]
  },
  Kusariqqu: {
    sensorDescription: 'Covered in hard scales. Piercing weapons are the way to go. Watch out for Slow.',
    img: 'Kusariqqu.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Thunder Breath']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '445'
      },
      {
        name: 'MP',
        values: '31'
      },
      {
        name: 'Strength',
        values: '32'
      },
      {
        name: 'Magic',
        values: '35'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '120'
      },
      {
        name: 'Agility',
        values: '7'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '92'
      },
      {
        name: 'Gil',
        values: '112'
      }
    ],
    monsterArena: 'thunderplains',
    otherInformation: 'Enemy is Tough. Attack may cause Slow.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Hi-Potion'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Silver Hourglass'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '25%',
        values: '1-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Icestrike', 'Distil Power']
      },
      {
        name: 'Armor abilities',
        values: ['Slow Ward', 'Defense +5%']
      },
      {
        name: 'Bribe',
        values: 'Silver Hourglass x20'
      }
    ],
    species: 'Drake',
    scanDescription:
      "Covered with hard scales. Physical and magic defense are high, but it's weak against water. Its attack may cause slow. Watch out for its lightning-based Breath, which hits all.",
    location: ['Thunder Plains'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '150%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  "Mi'ihen Fang": {
    sensorDescription: 'Very nimble. Resistant to magic.',
    img: "Mi'ihen Fang-enemy-ffx.png",
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Attack']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '160'
      },
      {
        name: 'MP',
        values: '20'
      },
      {
        name: 'Strength',
        values: '16'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '120'
      },
      {
        name: 'Agility',
        values: '13'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '5'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '20'
      },
      {
        name: 'Gil',
        values: '33'
      }
    ],
    monsterArena: 'miihenhighroad',
    otherInformation: 'Attack  may cause Sleep or Silence.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Potion'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Sleeping Powder'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-2 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Icestrike', 'Distill Power']
      },
      {
        name: 'Armor abilities',
        values: ['Silence Ward', 'Sleep Ward', 'Magic Def +3%']
      },
      {
        name: 'Bribe',
        values: 'Sleeping Powder x1'
      }
    ],
    species: 'Lupine',
    scanDescription:
      "Very nimble and hard to hit. Magic defense is also high. It's vulnerable to fire and water-based attacks, so use weapons with these elements to inflict greater damage.",
    location: ["Mi'ihen Highroad"],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '150%'
      },
      {
        name: 'Ice',
        values: '-'
      },
      {
        name: 'Lightning',
        values: '-'
      },
      {
        name: 'Water',
        values: '150%'
      },
      {
        name: 'Holy',
        values: '-'
      }
    ]
  },
  Thorn: {
    sensorDescription: 'Counters physical attacks with Pollen, which induces sleep and darkness.',
    img: 'Thorn (FFX).jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: '95'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: '25'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '25'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Fira', 'Pollen']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '4,080'
      },
      {
        name: 'MP',
        values: '120'
      },
      {
        name: 'Strength',
        values: '1'
      },
      {
        name: 'Magic',
        values: '25'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '8'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '830'
      },
      {
        name: 'Gil',
        values: '530'
      }
    ],
    monsterArena: 'stolenfaythcavern',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Silence Grenade x2'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Ether'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '4.3%',
        values: '1-3 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Sleeptouch', 'Strength +3%', 'Strength +5%', 'Magic +3%', 'Magic +5%']
      },
      {
        name: 'Armor abilities',
        values: ['Sleep Ward', 'MP +5%']
      },
      {
        name: 'Bribe',
        values: 'Turbo Ether x16'
      }
    ],
    species: 'Fungus',
    scanDescription:
      'Casts Fira. Putting it to sleep is effective. Releases sleep and darkness-inducing Pollen when hit by a weapon. Vulnerable to fire.',
    location: ['Cavern of the Stolen Fayth'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '150%'
      },
      {
        name: 'Ice',
        values: '50%'
      },
      {
        name: 'Lightning',
        values: '50%'
      },
      {
        name: 'Water',
        values: '50%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Killer Bee': {
    sensorDescription: 'Aerial. Vulnerable to ice. Watch out for poison.',
    img: 'Killer Bee-enemy-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack only.']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '110'
      },
      {
        name: 'MP',
        values: '5'
      },
      {
        name: 'Strength',
        values: '8'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '8'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '10'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '9'
      },
      {
        name: 'Gil',
        values: '23'
      }
    ],
    monsterArena: 'kilika',
    otherInformation: 'Attack may cause Poison.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Antidote'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Poison Fang'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Speed Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Speed Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-2 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Icestrike', 'Waterstrike', 'Distill Speed']
      },
      {
        name: 'Armor abilities',
        values: ['Poison Ward', 'MP +5%']
      },
      {
        name: 'Bribe',
        values: 'Poison Fang x1'
      }
    ],
    species: 'Wasp',
    scanDescription:
      "Aerial and hard to hit. Use Wakka's attack to knock it down. It's vulnerable to ice, so Blizzard is also effective. Attacks may inflict poison.",
    location: ['Kilika Woods'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '150%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Flame Flan': {
    sensorDescription: 'Fire elemental. Vulnerable to opposing element. Resistant to physical attacks.',
    img: 'Flame Flan.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Firaga']
      },
      {
        name: 'Ronso Rage',
        values: 'N/A'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '1,500'
      },
      {
        name: 'MP',
        values: '200'
      },
      {
        name: 'Strength',
        values: '1'
      },
      {
        name: 'Magic',
        values: '20'
      },
      {
        name: 'Defense',
        values: '180'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '6'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '480'
      },
      {
        name: 'Gil',
        values: '448'
      }
    ],
    monsterArena: 'calmlands',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Fire Gem'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Fire Gem x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-3 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Distill Mana*']
      },
      {
        name: 'Armor abilities',
        values: ['Fire Ward', 'Fireproof']
      },
      {
        name: 'Bribe',
        values: 'Fire Gem x10'
      }
    ],
    species: 'Flan',
    scanDescription: 'Fire elemental. Vulnerable to opposing element. Resistant to physical attacks.',
    location: ['Calm Lands'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '-100%'
      },
      {
        name: 'Ice',
        values: '150%'
      },
      {
        name: 'Lightning',
        values: '50%'
      },
      {
        name: 'Water',
        values: '50%'
      },
      {
        name: 'Holy',
        values: '-'
      }
    ]
  },
  Grenade: {
    sensorDescription: 'Retaliates with Self-Destruct when attacked three times.',
    img: 'Grenade.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '95'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: '95'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '25'
      },
      {
        name: 'Petrify',
        values: '50'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: '50'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Bash', 'Fira', 'Self-Destruct', 'Grow 1/2']
      },
      {
        name: 'Ronso Rage',
        values: 'Self-Destruct'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '7,500'
      },
      {
        name: 'MP',
        values: '63'
      },
      {
        name: 'Strength',
        values: '26'
      },
      {
        name: 'Magic',
        values: '24'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '150'
      },
      {
        name: 'Agility',
        values: '17'
      },
      {
        name: 'Accuracy',
        values: '1'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '1,350'
      },
      {
        name: 'Gil',
        values: '540'
      }
    ],
    monsterArena: 'mtgagazet',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Fire Gem x2'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Fire Gem x3'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '15.63%',
        values: '2-3 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing (only Auron and Kimahri)', 'Firestrike', 'Distill Power']
      },
      {
        name: 'Armor abilities',
        values: ['Fire Ward', 'Fireproof']
      },
      {
        name: 'Bribe',
        values: 'Shining Gem x12'
      }
    ],
    species: 'Bomb',
    scanDescription:
      'Retaliates with Self-Destruct against whoever attacks it a third time. Weak against ice, but has high magic defence, so use Mental Break and your best ice magic. Kimahri can learn Self-Destruct.',
    location: ['Mt. Gagazet'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '-100%'
      },
      {
        name: 'Ice',
        values: '150%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Thunder Flan': {
    sensorDescription: 'Lightning elemental. Vulnerable to opposing element. Resistant to physical attacks.',
    img: 'Thunder Flan.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Thunder']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '450'
      },
      {
        name: 'MP',
        values: '50'
      },
      {
        name: 'Strength',
        values: '1'
      },
      {
        name: 'Magic',
        values: '17'
      },
      {
        name: 'Defense',
        values: '120'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '6'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '24'
      },
      {
        name: 'Gil',
        values: '50'
      }
    ],
    monsterArena: 'mushroomrockroad',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Electro Marble'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Electro Marble x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-2 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Lightningstrike', 'Distill Mana']
      },
      {
        name: 'Armor abilities',
        values: ['Lightning Ward', 'Lightningproof']
      },
      {
        name: 'Bribe',
        values: 'Lightning Marble x8'
      }
    ],
    species: 'Flan',
    scanDescription:
      "Lightning-based. So soft, it's hard to damage physically. Weak against water, so blast it with Water. Don't use lightning, or it will recover HP.",
    location: ["Mi'ihen Highroad (Oldroad only)", 'Mushroom Rock Road'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '50%'
      },
      {
        name: 'Ice',
        values: '50%'
      },
      {
        name: 'Lightning',
        values: '-100%'
      },
      {
        name: 'Water',
        values: '150%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Snow Wolf': {
    sensorDescription: 'Very nimble. Resistant to magic.',
    img: 'Snow Wolf.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack only']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '400'
      },
      {
        name: 'MP',
        values: '50'
      },
      {
        name: 'Strength',
        values: '20'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '120'
      },
      {
        name: 'Agility',
        values: '20'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '300'
      },
      {
        name: 'Gil',
        values: '192'
      }
    ],
    monsterArena: 'macalania',
    otherInformation: 'Physical attack may cause Silence or Sleep.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Sleeping Powder'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Sleeping Powder x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Icestrike', 'Distill Power']
      },
      {
        name: 'Armor abilities',
        values: ['Silence Ward', 'Sleep Ward', 'Magic Def +5%']
      },
      {
        name: 'Bribe',
        values: 'Sleeping Powder x11'
      }
    ],
    species: 'Lupine',
    scanDescription: 'Very nimble and hard to hit. Magic defense is also high. Defeat it quickly to avoid damage. Vulnerable to fire.',
    location: ['Lake Macalania'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '150%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Ogre: {
    sensorDescription: 'Be careful if it puts up its dukes.',
    img: 'Ogre (FFX).jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '0'
      },
      {
        name: 'Sleep',
        values: '95'
      },
      {
        name: 'Darkness',
        values: '95'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '25'
      },
      {
        name: 'Petrify',
        values: '25'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: '25'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '25'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack only.']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '9,400'
      },
      {
        name: 'MP',
        values: '3'
      },
      {
        name: 'Strength',
        values: '28'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '17'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '1,080'
      },
      {
        name: 'Gil',
        values: '980'
      }
    ],
    monsterArena: 'calmlands',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Stamina Spring'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Stamina Spring x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '50%',
        values: '1-2 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Strength +5%', 'Magic +5%', 'Counter-Attack']
      },
      {
        name: 'Armor abilities',
        values: ['SOS Haste', 'HP +10%']
      },
      {
        name: 'Bribe',
        values: 'Stamina Spring x50'
      }
    ],
    species: 'Ogre',
    scanDescription:
      'When it puts up its dukes, it will respond to physical attacks with a mighty counter-attack. Fire-based attacks are the way to go.',
    location: ['Calm Lands'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '150%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Greater Sphere': {
    sensorDescription: 'Immune to sensors',
    img: 'Spherimorph-enemy-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: 'Immune'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (255)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 5'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Blizzaga', 'Elemental Shift', 'Firaga', 'Flare', 'Hydraulic Press', 'Thundaga', 'Ultima', 'Waterga']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '1,500,000'
      },
      {
        name: 'MP',
        values: '999'
      },
      {
        name: 'Strength',
        values: '87'
      },
      {
        name: 'Magic',
        values: '102'
      },
      {
        name: 'Defense',
        values: '130'
      },
      {
        name: 'Magic Defense',
        values: '120'
      },
      {
        name: 'Agility',
        values: '55'
      },
      {
        name: 'Accuracy',
        values: '200'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '50,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'original',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: "Gambler's Spirit"
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Return Sphere'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Luck Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '2-4 slots, 1 ability'
      },
      {
        name: 'Weapon abilities',
        values: ['One MP Cost']
      },
      {
        name: 'Armor abilities',
        values: ['Auto-Phoenix']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Gel',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: 'Varies'
      },
      {
        name: 'Ice',
        values: 'Varies'
      },
      {
        name: 'Lightning',
        values: 'Varies'
      },
      {
        name: 'Water',
        values: 'Varies'
      },
      {
        name: 'Holy',
        values: 'Absorbs'
      }
    ]
  },
  'Red Element': {
    sensorDescription: 'Fire elemental. Vulnerable to opposing element.',
    img: 'Red Element.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Fire']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '450'
      },
      {
        name: 'MP',
        values: '130'
      },
      {
        name: 'Strength',
        values: '1'
      },
      {
        name: 'Magic',
        values: '23'
      },
      {
        name: 'Defense',
        values: '120'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '6'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '32'
      },
      {
        name: 'Gil',
        values: '55'
      }
    ],
    monsterArena: 'mushroomrockroad',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Bomb Fragment'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Bomb Fragment x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-2 slots, 0-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Distill Mana']
      },
      {
        name: 'Armor abilities',
        values: ['Fire Ward', 'Fireproof']
      },
      {
        name: 'Bribe',
        values: 'Bomb Core x1'
      }
    ],
    species: 'Elemental',
    scanDescription: 'Casts Fire. Physical attacks hardly hurt it. Absorbs fire, so Blizzard is the way to go.',
    location: ['Mushroom Rock Road'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '-100%'
      },
      {
        name: 'Ice',
        values: '150%'
      },
      {
        name: 'Lightning',
        values: '50%'
      },
      {
        name: 'Water',
        values: '50%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Maelspike: {
    sensorDescription: 'Watch out for Maelstrom.',
    img: 'Maelspike.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '0'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: '0'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Maelstrom', 'Rush']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '10,000'
      },
      {
        name: 'MP',
        values: '35'
      },
      {
        name: 'Strength',
        values: '40'
      },
      {
        name: 'Magic',
        values: '33'
      },
      {
        name: 'Defense',
        values: '50'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '14'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '600'
      },
      {
        name: 'Gil',
        values: '330'
      }
    ],
    monsterArena: 'mtgagazet',
    otherInformation: 'Fought underwater.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Water Gem x2'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Water Gem x3'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '23.44%',
        values: '2-4 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Strength +3%', 'Strength +5%']
      },
      {
        name: 'Armor abilities',
        values: ['Zombie Ward', 'Defense +5%', 'Defense +10%']
      },
      {
        name: 'Bribe',
        values: 'Attribute Sphere x1'
      }
    ],
    species: 'Dinofish',
    scanDescription:
      'The more you attack it the sooner it casts Maelstrom. Immune to water and weak against lightning. Darkness and poison are the way to go.',
    location: ['Mt. Gagazet'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '150%'
      },
      {
        name: 'Water',
        values: '0%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Stratoavis: {
    sensorDescription: 'Immune to sensors',
    img: 'Zu (FFX).jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: '90'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '90'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '90'
      },
      {
        name: 'Mental Break',
        values: '90'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (200)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 5'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Crawl', 'Paean of the Heavens', 'Charging', 'Land']
      },
      {
        name: 'Ronso Rage',
        values: 'N/A'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '320,000'
      },
      {
        name: 'MP',
        values: '115'
      },
      {
        name: 'Strength',
        values: '73'
      },
      {
        name: 'Magic',
        values: '32'
      },
      {
        name: 'Defense',
        values: '41'
      },
      {
        name: 'Magic Defense',
        values: '82'
      },
      {
        name: 'Agility',
        values: '32'
      },
      {
        name: 'Accuracy',
        values: '100'
      },
      {
        name: 'Evasion',
        values: '5'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '8,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'areaconquest',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Smoke Bomb x3'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Stamina Spring x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Amulet x2'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '2-4 slots, 2-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Magic +5%', 'Magic +10%', 'Magic +20% (fixed)']
      },
      {
        name: 'Armor abilities',
        values: ['HP +10%', 'HP +20%', 'HP +30% (fixed)']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Roc',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Dual Horn': {
    sensorDescription: 'Inflict darkness to evade its attacks.',
    img: 'Dual Horn-enemy-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '0'
      },
      {
        name: 'Darkness',
        values: '0'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Gore']
      },
      {
        name: 'Ronso Rage',
        values: 'Fire Breath'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '1,875'
      },
      {
        name: 'MP',
        values: '18'
      },
      {
        name: 'Strength',
        values: '22'
      },
      {
        name: 'Magic',
        values: '3'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '1'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '42'
      },
      {
        name: 'Gil',
        values: '105'
      }
    ],
    monsterArena: 'miihenhighroad',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Potion'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Hi-Potion'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Ability Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Ability Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '50%',
        values: '1-2 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Silencetouch', 'Distill Ability']
      },
      {
        name: 'Armor abilities',
        values: ['HP +5%']
      },
      {
        name: 'Bribe',
        values: 'Hi-Potion x60'
      }
    ],
    species: 'Ruminant',
    scanDescription: 'Its Gore is powerful, but inflict darkness or use Sleep Attack to avoid it easily. Kimahri can learn Fire Breath.',
    location: ["Mi'ihen Highroad", 'Mushroom Rock Road'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Exoray: {
    sensorDescription: 'Counters physical attacks with Pollen, which induces Poison, Sleep, and Darkness.',
    img: 'Exoray.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Firaga', 'Pollen']
      },
      {
        name: 'Ronso Rage',
        values: 'N/A'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '7,400'
      },
      {
        name: 'MP',
        values: '300'
      },
      {
        name: 'Strength',
        values: '1'
      },
      {
        name: 'Magic',
        values: '24'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '1'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '2,400'
      },
      {
        name: 'Gil',
        values: '840'
      }
    ],
    monsterArena: 'insidesin',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Silence Grenade'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Ether'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '2-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Sleeptouch', 'Strength +5%', 'Magic +5%']
      },
      {
        name: 'Armor abilities',
        values: ['Sleep Ward', 'MP +10%']
      },
      {
        name: 'Bribe',
        values: 'Turbo Ether x30'
      }
    ],
    species: 'Fungus',
    scanDescription:
      'Casts Firaga. Silence is the way to go. Releases poison, silence, and darkness-inducing Pollen when hit by a weapon. Vulnerable to fire.',
    location: ['Inside Sin'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '150%'
      },
      {
        name: 'Ice',
        values: '-100%'
      },
      {
        name: 'Lightning',
        values: '-100%'
      },
      {
        name: 'Water',
        values: '-100%'
      },
      {
        name: 'Holy',
        values: '-'
      }
    ]
  },
  Ochu: {
    sensorDescription: 'Vulnerable to fire.',
    img: 'Ochu FFX.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '100'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Ochu Dance']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '7,200'
      },
      {
        name: 'MP',
        values: '35'
      },
      {
        name: 'Strength',
        values: '22'
      },
      {
        name: 'Magic',
        values: '5'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '6'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '180'
      },
      {
        name: 'Gil',
        values: '520'
      }
    ],
    monsterArena: 'djoseroad',
    otherInformation: 'Attack may cause Poison.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Remedy'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Remedy'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Mana Sphere  x1'
      },
      {
        name: 'Equipment drop',
        percentage: '50%',
        values: '1-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Poisontouch', 'Strength +5%', 'Magic +5%']
      },
      {
        name: 'Armor abilities',
        values: ['Dark Ward', 'Silence Ward', 'Sleep Ward', 'Poison Ward', 'Stone Ward', 'Confuse Ward', 'Berserk Ward']
      },
      {
        name: 'Bribe',
        values: 'Remedy x70'
      }
    ],
    species: 'Ochu',
    scanDescription:
      'When HP is low, it performs Ochu Dance, which inflicts darkness, silence, confusion, and slow. Beware of its poison claws. Vulnerable to fire.',
    location: ['Moonflow'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '150%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '-'
      },
      {
        name: 'Water',
        values: '-100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Ipiria: {
    sensorDescription: 'Very nimble. Resistant to magic.',
    img: 'Ipiria.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack only']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '180'
      },
      {
        name: 'MP',
        values: '35'
      },
      {
        name: 'Strength',
        values: '15'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '120'
      },
      {
        name: 'Agility',
        values: '13'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '7'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '24'
      },
      {
        name: 'Gil',
        values: '46'
      }
    ],
    monsterArena: 'miihenhighroad',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Soft'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Petrify Grenade'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Speed Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-2 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Distill Speed']
      },
      {
        name: 'Armor abilities',
        values: ['Slow Ward', 'Defense +3%']
      },
      {
        name: 'Bribe',
        values: 'Petrify Grenade x3'
      }
    ],
    species: 'Reptile',
    scanDescription:
      'Very nimble and hard to hit. Magic defense is also high. Defeat it quickly to avoid damage. Takes only half damage from fire, but vulnerable to ice.',
    location: ["Mi'ihen Highroad (Oldroad)", 'Mushroom Rock Road'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '50%'
      },
      {
        name: 'Ice',
        values: '150%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Anacondaur: {
    sensorDescription: 'Watch out for its Stone Gaze',
    img: 'Anacondaur (FFX).jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '0'
      },
      {
        name: 'Sleep',
        values: '95'
      },
      {
        name: 'Darkness',
        values: '0'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '25'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: '25'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (2)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Attack', 'Sonic Tail', 'Stone Gaze']
      },
      {
        name: 'Ronso Rage',
        values: 'Stone Breath'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '5,800'
      },
      {
        name: 'MP',
        values: '70'
      },
      {
        name: 'Strength',
        values: '27'
      },
      {
        name: 'Magic',
        values: '48'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '16'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '1,380'
      },
      {
        name: 'Gil',
        values: '750'
      }
    ],
    monsterArena: 'calmlands',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Petrify Grenade'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Petrify Grenade x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '23.44%',
        values: '1-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Stonetouch', 'Strength +5%', 'Magic +5%']
      },
      {
        name: 'Armor abilities',
        values: ['Stone Ward']
      },
      {
        name: 'Bribe',
        values: 'Healing Water x16'
      }
    ],
    species: 'Basilisk',
    scanDescription:
      "The third eye's Stone Gaze often causes petrification. After taking multiple hits, it retaliates with Sonic Tail, which strikes all. Kimahri can learn Stone Breath.",
    location: ['Calm Lands'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '-100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Coeurlregina: {
    sensorDescription: 'Immune to sensors',
    img: 'Master Coeurl.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: 'Immune'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (200)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 4'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Chaos', 'Drain', 'Flare', 'Hyper Blaster', 'Thundaga']
      },
      {
        name: 'Ronso Rage',
        values: 'N/A'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '380,000'
      },
      {
        name: 'MP',
        values: '80'
      },
      {
        name: 'Strength',
        values: '1'
      },
      {
        name: 'Magic',
        values: '70'
      },
      {
        name: 'Defense',
        values: '40'
      },
      {
        name: 'Magic Defense',
        values: '40'
      },
      {
        name: 'Agility',
        values: '75'
      },
      {
        name: 'Accuracy',
        values: '100'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '8,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'areaconquest',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Farplane Wind x2'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Blessed Gem x1'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Shining Gem x3'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '2-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Deathstrike', 'Double AP']
      },
      {
        name: 'Armor abilities',
        values: ['Deathproof (fixed)', 'Darkproof', 'Silenceproof', 'Sleepproof', 'Poisonproof', 'Stoneproof', 'Zombieproof', 'Slowproof']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Coeurl',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Behemoth: {
    sensorDescription: 'Watch out for its Heave.',
    img: 'Behemoth.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: '80'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '50'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: '25'
      },
      {
        name: 'Power Break',
        values: '80'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: 'Immune'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (5)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 2'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Heave', 'Thundara']
      },
      {
        name: 'Ronso Rage',
        values: 'Mighty Guard'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '23,000'
      },
      {
        name: 'MP',
        values: '480'
      },
      {
        name: 'Strength',
        values: '43'
      },
      {
        name: 'Magic',
        values: '37'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '23'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '6,540'
      },
      {
        name: 'Gil',
        values: '1,350'
      }
    ],
    monsterArena: 'mtgagazet',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Ether'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Mana Tablet'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '50%',
        values: '2-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Zombietouch', 'Strength +5%', 'Magic +5%', 'SOS Overdrive']
      },
      {
        name: 'Armor abilities',
        values: ['SOS Shell', 'SOS Protect', 'SOS Reflect']
      },
      {
        name: 'Bribe',
        values: 'Lv.2 Key Sphere x30'
      }
    ],
    species: 'Behemoth',
    scanDescription: 'Its Thundara, Heave, and claw attacks are deadly. One good hit will knock you out. Kimahri can learn Mighty Guard.',
    location: ['Mt. Gagazet', 'Zanarkand Ruins'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Qactuar: {
    sensorDescription: "You'll get a treat if you can defeat it before it gets away.",
    img: 'Qactuar FFX.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: '80'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '25'
      },
      {
        name: 'Petrify',
        values: '25'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: 'Immune'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '25'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 2'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', '1000 Needles', 'Run Away']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '500'
      },
      {
        name: 'MP',
        values: '1'
      },
      {
        name: 'Strength',
        values: '19'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '255'
      },
      {
        name: 'Agility',
        values: '15'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '17'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '350'
      },
      {
        name: 'Gil',
        values: '48'
      }
    ],
    monsterArena: 'thunderplains',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Chocobo Feather'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Chocobo Feather'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Speed Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Speed Sphere x2 x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '1-2 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Initiative', 'Strength +5%', 'Magic +5%']
      },
      {
        name: 'Armor abilities',
        values: ['HP +5%', 'HP Stroll', 'MP Stroll']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Cactuar',
    scanDescription: '',
    location: ['Thunder Plains'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Blue Element': {
    sensorDescription: 'Water elemental. Vulnerable to opposing element.',
    img: 'BlueElement-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Watera']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '1,500'
      },
      {
        name: 'MP',
        values: '220'
      },
      {
        name: 'Strength',
        values: '1'
      },
      {
        name: 'Magic',
        values: '27'
      },
      {
        name: 'Defense',
        values: '120'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '9'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '240'
      },
      {
        name: 'Gil',
        values: '180'
      }
    ],
    monsterArena: 'macalania',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Fish Scale x2'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Fish Scale x3'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-3 slots, 0-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Waterstrike', 'Distill Mana']
      },
      {
        name: 'Armor abilities',
        values: ['Water Ward', 'Waterproof']
      },
      {
        name: 'Bribe',
        values: 'Water Gem x9'
      }
    ],
    species: 'Elemental',
    scanDescription: 'Casts Watera. Physical attacks hardly hurt it. Absorbs water, so Thundara is the way to go.',
    location: ['Macalania Woods'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '50%'
      },
      {
        name: 'Ice',
        values: '50%'
      },
      {
        name: 'Lightning',
        values: '150%'
      },
      {
        name: 'Water',
        values: '-100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Sand Worm': {
    sensorDescription: 'Watch out for Earthquake, which hits all. Inflict darkness to avoid its head butt.',
    img: 'Sand Worm-enemy-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '0'
      },
      {
        name: 'Sleep',
        values: '80*'
      },
      {
        name: 'Darkness',
        values: '50'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '50'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (5)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Swallow', 'Regurgitate', 'Readying Quake', 'Earthquake']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '45,000'
      },
      {
        name: 'MP',
        values: '100'
      },
      {
        name: 'Strength',
        values: '30'
      },
      {
        name: 'Magic',
        values: '28'
      },
      {
        name: 'Defense',
        values: '5'
      },
      {
        name: 'Magic Defense',
        values: '5'
      },
      {
        name: 'Agility',
        values: '8'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '2,000'
      },
      {
        name: 'Gil',
        values: '1,000'
      }
    ],
    monsterArena: 'bikanel',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Shadow Gem'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Stamina Spring'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Ability Sphere  x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Lv. 1 Key Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '50%',
        values: '2-4 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Slowtouch', 'Strength +5%', 'Magic +5%']
      },
      {
        name: 'Armor abilities',
        values: ['HP +10%', 'Auto-Potion']
      },
      {
        name: 'Bribe',
        values: 'Winning Formula x15'
      }
    ],
    species: 'Worm',
    scanDescription:
      'Watch out for its Earthquake, which hits all characters. If a character is Swallowed, he will be unavailable until the worm Regurgitates him back out. Try inflicting darkness and sleep.',
    location: ['Bikanel'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '50%'
      },
      {
        name: 'Ice',
        values: '150%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '150%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Water Flan': {
    sensorDescription: 'Water elemental. Vulnerable to opposing element. Resistant to physical attacks.',
    img: 'Waterflanffx.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Water']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '315'
      },
      {
        name: 'MP',
        values: '30'
      },
      {
        name: 'Strength',
        values: '3'
      },
      {
        name: 'Magic',
        values: '15'
      },
      {
        name: 'Defense',
        values: '120'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '5'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '2'
      },
      {
        name: 'Gil',
        values: '18'
      }
    ],
    monsterArena: 'besaid',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Fish Scale'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Dragon Scale'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-2 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Waterstrike', 'Distill Mana']
      },
      {
        name: 'Armor abilities',
        values: ['Water Ward', 'Waterproof']
      },
      {
        name: 'Bribe',
        values: 'Water Gem x2'
      }
    ],
    species: 'Flan',
    scanDescription:
      "Water-based. So soft, it's hard to damage physically. Weak against lightning, so blast it with Lulu's Thunder spell. Don't use Water or it will recover HP.",
    location: ['Besaid'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '50%'
      },
      {
        name: 'Ice',
        values: '50%'
      },
      {
        name: 'Lightning',
        values: '150%'
      },
      {
        name: 'Water',
        values: '-100%'
      },
      {
        name: 'Holy',
        values: '-'
      }
    ]
  },
  Valaha: {
    sensorDescription: 'Inflict darkness to evade its attacks.',
    img: 'Valaha.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '0'
      },
      {
        name: 'Sleep',
        values: '80'
      },
      {
        name: 'Darkness',
        values: '95'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '25'
      },
      {
        name: 'Petrify',
        values: '25'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (2)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Flame Ball', 'Gore']
      },
      {
        name: 'Ronso Rage',
        values: 'Fire Breath'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '8,700'
      },
      {
        name: 'MP',
        values: '29'
      },
      {
        name: 'Strength',
        values: '36'
      },
      {
        name: 'Magic',
        values: '21'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '23'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '1,320'
      },
      {
        name: 'Gil',
        values: '720'
      }
    ],
    monsterArena: 'stolenfaythcavern',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Hi-Potion'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Hi-Potion x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Ability Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Ability Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '50%',
        values: '2-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Silencetouch', 'Distill Ability']
      },
      {
        name: 'Armor abilities',
        values: ['HP +10%']
      },
      {
        name: 'Bribe',
        values: 'X-Potion x60'
      }
    ],
    species: 'Ruminant',
    scanDescription:
      "Inflict darkness to hinder its attacks. Its Flame Ball is a powerful fire attack that hits all, but it needs to Charge before it's released. Kimahri can learn Fire Breath.",
    location: ['Cavern of the Stolen Fayth'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '50%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Dark Element': {
    sensorDescription: 'No elemental weaknesses. Casts Reflect on itself.',
    img: 'DarkElement-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Bio', 'Blizzara', 'Drain', 'Fira', 'Osmose', 'Reflect', 'Thundara', 'Watera']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '1,800'
      },
      {
        name: 'MP',
        values: '280'
      },
      {
        name: 'Strength',
        values: '1'
      },
      {
        name: 'Magic',
        values: '30'
      },
      {
        name: 'Defense',
        values: '190'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '1'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '810'
      },
      {
        name: 'Gil',
        values: '520'
      }
    ],
    monsterArena: 'stolenfaythcavern',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Shining Thorn'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Shining Thorn x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Return Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1 slot, 0-1 ability'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing (Kimahri and Auron)', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Icestrike', 'Distill Mana']
      },
      {
        name: 'Armor abilities',
        values: ['Fire Ward', 'Lightning Ward', 'Lightningproof', 'Water Ward', 'Ice Ward']
      },
      {
        name: 'Bribe',
        values: 'Return Sphere x1'
      }
    ],
    species: 'Elemental',
    scanDescription:
      'No elemental weaknesses, and physical attacks hardly hurt it. Casts Reflect on itself. If its Reflect is dispelled, it retaliates with Bio, Osmose, and Drain.',
    location: ['Cavern of the Stolen Fayth'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Jumbo Flan': {
    sensorDescription: 'Immune to sensors',
    img: 'Dark Flan.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: '0'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: 'Immune'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (200)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 4'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: 'Immune'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Blizzaga', 'Curaga', 'Firaga', 'Flare', 'Regen', 'Reflect', 'Thundaga', 'Ultima', 'Waterga']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '1,300,000'
      },
      {
        name: 'MP',
        values: '999'
      },
      {
        name: 'Strength',
        values: '3'
      },
      {
        name: 'Magic',
        values: '98'
      },
      {
        name: 'Defense',
        values: '255'
      },
      {
        name: 'Magic Defense',
        values: '80'
      },
      {
        name: 'Agility',
        values: '60'
      },
      {
        name: 'Accuracy',
        values: '1'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '10,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'speciesconquest',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Lunar Curtain x4'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Mana Tablet'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Magic Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '2-4 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Magic Booster']
      },
      {
        name: 'Armor abilities',
        values: ['Fire Eater', 'Water Eater', 'Ice Eater']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Flan',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '-100%'
      },
      {
        name: 'Ice',
        values: '-100%'
      },
      {
        name: 'Lightning',
        values: '-100%'
      },
      {
        name: 'Water',
        values: '-100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Black Element': {
    sensorDescription: 'Immune to sensors',
    img: 'Blackelement.gif',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Berserk', 'Demi', 'Flare']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '7,600'
      },
      {
        name: 'MP',
        values: '500'
      },
      {
        name: 'Strength',
        values: '1'
      },
      {
        name: 'Magic',
        values: '28'
      },
      {
        name: 'Defense',
        values: '240'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '20'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '3,150'
      },
      {
        name: 'Gil',
        values: '1,040'
      }
    ],
    monsterArena: 'omegadungeon',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Hi-Potion'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Shining Gem x4'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Return Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '50%',
        values: '2-4 slots, 0-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Waterstrike', 'Icestrike', 'Distill Mana']
      },
      {
        name: 'Armor abilities',
        values: ['Fire Ward', 'Fireproof', 'Lightning Ward', 'Lightningproof', 'Waterproof', 'Ice Ward', 'Iceproof']
      },
      {
        name: 'Bribe',
        values: 'Blk Magic Sphere x1'
      }
    ],
    species: 'Elemental',
    scanDescription: 'Immune to scans',
    location: ['Omega Ruins'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Bomb King': {
    sensorDescription: 'Immune to sensors',
    img: 'FFX bomb render.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: 'Immune'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (200)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 4'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Bash', 'Fire', 'Fira', 'Firaga', 'Grow 1/2/3', 'Ultima', 'Self-Destruct (not used)']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '480,000'
      },
      {
        name: 'MP',
        values: '780'
      },
      {
        name: 'Strength',
        values: '73'
      },
      {
        name: 'Magic',
        values: '71'
      },
      {
        name: 'Defense',
        values: '200'
      },
      {
        name: 'Magic Defense',
        values: '200'
      },
      {
        name: 'Agility',
        values: '46'
      },
      {
        name: 'Accuracy',
        values: '150'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '10,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'speciesconquest',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Fire Gem x4'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Shining Gem'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Door to Tomorrow x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '2-4 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Strength +5%', 'Strength +10%', 'Strength +20% (fixed)']
      },
      {
        name: 'Armor abilities',
        values: ['Defense +5%', 'Defense +10%', 'Defense +20% (fixed)']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Bomb',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '-100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Mushussu: {
    sensorDescription: 'Covered by a hard shell. Piercing weapons are the way to go. Watch out for Slow.',
    img: 'Mushussu.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Flame Breath']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '680'
      },
      {
        name: 'MP',
        values: '38'
      },
      {
        name: 'Strength',
        values: '36'
      },
      {
        name: 'Magic',
        values: '42'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '120'
      },
      {
        name: 'Agility',
        values: '9'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '310'
      },
      {
        name: 'Gil',
        values: '270'
      }
    ],
    monsterArena: 'bikanel',
    otherInformation: 'Enemy is Tough. Attack may cause Slow.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Hi-Potion'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Silver Hourglass'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere, Al Bhed Potion x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere, Al Bhed Potion x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Icestrike', 'Distill Power']
      },
      {
        name: 'Armor abilities',
        values: ['Slow Ward', 'HP +10%']
      },
      {
        name: 'Bribe',
        values: 'Gold Hourglass x4'
      }
    ],
    species: 'Drake',
    scanDescription:
      "Covered with hard scales. Physical and magic defense are high. It only takes half damage from fire, but it's weak against ice. Its attack may cause slow. Beware of its fire-based Breath, which hits all.",
    location: ['Bikanel'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '50%'
      },
      {
        name: 'Ice',
        values: '150%'
      },
      {
        name: 'Lightning',
        values: '-'
      },
      {
        name: 'Water',
        values: '-'
      },
      {
        name: 'Holy',
        values: '-'
      }
    ]
  },
  Shred: {
    sensorDescription: 'Covered by a hard shell. Piercing weapons are the way to go. Watch out for Slow.',
    img: 'Shred (FFX).jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '1,950'
      },
      {
        name: 'MP',
        values: '30'
      },
      {
        name: 'Strength',
        values: '35'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '180'
      },
      {
        name: 'Agility',
        values: '10'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '480'
      },
      {
        name: 'Gil',
        values: '368'
      }
    ],
    monsterArena: 'calmlands',
    otherInformation: 'Armored enemy.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Hypello Potion'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Hypello Potion x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Speed Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Speed Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Icestrike', 'Distill Power*']
      },
      {
        name: 'Armor abilities',
        values: ['Berserk Ward']
      },
      {
        name: 'Bribe',
        values: 'Hypello Potion x50'
      }
    ],
    species: 'Helm',
    scanDescription:
      'Covered by a hard shell. Slow-moving, but has high physical and magic defense. Vulnerable to fire, but takes only half damage from other elements. Its Bash may inflict slow.',
    location: ['Calm Lands'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '150%'
      },
      {
        name: 'Ice',
        values: '50%'
      },
      {
        name: 'Lightning',
        values: '50%'
      },
      {
        name: 'Water',
        values: '50%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Bite Bug': {
    sensorDescription: 'Aerial. Vulnerable to ice. Watch out for poison.',
    img: 'BiteBug-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack only.']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '200'
      },
      {
        name: 'MP',
        values: '10'
      },
      {
        name: 'Strength',
        values: '13'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '15'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '12'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '40'
      },
      {
        name: 'Gil',
        values: '62'
      }
    ],
    monsterArena: 'djoseroad',
    otherInformation: 'Physical attack may cause Poison.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Antidote'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Poison Fang'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Speed Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Speed Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Icestrike', 'Distill Speed']
      },
      {
        name: 'Armor abilities',
        values: ['Poison Ward', 'MP +5%']
      },
      {
        name: 'Bribe',
        values: 'Poison Fang x2'
      }
    ],
    species: 'Wasp',
    scanDescription:
      "Aerial and hard to hit. Magic attacks are effective. It's vulnerable to ice, so cast Blizzard to achieve Overkill. Attacks may inflict poison.",
    location: ['Djose Highroad', 'Moonflow'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '150%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Great Malboro': {
    sensorDescription: 'Breathes Bad Breath 1/3 of the time. Be ready for anything.',
    img: 'Malboro Menace-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '50'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '50'
      },
      {
        name: 'Mental Break',
        values: '50'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (5)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: 'Immune'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 2'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Bad Breath', 'Gastric Juice', 'Staccato', 'Chow Time']
      },
      {
        name: 'Ronso Rage',
        values: 'Bad Breath'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '64,000'
      },
      {
        name: 'MP',
        values: '1'
      },
      {
        name: 'Strength',
        values: '36'
      },
      {
        name: 'Magic',
        values: '42'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '18'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '21,000'
      },
      {
        name: 'Gil',
        values: '1,900'
      }
    ],
    monsterArena: 'insidesin',
    otherInformation: 'When encountered in the Omega Ruins, it will always ambush the party.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Remedy'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Mana Tonic'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '50%',
        values: '3-4 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Darktouch', 'Silencetouch', 'Sleeptouch', 'Poisontouch']
      },
      {
        name: 'Armor abilities',
        values: ['Dark Ward', 'Silence Ward', 'Sleep Ward', 'Poison Ward', 'Stone Ward', 'Confuse Ward', 'Berserk Ward']
      },
      {
        name: 'Bribe',
        values: 'Wings to Discovery x8'
      }
    ],
    species: 'Malboro',
    scanDescription:
      'Danger! There is a 1/3 chance of it attacking with Bad Breath. To avoid being wiped out, equip armor that guards against status effects and attack with fire. Kimahri can learn Bad Breath.',
    location: ['Omega Ruins', 'Inside Sin'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '150%'
      },
      {
        name: 'Ice',
        values: '0%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '0%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Master Tonberry': {
    sensorDescription: 'Advances closer four times. Defeat it before then or else...',
    img: 'Master Tonberry (FFX).jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: '99'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: 'Immune'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ["Chef's Knife", 'Karma', 'Voodoo']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '48,000'
      },
      {
        name: 'MP',
        values: '1'
      },
      {
        name: 'Strength',
        values: '47'
      },
      {
        name: 'Magic',
        values: '52'
      },
      {
        name: 'Defense',
        values: '10'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '18'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '20,000'
      },
      {
        name: 'Gil',
        values: '2,400'
      }
    ],
    monsterArena: 'omegadungeon',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Mana Spring'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Tetra Elemental'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Teleport Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '50%',
        values: '3-4 slots, 0-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Deathstrike', 'Slowstrike']
      },
      {
        name: 'Armor abilities',
        values: ['Death Ward', 'Deathproof', 'Tetra Armor']
      },
      {
        name: 'Bribe',
        values: 'Pendulum x2'
      }
    ],
    species: 'Tonberry',
    scanDescription:
      "After four waddles, he stabs with his Chef's Knife. His counter-attack Karma deals damage based on the number of enemies that character has defeated.",
    location: ['Omega Ruins'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '50%'
      },
      {
        name: 'Ice',
        values: '50%'
      },
      {
        name: 'Lightning',
        values: '50%'
      },
      {
        name: 'Water',
        values: '50%'
      },
      {
        name: 'Holy',
        values: '50%'
      }
    ]
  },
  'Abyss Worm': {
    sensorDescription: 'Immune to sensors',
    img: 'Land Worm.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: 'Immune'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (200)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 5'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Earthquake (two versions)', 'Swallow', 'Regurgitate', 'Readying Quake']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '480,000'
      },
      {
        name: 'MP',
        values: '200'
      },
      {
        name: 'Strength',
        values: '60'
      },
      {
        name: 'Magic',
        values: '93'
      },
      {
        name: 'Defense',
        values: '24'
      },
      {
        name: 'Magic Defense',
        values: '63'
      },
      {
        name: 'Agility',
        values: '22'
      },
      {
        name: 'Accuracy',
        values: '120'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '8,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'areaconquest',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Shadow Gem x4'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Stamina Tablet'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Stamina Tonic x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '2-4 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Strength +5%', 'Strength +10%', 'Strength +20% (fixed)']
      },
      {
        name: 'Armor abilities',
        values: ['Defense +5%', 'Defense +10%', 'Defense +20% (fixed)']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Worm',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Snow Flan': {
    sensorDescription: 'Ice elemental. Vulnerable to opposing element. Resistant to physical attacks.',
    img: 'Snow Flan.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Blizzard']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '600'
      },
      {
        name: 'MP',
        values: '120'
      },
      {
        name: 'Strength',
        values: '1'
      },
      {
        name: 'Magic',
        values: '19'
      },
      {
        name: 'Defense',
        values: '120'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '7'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '48'
      },
      {
        name: 'Gil',
        values: '93'
      }
    ],
    monsterArena: 'djoseroad',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Antarctic Wind'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Antarctic Wind x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Mana Sphere x2 x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-3 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Icestrike', 'Distill Mana']
      },
      {
        name: 'Armor abilities',
        values: ['Ice Ward', 'Iceproof']
      },
      {
        name: 'Bribe',
        values: 'Arctic Wind x10'
      }
    ],
    species: 'Flan',
    scanDescription: "Ice-based. So soft, it's hard to damage physically. Weak against fire, but will absorb HP from ice. Casts Blizzard.",
    location: ['Djose Highroad'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '150%'
      },
      {
        name: 'Ice',
        values: '-100%'
      },
      {
        name: 'Lightning',
        values: '50%'
      },
      {
        name: 'Water',
        values: '50%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Mafdet: {
    sensorDescription: 'Covered by a hard shell. Piercing weapons are the way to go. Watch out for slow.',
    img: 'Mafdet.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack only.']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '710'
      },
      {
        name: 'MP',
        values: '25'
      },
      {
        name: 'Strength',
        values: '29'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '120'
      },
      {
        name: 'Agility',
        values: '9'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '300'
      },
      {
        name: 'Gil',
        values: '172'
      }
    ],
    monsterArena: 'macalania',
    otherInformation: 'Enemy is Tough. Attack may cause Slow.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Hi-Potion'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Hypello Potion'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Icestrike', 'Distill Power']
      },
      {
        name: 'Armor abilities',
        values: ['Berserk Ward', 'Defense +5%']
      },
      {
        name: 'Bribe',
        values: 'Hypello Potion x28'
      }
    ],
    species: 'Helm',
    scanDescription:
      'Covered by a hard shell. Slow-moving, but has high physical and magic defense. Vulnerable to lightning and ice. Its Bash may inflict slow.',
    location: ['Lake Macalania'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '150%'
      },
      {
        name: 'Lightning',
        values: '150%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Xiphos: {
    sensorDescription: 'Occasionally succumbs to darkness.',
    img: 'Xiphos.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: '50'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack only.']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '2,700'
      },
      {
        name: 'MP',
        values: '5'
      },
      {
        name: 'Strength',
        values: '20'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '17'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '520'
      },
      {
        name: 'Gil',
        values: '220'
      }
    ],
    monsterArena: 'macalania',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Hi-Potion'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Mega Potion'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Ability Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Ability Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '50%',
        values: '1-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Strength +3%', 'Magic +3%', 'SOS Overdrive']
      },
      {
        name: 'Armor abilities',
        values: ['Defense +5%']
      },
      {
        name: 'Bribe',
        values: 'Megalixir x1'
      }
    ],
    species: 'Blade',
    scanDescription: 'Very nimble. Darkness works, but Threaten is the way to go.',
    location: ['Macalania Woods'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Garuda: {
    sensorDescription: 'Dodging its attacks is easier after inflicting Darkness.',
    img: 'Garuda-enemy-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: '0'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (3)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Sonic Boom']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '1,400'
      },
      {
        name: 'MP',
        values: '50'
      },
      {
        name: 'Strength',
        values: '13'
      },
      {
        name: 'Magic',
        values: '10'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '7'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '8'
      },
      {
        name: 'Gil',
        values: '30'
      }
    ],
    monsterArena: 'mushroomrockroad',
    otherInformation: 'This enemy cannot be captured.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'None'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'None'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '1-2 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Darktouch', 'Strength + 3%', 'Magic +3%']
      },
      {
        name: 'Armor abilities',
        values: ['Dark Ward']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Roc',
    scanDescription:
      'It has high strength and tons of HP. Beware of Sonic Boom, which hits all characters. Dodge its attacks more easily by inflicting darkness.',
    location: ['Besaid (Waterfall Way)'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Murussu: {
    sensorDescription: 'Covered by a hard shell. Piercing weapons are the way to go. Watch out for slow.',
    img: 'Murussu.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack only.']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '580'
      },
      {
        name: 'MP',
        values: '20'
      },
      {
        name: 'Strength',
        values: '25'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '120'
      },
      {
        name: 'Agility',
        values: '7'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '240'
      },
      {
        name: 'Gil',
        values: '165'
      }
    ],
    monsterArena: 'macalania',
    otherInformation: 'Enemy is Tough. Attack may cause Slow.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Hi-Potion'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Hypello Potion'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Icestrike', 'Distill Power']
      },
      {
        name: 'Armor abilities',
        values: ['Berserk Ward', 'Defense +5%']
      },
      {
        name: 'Bribe',
        values: 'Hypello Potion x24'
      }
    ],
    species: 'Helm',
    scanDescription:
      'Covered by a hard shell. Slow-moving, but has high physical and magic defense. Vulnerable to fire and lightning. Its Bash may inflict slow.',
    location: ['Macalania Woods'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '150%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '150%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Puroboros: {
    sensorDescription: 'Immune to sensors',
    img: 'Puroboros (FFX).jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '120'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: '120'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (3)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Bash', 'Firaga', 'Self-Destruct', 'Grow 1/2']
      },
      {
        name: 'Ronso Rage',
        values: 'Self-Destruct'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '20,000'
      },
      {
        name: 'MP',
        values: '180'
      },
      {
        name: 'Strength',
        values: '36'
      },
      {
        name: 'Magic',
        values: '25'
      },
      {
        name: 'Defense',
        values: '40'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '28'
      },
      {
        name: 'Accuracy',
        values: '1'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '3,200'
      },
      {
        name: 'Gil',
        values: '970'
      }
    ],
    monsterArena: 'omegadungeon',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Fire Gem x3'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Fire Gem x4'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Lv. 1 Key Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '3-4 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing (only Auron and Kimahri)', 'Firestrike', 'Distill Power']
      },
      {
        name: 'Armor abilities',
        values: ['Fireproof', 'Fire Eater']
      },
      {
        name: 'Bribe',
        values: 'Shining Gem x36'
      }
    ],
    species: 'Bomb',
    scanDescription: 'Immune to scans',
    location: ['Omega Ruins'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '-100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  "Th'uban": {
    sensorDescription: 'Immune to sensors',
    img: "Th'uban.jpg",
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: 'Immune'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (255)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: 'Immune'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 5'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Condemn', 'Convergence', 'Haste', 'Protect', 'Rainbow', 'Regen', 'Shell']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '3,000,000'
      },
      {
        name: 'MP',
        values: '85'
      },
      {
        name: 'Strength',
        values: '102'
      },
      {
        name: 'Magic',
        values: '212'
      },
      {
        name: 'Defense',
        values: '80'
      },
      {
        name: 'Magic Defense',
        values: '80'
      },
      {
        name: 'Agility',
        values: '53'
      },
      {
        name: 'Accuracy',
        values: '180'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '50,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'original',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: "Gambler's Spirit"
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Teleport Sphere'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: "Underdog's Secret x1"
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '3-4 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Triple AP', 'Triple Overdrive']
      },
      {
        name: 'Armor abilities',
        values: ['HP +10%', 'HP +20%', 'HP +30% (fixed)']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Sacred Beast',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Ice Flan': {
    sensorDescription: 'Ice elemental. Vulnerable to opposing element. Resistant to physical attacks.',
    img: 'Ice Flan (FFX).jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Blizzara']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '1,350'
      },
      {
        name: 'MP',
        values: '160'
      },
      {
        name: 'Strength',
        values: '1'
      },
      {
        name: 'Magic',
        values: '21'
      },
      {
        name: 'Defense',
        values: '120'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '9'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '300'
      },
      {
        name: 'Gil',
        values: '188'
      }
    ],
    monsterArena: 'macalania',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Arctic Wind'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Arctic Wind'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-3 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Icestrike', 'Distill Mana']
      },
      {
        name: 'Armor abilities',
        values: ['Ice Ward', 'Iceproof']
      },
      {
        name: 'Bribe',
        values: 'Ice Gem x9'
      }
    ],
    species: 'Flan',
    scanDescription: "Ice-based. So soft, it's hard to damage physically. Weak against fire, but will absorb HP from ice.",
    location: ['Lake Macalania'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '150%'
      },
      {
        name: 'Ice',
        values: '-100%'
      },
      {
        name: 'Lightning',
        values: '50%'
      },
      {
        name: 'Water',
        values: '50%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Behemoth King': {
    sensorDescription: 'Retaliates with Meteor when defeated.',
    img: 'Behemoth King.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '80'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: 'Immune'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (5)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 2'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Flare', 'Heave', 'Meteor', 'Mighty Guard', 'Tail', 'Thundaga', 'Thundara']
      },
      {
        name: 'Ronso Rage',
        values: 'Mighty Guard'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '67,500'
      },
      {
        name: 'MP',
        values: '700'
      },
      {
        name: 'Strength',
        values: '46'
      },
      {
        name: 'Magic',
        values: '44'
      },
      {
        name: 'Defense',
        values: '25'
      },
      {
        name: 'Magic Defense',
        values: '25'
      },
      {
        name: 'Agility',
        values: '27'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '16,800'
      },
      {
        name: 'Gil',
        values: '1,850'
      }
    ],
    monsterArena: 'insidesin',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Healing Spring'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Twin Stars x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Lv. 3 Key Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '50%',
        values: '2-4 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Zombietouch', 'SOS Overdrive']
      },
      {
        name: 'Armor abilities',
        values: ['SOS Shell', 'SOS Protect', 'SOS Reflect']
      },
      {
        name: 'Bribe',
        values: 'Three Stars x14'
      }
    ],
    species: 'Behemoth',
    scanDescription:
      'Its claw, lightning, and Heave attacks are deadly. Watch out for the Meteor it casts when it dies. Cast Protect or defend with the  button to survive. Kimahri can learn Mighty Guard.',
    location: ['Inside Sin'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Don Tonberry': {
    sensorDescription: 'Immune to sensors',
    img: 'Tonberry-enemy-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: 'Immune'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (200)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 4'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ["Chef's Knife", 'Karma', 'Voodoo', 'Waddle (takes a stroll)']
      },
      {
        name: 'Ronso Rage',
        values: 'N/A'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '480,000'
      },
      {
        name: 'MP',
        values: '120'
      },
      {
        name: 'Strength',
        values: '95'
      },
      {
        name: 'Magic',
        values: '75'
      },
      {
        name: 'Defense',
        values: '100'
      },
      {
        name: 'Magic Defense',
        values: '100'
      },
      {
        name: 'Agility',
        values: '37'
      },
      {
        name: 'Accuracy',
        values: '80'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '8,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'areaconquest',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Candle of Life x2'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Designer Wallet'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Farplane Wind x3'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '3-4 slots, 2-4 abilities'
      },
      {
        name: 'Weapon abilities',
        values: [
          'Deathstrike (fixed)',
          'Darkstrike',
          'Silencestrike',
          'Sleepstrike',
          'Poisonstrike',
          'Stonestrike',
          'Zombiestrike',
          'Slowstrike'
        ]
      },
      {
        name: 'Armor abilities',
        values: ['Deathproof (fixed)', 'Darkproof', 'Silenceproof', 'Sleepproof', 'Poisonproof', 'Stoneproof', 'Zombieproof', 'Slowproof']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Tonberry',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '-'
      },
      {
        name: 'Ice',
        values: '-'
      },
      {
        name: 'Lightning',
        values: '-'
      },
      {
        name: 'Water',
        values: '-'
      },
      {
        name: 'Holy',
        values: '-'
      }
    ]
  },
  Ironclad: {
    sensorDescription: 'Immune to sensors',
    img: 'Gemini (Blue)-enemy-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '95'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (200)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 4'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Bushinzan', 'Reppageki', 'Shinryudan']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '2,000,000'
      },
      {
        name: 'MP',
        values: '0'
      },
      {
        name: 'Strength',
        values: '100'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '220'
      },
      {
        name: 'Magic Defense',
        values: '180'
      },
      {
        name: 'Agility',
        values: '65'
      },
      {
        name: 'Accuracy',
        values: '180'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '10,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'speciesconquest',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Light Curtain'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Stamina Tablet'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'HP Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '2-4 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Strength +5%', 'Strength +10%', 'Strength +20% (fixed)']
      },
      {
        name: 'Armor abilities',
        values: ['HP +10%', 'HP +20%', 'HP +30% (fixed)']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Iron Giant',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '0%'
      },
      {
        name: 'Ice',
        values: '0%'
      },
      {
        name: 'Lightning',
        values: '0%'
      },
      {
        name: 'Water',
        values: '0%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Ultima Buster': {
    sensorDescription: 'Immune to sensors',
    img: 'UltimaBuster-ffx-enemy.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: 'Immune'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (255)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 5'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Ultima']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '5,000,000'
      },
      {
        name: 'MP',
        values: '140'
      },
      {
        name: 'Strength',
        values: '168'
      },
      {
        name: 'Magic',
        values: '178'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '71'
      },
      {
        name: 'Agility',
        values: '72'
      },
      {
        name: 'Accuracy',
        values: '130'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '50,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'original',
    otherInformation: 'Information in brackets are stats when Ultimate Buster arms block physical attacks against the body.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: "Gambler's Spirit"
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Lv. 3 Key Sphere'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Winning Formula x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '3-4 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Triple AP', 'Overdrive → AP', 'Triple Overdrive']
      },
      {
        name: 'Armor abilities',
        values: ['Break MP Limit']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Sinspawn',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Catastrophe: {
    sensorDescription: 'Immune to sensors',
    img: 'Catastrophe (FFX).jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: 'Immune'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (255)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: 'Immune'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 5'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Nothing', 'Toxic Cloud', 'Transform']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '2,200,000'
      },
      {
        name: 'MP',
        values: '380'
      },
      {
        name: 'Strength',
        values: '120'
      },
      {
        name: 'Magic',
        values: '77'
      },
      {
        name: 'Defense',
        values: '80'
      },
      {
        name: 'Magic Defense',
        values: '80'
      },
      {
        name: 'Agility',
        values: '34'
      },
      {
        name: 'Accuracy',
        values: '150'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '50,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'original',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: "Gambler's Spirit"
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Lv. 2 Key Sphere'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Designer Wallet x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '3-4 slots, 1-4 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Darkstrike', 'Silencestrike', 'Sleepstrike', 'Poisonstrike', 'Stonestrike', 'Zombiestrike', 'Slowstrike']
      },
      {
        name: 'Armor abilities',
        values: ['Darkproof', 'Silenceproof', 'Sleepproof', 'Poisonproof', 'Stoneproof', 'Zombieproof', 'Slowproof']
      },
      {
        name: 'Bribe',
        values: 'Cannot bribe'
      }
    ],
    species: 'Sinspawn',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Gold Element': {
    sensorDescription: 'Lightning elemental. Vulnerable to opposing element.',
    img: 'GoldElement-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Thunder', 'Thundara*']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '1,200'
      },
      {
        name: 'MP',
        values: '180'
      },
      {
        name: 'Strength',
        values: '1'
      },
      {
        name: 'Magic',
        values: '32'
      },
      {
        name: 'Defense',
        values: '120'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '7'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '92'
      },
      {
        name: 'Gil',
        values: '107'
      }
    ],
    monsterArena: 'thunderplains',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Electro Marble'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Electro Marble x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-3 slots, 0-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Lightningstrike', 'Distill Mana']
      },
      {
        name: 'Armor abilities',
        values: ['Lightning Ward', 'Lightningproof']
      },
      {
        name: 'Bribe',
        values: 'Lightning Marble x1'
      }
    ],
    species: 'Elemental',
    scanDescription: 'Casts Thunder. Physical attacks hardly hurt it. Absorbs lightning, so use Watera for an Overkill.',
    location: ['Thunder Plains'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '50%'
      },
      {
        name: 'Ice',
        values: '50%'
      },
      {
        name: 'Lightning',
        values: '-100%'
      },
      {
        name: 'Water',
        values: '150%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Evil Eye': {
    sensorDescription: 'Aerial. Resistant to magic. Watch out for confusion.',
    img: 'BatEye-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Stare']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '310'
      },
      {
        name: 'MP',
        values: '300'
      },
      {
        name: 'Strength',
        values: '1'
      },
      {
        name: 'Magic',
        values: '26'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '120'
      },
      {
        name: 'Agility',
        values: '1'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '13'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '300'
      },
      {
        name: 'Gil',
        values: '205'
      }
    ],
    monsterArena: 'macalania',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Hi-Potion'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Musk'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Speed Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Speed Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Icestrike', 'Strength +5%', 'Magic +5%', 'Distill Speed']
      },
      {
        name: 'Armor abilities',
        values: ['Confuse Ward', 'MP +10%']
      },
      {
        name: 'Bribe',
        values: 'Musk x3'
      }
    ],
    species: 'Evil Eye',
    scanDescription: 'Aerial and hard to hit. Its weakness is fire, but it has high magic defense. Its Gaze may cause confusion.',
    location: ['Lake Macalania'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '150%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Zu: {
    sensorDescription: 'Watch out for Sonic Boom when wings glow.',
    img: 'Zu (FFX).jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: '95'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '25'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (3)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Charging', 'Sonic Boom']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '12,000'
      },
      {
        name: 'MP',
        values: '50'
      },
      {
        name: 'Strength',
        values: '37'
      },
      {
        name: 'Magic',
        values: '35'
      },
      {
        name: 'Defense',
        values: '20'
      },
      {
        name: 'Magic Defense',
        values: '20'
      },
      {
        name: 'Agility',
        values: '20'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '1,200'
      },
      {
        name: 'Gil',
        values: '1,200'
      }
    ],
    monsterArena: 'bikanel',
    otherInformation: 'The first Zu encounter only has 12,000 HP , 32 Strength, 30 Magic, and has a Darkness resistance of 20.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Smoke Bomb x3'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Smoke Bomb x4'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Al Bhed Potion x2 , Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Al Bhed Potion x2 , Power Sphere x2'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '2-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Darktouch', 'Strength +3%', 'Magic +3%']
      },
      {
        name: 'Armor abilities',
        values: ['Dark Ward']
      },
      {
        name: 'Bribe',
        values: 'Skill Sphere x2'
      }
    ],
    species: 'Roc',
    scanDescription:
      "High HP. Aerial, but so big that it's easy to hit. Its wings will start flashing the turn before it unleashes Sonic Boom. Use Dark Buster and strong attacks, or else...",
    location: ['Bikanel'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Lamashtu: {
    sensorDescription: 'Covered in hard scales. Piercing weapons are the way to go. Watch out for Slow.',
    img: 'Lamashtu (FFX).jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Ice Breath']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '275'
      },
      {
        name: 'MP',
        values: '21'
      },
      {
        name: 'Strength',
        values: '23'
      },
      {
        name: 'Magic',
        values: '20'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '120'
      },
      {
        name: 'Agility',
        values: '6'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '32'
      },
      {
        name: 'Gil',
        values: '72'
      }
    ],
    monsterArena: 'mushroomrockroad',
    otherInformation: 'Enemy is Tough. Attack may cause Slow.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Potion'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Silver Hourglass'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-2 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Icestrike', 'Distil Power']
      },
      {
        name: 'Armor abilities',
        values: ['Slow Ward', 'HP +5%']
      },
      {
        name: 'Bribe',
        values: 'Silver Hourglass x10'
      }
    ],
    species: 'Drake',
    scanDescription:
      "Covered with hard scales. Physical and magic defense are high, but it's weak against fire. Its attack may cause slow. Watch out for its ice-based Breath, which hits all.",
    location: ['Djose Highroad', 'Mushroom Rock Road'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '150%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Dark Flan': {
    sensorDescription: 'No elemental weaknesses. Resistant to physical attacks.',
    img: 'Dark Flan.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '80'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Bio', 'Demi', 'Drain', 'Flare', 'Osmose', 'White Wind']
      },
      {
        name: 'Ronso Rage',
        values: 'White Wind'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '12,800'
      },
      {
        name: 'MP',
        values: '250'
      },
      {
        name: 'Strength',
        values: '1'
      },
      {
        name: 'Magic',
        values: '30'
      },
      {
        name: 'Defense',
        values: '220'
      },
      {
        name: 'Magic Defense',
        values: '200'
      },
      {
        name: 'Agility',
        values: '1'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '3,750'
      },
      {
        name: 'Gil',
        values: '1,080'
      }
    ],
    monsterArena: 'mtgagazet',
    otherInformation: 'Immune to slow in NTSC only.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Star Curtain'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Star Curtain x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Mana Sphere x2 x1'
      },
      {
        name: 'Equipment drop',
        percentage: '50%',
        values: '2-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Magic +5%', 'Magic +10%', 'Distill Mana*']
      },
      {
        name: 'Armor abilities',
        values: ['MP +10%', 'MP +20%']
      },
      {
        name: 'Bribe',
        values: 'Wht Magic Sphere x1'
      }
    ],
    species: 'Flan',
    scanDescription:
      'Resistant to physical attacks and cuts all elemental damage by half. Casts non-elemental magic like Demi, Bio, Flare, Osmose, and Drain. Kimahri can learn White Wind.',
    location: ['Mt. Gagazet', 'Zanarkand'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '50%'
      },
      {
        name: 'Ice',
        values: '50%'
      },
      {
        name: 'Lightning',
        values: '50%'
      },
      {
        name: 'Water',
        values: '50%'
      },
      {
        name: 'Holy',
        values: '-'
      }
    ]
  },
  Grat: {
    sensorDescription: 'Vulnerable to fire.',
    img: 'Grat (FFX).jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '80'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '25'
      },
      {
        name: 'Petrify',
        values: '25'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '50'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (2)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Seed Burst', 'Seed Cannon']
      },
      {
        name: 'Ronso Rage',
        values: 'Seed Cannon'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '4,000'
      },
      {
        name: 'MP',
        values: '25'
      },
      {
        name: 'Strength',
        values: '28'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '50'
      },
      {
        name: 'Magic Defense',
        values: '50'
      },
      {
        name: 'Agility',
        values: '12'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '980'
      },
      {
        name: 'Gil',
        values: '520'
      }
    ],
    monsterArena: 'mtgagazet',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Antidote x4'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Remedy x3'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '6.25%',
        values: '2-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Poisontouch', 'Strength +5%', 'Magic +5%']
      },
      {
        name: 'Armor abilities',
        values: ['Poison Ward', 'HP +5%', 'HP +10%']
      },
      {
        name: 'Bribe',
        values: 'Remedy x40'
      }
    ],
    species: 'Plant',
    scanDescription:
      "Its Seed Cannon packs quite a punch. Seed Burst doesn't do much damage, but may inflict confusion on characters. Vulnerable to fire. Kimahri can learn Seed Cannon.",
    location: ['Mt. Gagazet'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '150%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '0%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Bunyip: {
    sensorDescription: 'Covered by a hard shell. Piercing weapons are the way to go.',
    img: 'Bunyip-enemy-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack only.']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '400'
      },
      {
        name: 'MP',
        values: '15'
      },
      {
        name: 'Strength',
        values: '22'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '120'
      },
      {
        name: 'Agility',
        values: '6'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '48'
      },
      {
        name: 'Gil',
        values: '97'
      }
    ],
    monsterArena: 'djoseroad',
    otherInformation: 'Enemy is Tough.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Hi-Potion'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Hypello Potion'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Icestrike', 'Distil Power']
      },
      {
        name: 'Armor abilities',
        values: ['Berserk Ward', 'Defense +3%']
      },
      {
        name: 'Bribe',
        values: 'Hypello Potion x16'
      }
    ],
    species: 'Helm',
    scanDescription:
      'Covered by a hard shell. Slow-moving, but has high physical and magic defense. Vulnerable to ice and water. Falls easily to piercing weapons.',
    location: ['Djose Highroad', 'Moonflow'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '150%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '150%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Bandersnatch: {
    sensorDescription: 'Very nimble. Resistant to magic. Watch out for sleep and silence.',
    img: 'Bandersnatch.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack only.']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '1,800'
      },
      {
        name: 'MP',
        values: '75'
      },
      {
        name: 'Strength',
        values: '32'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '180'
      },
      {
        name: 'Agility',
        values: '32'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '11'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '820'
      },
      {
        name: 'Gil',
        values: '880'
      }
    ],
    monsterArena: 'mtgagazet',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Dream Powder x2'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Dream Powder x3'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '2-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Icestrike', 'Distill Power', 'Strength +3%', 'Magic + 3%']
      },
      {
        name: 'Armor abilities',
        values: ['Silence Ward', 'Sleep Ward']
      },
      {
        name: 'Bribe',
        values: 'Dream Powder x20'
      }
    ],
    species: 'Lupine',
    scanDescription:
      'Very nimble and hard to hit. Magic defense is also high. Defeat it quickly to avoid damage. Vulnerable to fire. Its attacks may cause sleep and silence.',
    location: ['Mt. Gagazet'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '150%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Nemesis: {
    sensorDescription: 'Immune to sensors',
    img: 'FFX Nemesis.PNG',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: 'Immune'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (255)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 5'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Armageddon', 'Ethereal Cannon', 'Ultima', 'Ultra Spark']
      },
      {
        name: 'Ronso Rage',
        values: 'Nova'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '10,000,000'
      },
      {
        name: 'MP',
        values: '9,999'
      },
      {
        name: 'Strength',
        values: '255'
      },
      {
        name: 'Magic',
        values: '255'
      },
      {
        name: 'Defense',
        values: '150'
      },
      {
        name: 'Magic Defense',
        values: '150'
      },
      {
        name: 'Agility',
        values: '200'
      },
      {
        name: 'Accuracy',
        values: '150'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '1'
      },
      {
        name: 'AP (Overkill)',
        values: '55,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'original',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Lv. 4 Key Sphere'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Warp Sphere'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Warp Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '3-4 slots, 1 ability'
      },
      {
        name: 'Weapon abilities',
        values: ['Break Damage Limit']
      },
      {
        name: 'Armor abilities',
        values: ['Break HP Limit']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Weapon',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '-100%'
      },
      {
        name: 'Ice',
        values: '-100%'
      },
      {
        name: 'Lightning',
        values: '-100%'
      },
      {
        name: 'Water',
        values: '-100%'
      },
      {
        name: 'Holy',
        values: '-100%'
      }
    ]
  },
  Halma: {
    sensorDescription: 'Immune to sensors',
    img: 'Halma.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack only.']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '13,000'
      },
      {
        name: 'MP',
        values: '1'
      },
      {
        name: 'Strength',
        values: '46'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '120'
      },
      {
        name: 'Agility',
        values: '23'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '5,300'
      },
      {
        name: 'Gil',
        values: '1,030'
      }
    ],
    monsterArena: 'omegadungeon',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Hypello Potion x3'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Shadow Gem x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x2'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '2-4 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Icestrike', 'Distill Power']
      },
      {
        name: 'Armor abilities',
        values: ['Berserk Ward', 'Berserkproof']
      },
      {
        name: 'Bribe',
        values: 'Supreme Gem x20'
      }
    ],
    species: 'Helm',
    scanDescription: 'Immune to scans',
    location: ['Omega Ruins'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '150%'
      },
      {
        name: 'Ice',
        values: '50%'
      },
      {
        name: 'Lightning',
        values: '50%'
      },
      {
        name: 'Water',
        values: '50%'
      },
      {
        name: 'Holy',
        values: '-'
      }
    ]
  },
  Malboro: {
    sensorDescription: 'Watch out for its Bad Breath attack, which causes multiple status ailments.',
    img: 'FFX Malboro.PNG',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: 'Immune'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 2'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Bad Breath', 'Chow Time', 'Gastric Juice']
      },
      {
        name: 'Ronso Rage',
        values: 'Bad Breath'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '27,000'
      },
      {
        name: 'MP',
        values: '1'
      },
      {
        name: 'Strength',
        values: '32'
      },
      {
        name: 'Magic',
        values: '32'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '10'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '2,200'
      },
      {
        name: 'Gil',
        values: '1,500'
      }
    ],
    monsterArena: 'calmlands',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Remedy'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Remedy'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '50%',
        values: '2-4 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Darktouch', 'Silencetouch', 'Sleeptouch', 'Poisontouch']
      },
      {
        name: 'Armor abilities',
        values: ['Dark Ward', 'Silence Ward', 'Sleep Ward', 'Poison Ward', 'Stone Ward', 'Confuse Ward', 'Berserk Ward']
      },
      {
        name: 'Bribe',
        values: 'Wings to Discovery x4'
      }
    ],
    species: 'Malboro',
    scanDescription:
      'Its Bad Breath inflicts multiple status effects on all characters. Guard against the status effects with armor, and attack with fire. Kimahri can learn Bad Breath.',
    location: ['Calm Lands', 'Cavern of the Stolen Fayth'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '150%'
      },
      {
        name: 'Ice',
        values: '0%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '0%'
      },
      {
        name: 'Holy',
        values: '-'
      }
    ]
  },
  'One-Eye': {
    sensorDescription: 'Immune to sensors',
    img: 'BatEye-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: 'Immune'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (200)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 5'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Shockwave', 'Black Stare']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '150,000'
      },
      {
        name: 'MP',
        values: '270'
      },
      {
        name: 'Strength',
        values: '55'
      },
      {
        name: 'Magic',
        values: '77'
      },
      {
        name: 'Defense',
        values: '58'
      },
      {
        name: 'Magic Defense',
        values: '183'
      },
      {
        name: 'Agility',
        values: '38'
      },
      {
        name: 'Accuracy',
        values: '85'
      },
      {
        name: 'Evasion',
        values: '10'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '10,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'speciesconquest',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Lunar Curtain x3'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Blessed Gem'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Magic Def Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '2-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Triple AP']
      },
      {
        name: 'Armor abilities',
        values: ['MP +10%', 'MP +20%', 'MP +30% (fixed)']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Evil Eye',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '0%'
      },
      {
        name: 'Ice',
        values: '0%'
      },
      {
        name: 'Lightning',
        values: '0%'
      },
      {
        name: 'Water',
        values: '0%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Shinryu: {
    sensorDescription: 'Immune to sensors',
    img: 'Shinryu-ffx-enemy.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: 'Immune'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (255)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 4'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Shining', 'Eraser']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '2,000,000'
      },
      {
        name: 'MP',
        values: '72'
      },
      {
        name: 'Strength',
        values: '92'
      },
      {
        name: 'Magic',
        values: '86'
      },
      {
        name: 'Defense',
        values: '60'
      },
      {
        name: 'Magic Defense',
        values: '98'
      },
      {
        name: 'Agility',
        values: '70'
      },
      {
        name: 'Accuracy',
        values: '200'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '50,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'original',
    otherInformation: 'Fought underwater.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: "Gambler's Spirit"
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Three Stars'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Wings to Discovery x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '2-4 slots, 1 ability'
      },
      {
        name: 'Weapon abilities',
        values: ['Double AP']
      },
      {
        name: 'Armor abilities',
        values: ['Auto-Med']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Unspecified',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Sand Wolf': {
    sensorDescription: 'Very nimble. Resistant to magic. Watch out for Sleep and Silence.',
    img: 'Sand Wolf (FFX).jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack only.']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '450'
      },
      {
        name: 'MP',
        values: '55'
      },
      {
        name: 'Strength',
        values: '23'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '120'
      },
      {
        name: 'Agility',
        values: '23'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '9'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '310'
      },
      {
        name: 'Gil',
        values: '225'
      }
    ],
    monsterArena: 'bikanel',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Sleeping Powder'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Sleeping Powder x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere, Al Bhed Potion x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere, Al Bhed Potion x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Icestrike', 'Distill Power']
      },
      {
        name: 'Armor abilities',
        values: ['Silence Ward', 'Sleep Ward', 'Magic Def +5%']
      },
      {
        name: 'Bribe',
        values: 'Sleeping Powder x12'
      }
    ],
    species: 'Lupine',
    scanDescription:
      'Very nimble and hard to hit. Magic defense is also high. Defeat it quickly to avoid damage. Vulnerable to fire and ice. Its attacks may cause sleep and silence.',
    location: ['Bikanel'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '150%'
      },
      {
        name: 'Ice',
        values: '150%'
      },
      {
        name: 'Lightning',
        values: '-'
      },
      {
        name: 'Water',
        values: '-'
      },
      {
        name: 'Holy',
        values: '-'
      }
    ]
  },
  'Yellow Element': {
    sensorDescription: 'Lightning elemental. Vulnerable to opposing element.',
    img: 'FFX Yellow Element.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Thunder', 'Thundara*']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '300'
      },
      {
        name: 'MP',
        values: '100'
      },
      {
        name: 'Strength',
        values: '1'
      },
      {
        name: 'Magic',
        values: '18'
      },
      {
        name: 'Defense',
        values: '120'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '5'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '9'
      },
      {
        name: 'Gil',
        values: '33'
      }
    ],
    monsterArena: 'kilika',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Electro Marble'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Lightning Marble'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-2 slots, 0-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing (Kimahri and Auron)', 'Lightningstrike', 'Distill Mana']
      },
      {
        name: 'Armor abilities',
        values: ['Lightning Ward']
      },
      {
        name: 'Bribe',
        values: 'Lightning Marble x1'
      }
    ],
    species: 'Elemental',
    scanDescription: 'Casts Thunder. Physical attacks hardly hurt it. Absorbs lightning, so Water is the way to go.',
    location: ['Kilika Woods'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '50%'
      },
      {
        name: 'Ice',
        values: '50%'
      },
      {
        name: 'Lightning',
        values: '-100%'
      },
      {
        name: 'Water',
        values: '150%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Skoll: {
    sensorDescription: 'Very nimble. Resistant to magic. Watch out for sleep and silence.',
    img: 'Skoll.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack only.']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '1,000'
      },
      {
        name: 'MP',
        values: '60'
      },
      {
        name: 'Strength',
        values: '28'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '180'
      },
      {
        name: 'Agility',
        values: '28'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '10'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '480'
      },
      {
        name: 'Gil',
        values: '420'
      }
    ],
    monsterArena: 'calmlands',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Dream Powder'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Dream Powder'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Icestrike', 'Distill Power*']
      },
      {
        name: 'Armor abilities',
        values: ['Silence Ward', 'Sleep Ward']
      },
      {
        name: 'Bribe',
        values: 'Dream Powder x12'
      }
    ],
    species: 'Lupine',
    scanDescription:
      'Very nimble and hard to hit. Magic defense is also high. Defeat it quickly to avoid damage. Vulnerable to fire and lightning. Its attacks may cause sleep and silence.',
    location: ['Calm Lands'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '150%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '150%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Mandragora: {
    sensorDescription: 'Vulnerable to fire.',
    img: 'Mandragora-enemy-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '95'
      },
      {
        name: 'Sleep',
        values: '80'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '25'
      },
      {
        name: 'Petrify',
        values: '25'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: '50'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (3)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Earthquake', 'Ochu Dance']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '31,000'
      },
      {
        name: 'MP',
        values: '120'
      },
      {
        name: 'Strength',
        values: '34'
      },
      {
        name: 'Magic',
        values: '40'
      },
      {
        name: 'Defense',
        values: '12'
      },
      {
        name: 'Magic Defense',
        values: '15'
      },
      {
        name: 'Agility',
        values: '13'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '6,320'
      },
      {
        name: 'Gil',
        values: '1,200'
      }
    ],
    monsterArena: 'mtgagazet',
    otherInformation: 'Attack may cause Poison.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Remedy x2'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Remedy x3'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '50%',
        values: '2-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Poisontouch', 'Strength +5%', 'Magic +5%']
      },
      {
        name: 'Armor abilities',
        values: ['Dark Ward', 'Silence Ward', 'Sleep Ward', 'Poison Ward', 'Stone Ward', 'Confuse Ward', 'Berserk Ward']
      },
      {
        name: 'Bribe',
        values: 'Return Sphere x24'
      }
    ],
    species: 'Ochu',
    scanDescription:
      'The more damage it takes, the sooner it uses Earthquake. Its Ochu Dance inflicts darkness, silence, confusion, and slow. Also beware of poison. Vulnerable to fire.',
    location: ['Mt. Gagazet Cavern', 'Zanarkand Ruins'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '150%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '-100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Ghost: {
    sensorDescription: 'Casts Doom at the beginning of the battle.',
    img: 'Ghost-enemy-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '95'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: 'Immune'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (7)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Doom', 'Fira', 'Blizzara', 'Thundara', 'Watera']
      },
      {
        name: 'Ronso Rage',
        values: 'Doom'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '9,999'
      },
      {
        name: 'MP',
        values: '350'
      },
      {
        name: 'Strength',
        values: '1'
      },
      {
        name: 'Magic',
        values: '33'
      },
      {
        name: 'Defense',
        values: '120'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '14'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '1,450'
      },
      {
        name: 'Gil',
        values: '810'
      }
    ],
    monsterArena: 'stolenfaythcavern',
    otherInformation: 'Affinities to Fire, Ice, Lightning, and Water vary with each Ghost.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Phoenix Down'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Farplane Shadow'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '23.44%',
        values: '2-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Magic +5%', 'Magic +10%', 'Distill Mana']
      },
      {
        name: 'Armor abilities',
        values: ['Death Ward', 'MP +10%', 'No Encounters']
      },
      {
        name: 'Bribe',
        values: 'Mega Phoenix x30'
      }
    ],
    species: 'Revenant',
    scanDescription:
      'Casts Doom at the beginning of battle. Defeat it before the countdown runs out to avoid KO. Its elemental weaknesses change every battle. Kimahri can learn Doom.',
    location: ['Cavern of the Stolen Fayth'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: 'Varies'
      },
      {
        name: 'Ice',
        values: 'Varies'
      },
      {
        name: 'Lightning',
        values: 'Varies'
      },
      {
        name: 'Water',
        values: 'Varies'
      },
      {
        name: 'Holy',
        values: '150%'
      }
    ]
  },
  'Sleep Sprout': {
    sensorDescription: 'Immune to sensors',
    img: 'Exoray.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: 'Immune'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (200)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 5'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Blizzaga', 'Firaga', 'Flare', 'Goodnight', 'Thundaga', 'Ultima', 'Waterga']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '98,000'
      },
      {
        name: 'MP',
        values: '820'
      },
      {
        name: 'Strength',
        values: '3'
      },
      {
        name: 'Magic',
        values: '112'
      },
      {
        name: 'Defense',
        values: '167'
      },
      {
        name: 'Magic Defense',
        values: '203'
      },
      {
        name: 'Agility',
        values: '26'
      },
      {
        name: 'Accuracy',
        values: '1'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '10,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'speciesconquest',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Poison Fang x4'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Farplane Wind'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Teleport Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '3-4 slots, 1-4 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Darkstrike', 'Silencestrike', 'Sleepstrike (fixed)', 'Poisonstrike', 'Stonestrike', 'Zombiestrike', 'Slowstrike']
      },
      {
        name: 'Armor abilities',
        values: ['Darkproof', 'Silenceproof', 'Sleepproof (fixed)', 'Poisonproof', 'Stoneproof', 'Zombieproof', 'Slowproof']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Fungus',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '150%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Earth Eater': {
    sensorDescription: 'Immune to sensors',
    img: 'Earth Eater (FFX).jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: 'Immune'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (255)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: 'Auto'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: 'Immune'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 5'
      },
      {
        name: 'Berserk',
        values: 'Immune'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Flare', 'Megaton Punch', 'Fall Back', 'Stand Up']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '1,300,000'
      },
      {
        name: 'MP',
        values: '30'
      },
      {
        name: 'Strength',
        values: '117'
      },
      {
        name: 'Magic',
        values: '186'
      },
      {
        name: 'Defense',
        values: '200'
      },
      {
        name: 'Magic Defense',
        values: '210'
      },
      {
        name: 'Agility',
        values: '47'
      },
      {
        name: 'Accuracy',
        values: '120'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '50,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'original',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: "Gambler's Spirit"
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Lv. 1 Key Sphere'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Fortune Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '3-4 slots, 1 ability'
      },
      {
        name: 'Weapon abilities',
        values: ['Triple Overdrive']
      },
      {
        name: 'Armor abilities',
        values: ['Auto-Potion']
      },
      {
        name: 'Bribe',
        values: 'Cannot bribe'
      }
    ],
    species: 'Eater',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Fenrir: {
    sensorDescription: 'Immune to Sensor.',
    img: 'Bandersnatch.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: '99'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (200)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 4'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Fangs of Chaos', 'Fangs of Hell', 'Fangs of Ruin']
      },
      {
        name: 'Ronso Rage',
        values: 'N/A'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '850,000'
      },
      {
        name: 'MP',
        values: '300'
      },
      {
        name: 'Strength',
        values: '73'
      },
      {
        name: 'Magic',
        values: '12'
      },
      {
        name: 'Defense',
        values: '40'
      },
      {
        name: 'Magic Defense',
        values: '165'
      },
      {
        name: 'Agility',
        values: '200'
      },
      {
        name: 'Accuracy',
        values: '200'
      },
      {
        name: 'Evasion',
        values: '60'
      },
      {
        name: 'Luck',
        values: '30'
      },
      {
        name: 'AP (Overkill)',
        values: '10,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'speciesconquest',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Chocobo Feather x2'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Chocobo Wing'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Agility Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '3-4 slots, 2-4 abilities'
      },
      {
        name: 'Weapon abilities',
        values: [
          'Deathstrike (fixed)',
          'Darkstrike',
          'Silencestrike',
          'Sleepstrike',
          'Poisonstrike',
          'Stonestrike',
          'Zombiestrike',
          'Slowstrike'
        ]
      },
      {
        name: 'Armor abilities',
        values: ['Deathproof (fixed)', 'Darkproof', 'Silenceproof', 'Sleepproof', 'Poisonproof', 'Stoneproof', 'Zombieproof', 'Slowproof']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Lupine',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '50%'
      },
      {
        name: 'Ice',
        values: '50%'
      },
      {
        name: 'Lightning',
        values: '50%'
      },
      {
        name: 'Water',
        values: '50%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Simurgh: {
    sensorDescription: 'Aerial. Magic attacks are the way to go. Watch out for darkness.',
    img: 'Simurgh (FFX).jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack only.']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '200'
      },
      {
        name: 'MP',
        values: '27'
      },
      {
        name: 'Strength',
        values: '13'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '17'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '48'
      },
      {
        name: 'Gil',
        values: '73'
      }
    ],
    monsterArena: 'djoseroad',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Smoke Bomb'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Smoke Bomb x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Speed Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Speed Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Sensor', 'Piercing', 'Distill Speed']
      },
      {
        name: 'Armor abilities',
        values: ['Dark Ward', 'Magic Def +3%']
      },
      {
        name: 'Bribe',
        values: 'Smoke Bomb x5'
      }
    ],
    species: 'Bird',
    scanDescription:
      "Aerial and hard to hit. Magic attacks are effective. It's vulnerable to fire, so use Fira to achieve Overkill. Attacks may inflict darkness.",
    location: ['Djose Highroad'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '150%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Buer: {
    sensorDescription: 'Aerial. Resistant to magic. Watch out for confusion.',
    img: 'Buer.gif',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Stare']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '230'
      },
      {
        name: 'MP',
        values: '250'
      },
      {
        name: 'Strength',
        values: '1'
      },
      {
        name: 'Magic',
        values: '22'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '120'
      },
      {
        name: 'Agility',
        values: '12'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '12'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '92'
      },
      {
        name: 'Gil',
        values: '132'
      }
    ],
    monsterArena: 'thunderplains',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Hi-Potion'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Musk'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Speed Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Speed Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Icestrike', 'Strength +3%', 'Magic +3%', 'Distill Speed']
      },
      {
        name: 'Armor abilities',
        values: ['Confuse Ward', 'MP +5%']
      },
      {
        name: 'Bribe',
        values: 'Musk x1'
      }
    ],
    species: 'Evil Eye',
    scanDescription: 'Aerial and hard to hit. Its weakness is water, but it has high magic defense. Its Gaze may cause confusion.',
    location: ['Thunder Plains'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '150%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Catoblepas: {
    sensorDescription: 'Immune to sensors',
    img: 'Behemoth.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '50'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '50'
      },
      {
        name: 'Mental Break',
        values: '50'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (200)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: 'Immune'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 4'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Flare', 'Pop Fly', 'Ultima']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '550,000'
      },
      {
        name: 'MP',
        values: '160'
      },
      {
        name: 'Strength',
        values: '76'
      },
      {
        name: 'Magic',
        values: '58'
      },
      {
        name: 'Defense',
        values: '33'
      },
      {
        name: 'Magic Defense',
        values: '27'
      },
      {
        name: 'Agility',
        values: '47'
      },
      {
        name: 'Accuracy',
        values: '180'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '8,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'areaconquest',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Healing Spring x3'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Stamina Tonic'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Three Stars x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '3-4 slots, 2-4 abilities'
      },
      {
        name: 'Weapon abilities',
        values: [
          'Deathstrike (fixed)',
          'Darkstrike',
          'Silencestrike',
          'Sleepstrike',
          'Poisonstrike',
          'Stonestrike',
          'Zombiestrike',
          'Slowstrike'
        ]
      },
      {
        name: 'Armor abilities',
        values: ['Deathproof (fixed)', 'Darkproof', 'Silenceproof', 'Sleepproof', 'Poisonproof', 'Stoneproof', 'Zombieproof', 'Slowproof']
      },
      {
        name: 'Bribe',
        values: 'Cannot bribe'
      }
    ],
    species: 'Behemoth',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Cactuar King': {
    sensorDescription: 'Immune to sensors',
    img: 'Qactuar FFX.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: 'Immune'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (200)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: 'Immune'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 4'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['10', '000 Needles', '99', '999 Needles', 'Run Away']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '100,000'
      },
      {
        name: 'MP',
        values: '0'
      },
      {
        name: 'Strength',
        values: '255'
      },
      {
        name: 'Magic',
        values: '255'
      },
      {
        name: 'Defense',
        values: '100'
      },
      {
        name: 'Magic Defense',
        values: '255'
      },
      {
        name: 'Agility',
        values: '80'
      },
      {
        name: 'Accuracy',
        values: '180'
      },
      {
        name: 'Evasion',
        values: '240'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '8,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'areaconquest',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Chocobo Wing x2'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Designer Wallet'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Blessed Gem x3'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '2-4 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Strength +5%', 'Strength +10%', 'Strength +20% (fixed)']
      },
      {
        name: 'Armor abilities',
        values: ['Defense +5%', 'Defense +10%', 'Defense +20% (fixed)']
      },
      {
        name: 'Bribe',
        values: 'Cannot bribe'
      }
    ],
    species: 'Cactuar',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '0%'
      },
      {
        name: 'Ice',
        values: '0%'
      },
      {
        name: 'Lightning',
        values: '0%'
      },
      {
        name: 'Water',
        values: '0%'
      },
      {
        name: 'Holy',
        values: '0%'
      }
    ]
  },
  Gandarewa: {
    sensorDescription: 'Aerial. Resistant to magic.',
    img: 'Gandarewa.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Thunder']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '148'
      },
      {
        name: 'MP',
        values: '160'
      },
      {
        name: 'Strength',
        values: '1'
      },
      {
        name: 'Magic',
        values: '23'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '120'
      },
      {
        name: 'Agility',
        values: '9'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '12'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '32'
      },
      {
        name: 'Gil',
        values: '62'
      }
    ],
    monsterArena: 'mushroomrockroad',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Electro Marble'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Electro Marble x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-2 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Lightningstrike', 'Distill Mana']
      },
      {
        name: 'Armor abilities',
        values: ['Lightning Ward', 'Magic Def +3%']
      },
      {
        name: 'Bribe',
        values: 'Lightning Marble x3'
      }
    ],
    species: 'Imp',
    scanDescription:
      "Aerial and hard to hit. Casts Thunder. It's vulnerable to water, but has high magic defense. Use Wakka to knock it out of the sky.",
    location: ['Mushroom Rock Road', 'Djose Highroad', 'Moonflow'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '-'
      },
      {
        name: 'Ice',
        values: '-'
      },
      {
        name: 'Lightning',
        values: '-'
      },
      {
        name: 'Water',
        values: '150%'
      },
      {
        name: 'Holy',
        values: '-'
      }
    ]
  },
  Juggernaut: {
    sensorDescription: 'Immune to sensors',
    img: 'Grendel.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '95'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '95'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (200)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 5'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: 'Immune'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Crush Spike', 'Salvo', 'Charging']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '1,200,000'
      },
      {
        name: 'MP',
        values: '20'
      },
      {
        name: 'Strength',
        values: '98'
      },
      {
        name: 'Magic',
        values: '70'
      },
      {
        name: 'Defense',
        values: '140'
      },
      {
        name: 'Magic Defense',
        values: '62'
      },
      {
        name: 'Agility',
        values: '42'
      },
      {
        name: 'Accuracy',
        values: '150'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '8,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'speciesconquest',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Lunar Curtain x4'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Shining Gem'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Strength Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '2-4 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Strength +5%', 'Strength +10%', 'Strength +20% (fixed)']
      },
      {
        name: 'Armor abilities',
        values: ['Defense +5%', 'Defense +10%', 'Defense +20% (fixed)']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Ruminant',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '0%'
      },
      {
        name: 'Ice',
        values: '0%'
      },
      {
        name: 'Lightning',
        values: '0%'
      },
      {
        name: 'Water',
        values: '0%'
      },
      {
        name: 'Holy',
        values: '0%'
      }
    ]
  },
  Ornitholestes: {
    sensorDescription: 'Immune to sensors',
    img: 'Yowie (FFX).jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: 'Immune'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (200)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 5'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Drain Touch', 'Poison Touch']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '800,000'
      },
      {
        name: 'MP',
        values: '300'
      },
      {
        name: 'Strength',
        values: '83'
      },
      {
        name: 'Magic',
        values: '30'
      },
      {
        name: 'Defense',
        values: '55'
      },
      {
        name: 'Magic Defense',
        values: '170'
      },
      {
        name: 'Agility',
        values: '130'
      },
      {
        name: 'Accuracy',
        values: '200'
      },
      {
        name: 'Evasion',
        values: '80'
      },
      {
        name: 'Luck',
        values: '20'
      },
      {
        name: 'AP (Overkill)',
        values: '10,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'speciesconquest',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Rename Card'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Chocobo Wing'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: "Gambler's Spirit x2"
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '2-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Double Overdrive']
      },
      {
        name: 'Armor abilities',
        values: ['Defense +5%', 'Defense +10%', 'Defense +20% (fixed)']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Reptile',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '-100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '0%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Basilisk: {
    sensorDescription: 'Beware the third eye, its Stone Gaze may cause petrification. If petrified, restore with Esuna or Soft.',
    img: 'Basilisk-enemy-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (2)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Attack', 'Stone Gaze']
      },
      {
        name: 'Ronso Rage',
        values: 'Stone Breath'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '2,025'
      },
      {
        name: 'MP',
        values: '20'
      },
      {
        name: 'Strength',
        values: '14'
      },
      {
        name: 'Magic',
        values: '35'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '9'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '140'
      },
      {
        name: 'Gil',
        values: '125'
      }
    ],
    monsterArena: 'djoseroad',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Petrify Grenade'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Petrify Grenade'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Ability Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Ability Sphere x2'
      },
      {
        name: 'Equipment drop',
        percentage: '23.44%',
        values: '1-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Stonetouch', 'Strength +3%', 'Magic +3%']
      },
      {
        name: 'Armor abilities',
        values: ['Stone Ward', 'MP +5%']
      },
      {
        name: 'Bribe',
        values: 'Petrify Grenade x24'
      }
    ],
    species: 'Basilisk',
    scanDescription:
      'Beware the third eye. Its Stone Gaze may cause petrification. If petrified, restore with Esuna or Soft. Kimahri can learn Stone Breath.',
    location: ['Djose Highroad'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '50%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Demonolith: {
    sensorDescription: 'Beware of its Breath, which can petrify you.',
    img: 'Demonolith-enemy-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '50'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: '50'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '50'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Breath', "Pharaoh's Curse"]
      },
      {
        name: 'Ronso Rage',
        values: 'N/A'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '45,000'
      },
      {
        name: 'MP',
        values: '9,999'
      },
      {
        name: 'Strength',
        values: '33'
      },
      {
        name: 'Magic',
        values: '99'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '1'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '11,000'
      },
      {
        name: 'Gil',
        values: '1,470'
      }
    ],
    monsterArena: 'insidesin',
    otherInformation: 'Enemy is Tough.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Petrify Grenade x2'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Petrify Grenade x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Lv. 3 Key Sphere x2'
      },
      {
        name: 'Equipment drop',
        percentage: '50%',
        values: '2-4 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Stonetouch', 'Stonestrike']
      },
      {
        name: 'Armor abilities',
        values: ['Stone Ward', 'Stoneproof', 'No Encounters']
      },
      {
        name: 'Bribe',
        values: 'Lv. 3 Key Sphere x40'
      }
    ],
    species: 'Doomstone',
    scanDescription:
      "Beware of its Pharaoh's Curse, which inflicts poison, silence, darkness, and curse. If attacked when petrified, the party member will be unable to return to battle. Also watch out for zombie.",
    location: ['Inside Sin Omega Ruins'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '50%'
      },
      {
        name: 'Ice',
        values: '50%'
      },
      {
        name: 'Lightning',
        values: '50%'
      },
      {
        name: 'Water',
        values: '50%'
      },
      {
        name: 'Holy',
        values: '150%'
      }
    ]
  },
  Jormungand: {
    sensorDescription: 'Immune to sensors',
    img: 'Anacondaur (FFX).jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '90'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '90'
      },
      {
        name: 'Mental Break',
        values: '90'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (200)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 5'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Cold Stare', 'Space-Time Vorpal']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '520,000'
      },
      {
        name: 'MP',
        values: '63'
      },
      {
        name: 'Strength',
        values: '77'
      },
      {
        name: 'Magic',
        values: '80'
      },
      {
        name: 'Defense',
        values: '33'
      },
      {
        name: 'Magic Defense',
        values: '186'
      },
      {
        name: 'Agility',
        values: '53'
      },
      {
        name: 'Accuracy',
        values: '130'
      },
      {
        name: 'Evasion',
        values: '6'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '8,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'areaconquest',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Petrify Grenade'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Three Stars'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Supreme Gem x2'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '3-4 slots, 1-4 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Darkstrike', 'Silencestrike', 'Sleepstrike', 'Poisonstrike', 'Stonestrike (fixed)', 'Zombiestrike', 'Slowstrike']
      },
      {
        name: 'Armor abilities',
        values: ['Darkproof', 'Silenceproof', 'Sleepproof', 'Poisonproof', 'Stoneproof (fixed)', 'Zombieproof', 'Slowproof']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Basilisk',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Ragora: {
    sensorDescription: 'Vulnerable to Fire.',
    img: 'Ragora-enemy-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Seed Cannon']
      },
      {
        name: 'Ronso Rage',
        values: 'Seed Cannon'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '780'
      },
      {
        name: 'MP',
        values: '15'
      },
      {
        name: 'Strength',
        values: '18'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '8'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '20'
      },
      {
        name: 'Gil',
        values: '48'
      }
    ],
    monsterArena: 'kilika',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Antidote'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Remedy'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '6.25%',
        values: '1-2 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Poisontouch', 'Strength +3%', 'Magic +3%']
      },
      {
        name: 'Armor abilities',
        values: ['Poison Ward', 'HP +5%']
      },
      {
        name: 'Bribe',
        values: 'Remedy x8'
      }
    ],
    species: 'Plant',
    scanDescription:
      'Watch out for its powerful Seed Cannon. One bad hit will knock characters out. Plants tend to be weak against fire, so have Lulu cast Fira. Kimahri can learn Seed Cannon.',
    location: ['Kilika Woods'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '150%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '0%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Adamantoise: {
    sensorDescription: 'Covered by a hard shell.',
    img: 'Adamantoise-enemy-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '0'
      },
      {
        name: 'Poison (5)',
        values: '75'
      },
      {
        name: 'Petrify',
        values: '80'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (5)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 3'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Attack', 'Breath', 'Earthquake']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '54,400'
      },
      {
        name: 'MP',
        values: '40'
      },
      {
        name: 'Strength',
        values: '38'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '90'
      },
      {
        name: 'Magic Defense',
        values: '90'
      },
      {
        name: 'Agility',
        values: '1'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '12,500'
      },
      {
        name: 'Gil',
        values: '2,200'
      }
    ],
    monsterArena: 'insidesin',
    otherInformation: 'Enemy is Tough.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Healing Water'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Stamina Tablet'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x2'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x4'
      },
      {
        name: 'Equipment drop',
        percentage: '50%',
        values: '3-4 slots, 0-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Half MP Cost']
      },
      {
        name: 'Armor abilities',
        values: ['SOS Shell', 'SOS Protect', 'HP +20%']
      },
      {
        name: 'Bribe',
        values: 'Special Sphere x6'
      }
    ],
    species: 'Adamantoise',
    scanDescription:
      'Protected by a hard shell. Attacks multiple targets with its fire-based Breath. Armor Break and Mental Break are the way to go.',
    location: ['Inside Sin', 'Omega Ruins'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '-100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Garm: {
    sensorDescription: 'Very nimble. Resistant to magic.',
    img: 'Garm (FFX).jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack only.']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '240'
      },
      {
        name: 'MP',
        values: '35'
      },
      {
        name: 'Strength',
        values: '17'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '120'
      },
      {
        name: 'Agility',
        values: '16'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '7'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '48'
      },
      {
        name: 'Gil',
        values: '88'
      }
    ],
    monsterArena: 'djoseroad',
    otherInformation: 'Attack may cause Sleep or Silence.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Hi-Potion'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Sleeping Powder'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Icestrike', 'Distill Power']
      },
      {
        name: 'Armor abilities',
        values: ['Silence Ward', 'Sleep Ward', 'Magic Def +3%']
      },
      {
        name: 'Bribe',
        values: 'Sleeping Powder x7'
      }
    ],
    species: 'Lupine',
    scanDescription:
      "Very nimble and hard to hit. Magic defence is also high. Defeat it quickly to avoid damage. It's vulnerable to lightning and fire.",
    location: ['Djose Highroad'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '150%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '150%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Nidhogg: {
    sensorDescription: 'Covered with hard scales. Piercing weapons are the way to go. Watch out for Slow.',
    img: 'Nidhogg (FFX).jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Flame Breath']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '2,000'
      },
      {
        name: 'MP',
        values: '46'
      },
      {
        name: 'Strength',
        values: '43'
      },
      {
        name: 'Magic',
        values: '50'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '180'
      },
      {
        name: 'Agility',
        values: '10'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '810'
      },
      {
        name: 'Gil',
        values: '602'
      }
    ],
    monsterArena: 'stolenfaythcavern',
    otherInformation: 'Enemy is Tough. Attack may cause Slow.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Hi-Potion'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Gold Hourglass'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '2-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Icestrike', 'Distill Power']
      },
      {
        name: 'Armor abilities',
        values: ['Slow Ward']
      },
      {
        name: 'Bribe',
        values: 'Gold Hourglass x12'
      }
    ],
    species: 'Drake',
    scanDescription:
      "Covered with hard scales. Physical and magic defense are high. It only takes half damage from fire, but it's weak against ice. Its attack may cause slow. Beware of its fire-based Breath, which hits all.",
    location: ['Cavern of the Stolen Fayth Mt. Gagazet'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '50%'
      },
      {
        name: 'Ice',
        values: '150%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Bashura: {
    sensorDescription:
      'When it puts up its dukes it will respond to physical attacks with a mighty counter. Use magic and poison to soften it up.',
    img: 'FFX bashura.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '0'
      },
      {
        name: 'Sleep',
        values: '80'
      },
      {
        name: 'Darkness',
        values: '95'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '25'
      },
      {
        name: 'Petrify',
        values: '50'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '25'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '20'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (3)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attacks', 'Psych Up']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '17,000'
      },
      {
        name: 'MP',
        values: '5'
      },
      {
        name: 'Strength',
        values: '34'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '45'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '16'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '1,860'
      },
      {
        name: 'Gil',
        values: '730'
      }
    ],
    monsterArena: 'mtgagazet',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Soul Spring'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Soul Spring x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x2'
      },
      {
        name: 'Equipment drop',
        percentage: '50%',
        values: '1-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Strength +5%', 'Magic +5%', 'Counter-Attack']
      },
      {
        name: 'Armor abilities',
        values: ['SOS Haste', 'HP +10%']
      },
      {
        name: 'Bribe',
        values: 'Stamina Spring x80'
      }
    ],
    species: 'Ogre',
    scanDescription:
      'Be careful if it puts up its dukes. When it puts up its dukes, it will respond to physical attacks with a mighty counter. Use magic and poison to soften it up.',
    location: ['Mt. Gagazet', 'Zanarkand'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '150%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Epaaj: {
    sensorDescription: 'Watch out for poison.',
    img: 'Epaaj.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: '95'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Blades']
      },
      {
        name: 'Ronso Rage',
        values: 'N/A'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '8,700'
      },
      {
        name: 'MP',
        values: '25'
      },
      {
        name: 'Strength',
        values: '28'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '20'
      },
      {
        name: 'Magic Defense',
        values: '20'
      },
      {
        name: 'Agility',
        values: '1'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '970'
      },
      {
        name: 'Gil',
        values: '950'
      }
    ],
    monsterArena: 'stolenfaythcavern',
    otherInformation: 'Attack may cause Poison.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Hi-Potion'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Hi-Potion x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Ability Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Ability Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '50%',
        values: '2-4 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Strength +5%', 'Magic +5%', 'SOS Overdrive']
      },
      {
        name: 'Armor abilities',
        values: ['Defense +5%']
      },
      {
        name: 'Bribe',
        values: 'Farplane Wind x25'
      }
    ],
    species: 'Blade',
    scanDescription: 'Very nimble. Its claws can inflict poison. Inflicting darkness or Threaten on it are the way to go.',
    location: ['Cavern of the Stolen Fayth'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '-'
      },
      {
        name: 'Ice',
        values: '-'
      },
      {
        name: 'Lightning',
        values: '-'
      },
      {
        name: 'Water',
        values: '-'
      },
      {
        name: 'Holy',
        values: '-'
      }
    ]
  },
  Machea: {
    sensorDescription: 'Immune to sensors',
    img: 'Machea.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: '95'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (3)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Blades']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '18,000'
      },
      {
        name: 'MP',
        values: '59'
      },
      {
        name: 'Strength',
        values: '35'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '55'
      },
      {
        name: 'Magic Defense',
        values: '10'
      },
      {
        name: 'Agility',
        values: '39'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '8,300'
      },
      {
        name: 'Gil',
        values: '1,450'
      }
    ],
    monsterArena: 'omegadungeon',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Hi-Potion x2'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Stamina Tonic'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Lv. 3 Key Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '50%',
        values: '2-4 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Strength +5%', 'Magic +5%', 'SOS Overdrive']
      },
      {
        name: 'Armor abilities',
        values: ['Defense +10%', 'Defense +20%']
      },
      {
        name: 'Bribe',
        values: 'Chocobo Wing x60'
      }
    ],
    species: 'Blade',
    scanDescription: 'Immune to scans',
    location: ['Omega Ruins'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Dinonix: {
    sensorDescription: 'Very nimble. Resistant to magic.',
    img: 'Dinonix-enemy-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack only.']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '140'
      },
      {
        name: 'MP',
        values: '25'
      },
      {
        name: 'Strength',
        values: '14'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '120'
      },
      {
        name: 'Agility',
        values: '1'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '5'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '9'
      },
      {
        name: 'Gil',
        values: '27'
      }
    ],
    monsterArena: 'kilika',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Soft'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Petrify Grenade'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Speed Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-2 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Distill Speed']
      },
      {
        name: 'Armor abilities',
        values: ['Slow Ward', 'Defense +3%']
      },
      {
        name: 'Bribe',
        values: 'Petrify Grenade x2'
      }
    ],
    species: 'Reptile',
    scanDescription: 'Very nimble and hard to hit. Magic defense is also high. Defeat it quickly to avoid damage. Vulnerable to ice.',
    location: ['Kilika Woods'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '50%'
      },
      {
        name: 'Ice',
        values: '150%'
      },
      {
        name: 'Lightning',
        values: '-'
      },
      {
        name: 'Water',
        values: '-'
      },
      {
        name: 'Holy',
        values: '-'
      }
    ]
  },
  Vorban: {
    sensorDescription: 'Immune to sensors',
    img: 'Barbatos-enemy-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: 'Immune'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (200)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 5'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Body Splash', 'Mortar']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '630,000'
      },
      {
        name: 'MP',
        values: '120'
      },
      {
        name: 'Strength',
        values: '95'
      },
      {
        name: 'Magic',
        values: '75'
      },
      {
        name: 'Defense',
        values: '100'
      },
      {
        name: 'Magic Defense',
        values: '100'
      },
      {
        name: 'Agility',
        values: '33'
      },
      {
        name: 'Accuracy',
        values: '80'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '8,000'
      },
      {
        name: 'Gil',
        values: 'N/A'
      }
    ],
    monsterArena: 'areaconquest',
    otherInformation: 'Enemy is Tough. Armored.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Healing Spring x2'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Stamina Tablet x1'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Friend Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '2-4 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Strength +5%', 'Strength +10%', 'Strength +20% (fixed)']
      },
      {
        name: 'Armor abilities',
        values: ['Defense +5%', 'Defense +10%', 'Defense +20% (fixed)']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Armor',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Pteryx: {
    sensorDescription: 'Immune to sensors',
    img: 'Simurgh (FFX).jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '90'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '90'
      },
      {
        name: 'Mental Break',
        values: '90'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (200)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 5'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Beak', 'Beak of Woe']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '100,000'
      },
      {
        name: 'MP',
        values: '0'
      },
      {
        name: 'Strength',
        values: '90'
      },
      {
        name: 'Magic',
        values: '5'
      },
      {
        name: 'Defense',
        values: '100'
      },
      {
        name: 'Magic Defense',
        values: '100'
      },
      {
        name: 'Agility',
        values: '60'
      },
      {
        name: 'Accuracy',
        values: '200'
      },
      {
        name: 'Evasion',
        values: '60'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '10,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'speciesconquest',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Smoke Bomb x4'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Candle of Life'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Evasion Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '2-4 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Strength +5%', 'Strength +10%', 'Strength +20% (fixed)']
      },
      {
        name: 'Armor abilities',
        values: ['Defense +5%', 'Defense +10%', 'Defense +20% (fixed)']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Bird',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Kottos: {
    sensorDescription: 'Immune to sensors',
    img: 'FFX bashura.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: 'Immune'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (200)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 5'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack (two versions)', 'Counter Attack']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '440,000'
      },
      {
        name: 'MP',
        values: '20'
      },
      {
        name: 'Strength',
        values: '88'
      },
      {
        name: 'Magic',
        values: '12'
      },
      {
        name: 'Defense',
        values: '60'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '36'
      },
      {
        name: 'Accuracy',
        values: '150'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '8,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'areaconquest',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Stamina Spring x4'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Soul Spring x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Healing Spring x20'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '2-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Counter-Attack (fixed)', 'Evade \u0026 Counter', 'Magic Counter']
      },
      {
        name: 'Armor abilities',
        values: ['HP +10%', 'HP +20%', 'HP +30% (fixed)']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Ogre',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Vidatu: {
    sensorDescription: 'Immune to sensors',
    img: 'FFX-Imp.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '99'
      },
      {
        name: 'Mental Break',
        values: '80'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (200)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 5'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Osmose', 'Ultima']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '95,000'
      },
      {
        name: 'MP',
        values: '840'
      },
      {
        name: 'Strength',
        values: '12'
      },
      {
        name: 'Magic',
        values: '77'
      },
      {
        name: 'Defense',
        values: '230'
      },
      {
        name: 'Magic Defense',
        values: '230'
      },
      {
        name: 'Agility',
        values: '33'
      },
      {
        name: 'Accuracy',
        values: '110'
      },
      {
        name: 'Evasion',
        values: '80'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '10,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'speciesconquest',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Lightning Gem x4'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Mana Tonic'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'MP Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '2-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Double AP']
      },
      {
        name: 'Armor abilities',
        values: ['MP +10%', 'MP +20%', 'MP +30% (fixed)']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Imp',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Funguar: {
    sensorDescription: 'Occasionally counters with Pollen, which induces sleep.',
    img: 'Funguar-enemy-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Fire', 'Pollen']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '540'
      },
      {
        name: 'MP',
        values: '60'
      },
      {
        name: 'Strength',
        values: '1'
      },
      {
        name: 'Magic',
        values: '26'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '4'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '44'
      },
      {
        name: 'Gil',
        values: '42'
      }
    ],
    monsterArena: 'mushroomrockroad',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Silence Grenade'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Ether'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Sleeptouch', 'Strength +3%', 'Magic +3%']
      },
      {
        name: 'Armor abilities',
        values: ['Sleep Ward', 'MP +5%']
      },
      {
        name: 'Bribe',
        values: 'Turbo Ether x2'
      }
    ],
    species: 'Fungus',
    scanDescription:
      "Casts Fire, so it's best to silence it. Occassionally retaliates with sleep-inducing Pollen. Putting it to sleep is effective. Vulnerable to fire.",
    location: ['Mushroom Rock Road Djose Highroad'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '150%'
      },
      {
        name: 'Ice',
        values: '50%'
      },
      {
        name: 'Lightning',
        values: '50%'
      },
      {
        name: 'Water',
        values: '50%'
      },
      {
        name: 'Holy',
        values: '-'
      }
    ]
  },
  Alcyone: {
    sensorDescription: 'Aerial. Magic attacks are the way to go. Watch out for darkness.',
    img: 'Alcyone-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack only.']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '430'
      },
      {
        name: 'MP',
        values: '42'
      },
      {
        name: 'Strength',
        values: '16'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '1'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '15'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '310'
      },
      {
        name: 'Gil',
        values: '240'
      }
    ],
    monsterArena: 'bikanel',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Smoke Bomb'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Smoke Bomb x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Speed Sphere, Al Bhed Potion x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Speed Sphere, Al Bhed Potion x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Sensor', 'Piercing', 'Distill Speed*']
      },
      {
        name: 'Armor abilities',
        values: ['Dark Ward', 'Magic Def +5%']
      },
      {
        name: 'Bribe',
        values: 'Mega Phoenix x2'
      }
    ],
    species: 'Bird',
    scanDescription:
      "Aerial and hard to hit. Magic attacks are effective. It's vulnerable to fire, so use Fira to achieve Overkill. Attacks may inflict darkness.",
    location: ['Bikanel'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '150%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Abaddon: {
    sensorDescription: 'Immune to sensors',
    img: 'Varuna.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: 'Immune'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (200)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 5'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Firaga', 'Thundaga', 'Waterga', 'Blizzaga', 'Flare', 'Emblem of the Cosmos', 'Demi', "Pharaoh's Curse", 'Mana Focus']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '380,000'
      },
      {
        name: 'MP',
        values: '780'
      },
      {
        name: 'Strength',
        values: '40'
      },
      {
        name: 'Magic',
        values: '95'
      },
      {
        name: 'Defense',
        values: '180'
      },
      {
        name: 'Magic Defense',
        values: '160'
      },
      {
        name: 'Agility',
        values: '120'
      },
      {
        name: 'Accuracy',
        values: '130'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '8,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'areaconquest',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Purifying Salt x3'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Shining Gem x1'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Tablet x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '2-4 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Magic +5%', 'Magic +10%', 'Magic +20% (fixed)']
      },
      {
        name: 'Armor abilities',
        values: ['Magic Def +5%', 'Magic Def +10%', 'Magic Def +20% (fixed)']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Spellspinner',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Floating Eye': {
    sensorDescription: 'Aerial. Resistant to magic.',
    img: 'Floating Eye-enemy-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Stare']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '140'
      },
      {
        name: 'MP',
        values: '200'
      },
      {
        name: 'Strength',
        values: '1'
      },
      {
        name: 'Magic',
        values: '18'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '120'
      },
      {
        name: 'Agility',
        values: '10'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '11'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '21'
      },
      {
        name: 'Gil',
        values: '44'
      }
    ],
    monsterArena: 'miihenhighroad',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Echo Screen'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Musk'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Speed Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Speed Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-2 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Icestrike', 'Strength +5%', 'Magic +5%', 'Distill Speed']
      },
      {
        name: 'Armor abilities',
        values: ['Confuse Ward', 'MP +5%']
      },
      {
        name: 'Bribe',
        values: 'Musk x1'
      }
    ],
    species: 'Evil Eye',
    scanDescription: "Aerial and hard to hit. Its weakness is lightning, but it has high magic defense. Use Wakka's attack to defeat it.",
    location: ["Mi'ihen Highroad", 'Mushroom Rock Road'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '-'
      },
      {
        name: 'Ice',
        values: '-'
      },
      {
        name: 'Lightning',
        values: '150%'
      },
      {
        name: 'Water',
        values: '-'
      },
      {
        name: 'Holy',
        values: '-'
      }
    ]
  },
  Nebiros: {
    sensorDescription: 'Aerial. Vulnerable to Ice. Watch out for Poison.',
    img: 'Nebiros.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack only.']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '700'
      },
      {
        name: 'MP',
        values: '65'
      },
      {
        name: 'Strength',
        values: '22'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '22'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '16'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '480'
      },
      {
        name: 'Gil',
        values: '320'
      }
    ],
    monsterArena: 'calmlands',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Poison Fang'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Poison Fang x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Icestrike', 'Distill Speed']
      },
      {
        name: 'Armor abilities',
        values: ['Poison Ward']
      },
      {
        name: 'Bribe',
        values: 'Poison Fang x6'
      }
    ],
    species: 'Wasp',
    scanDescription:
      "Aerial and hard to hit. Magic attacks are effective. It's vulnerable to ice, so cast Blizzaga to achieve Overkill. Attacks may inflict poison.",
    location: ['Calm Lands'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '150%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Imp: {
    sensorDescription: 'Aerial. Resistant to magic.',
    img: 'FFX-Imp.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Thundaga']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '880'
      },
      {
        name: 'MP',
        values: '300'
      },
      {
        name: 'Strength',
        values: '1'
      },
      {
        name: 'Magic',
        values: '25'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '180'
      },
      {
        name: 'Agility',
        values: '24'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '16'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '770'
      },
      {
        name: 'Gil',
        values: '610'
      }
    ],
    monsterArena: 'stolenfaythcavern',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Lightning Gem'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Lightning Gem x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1 slot, 1 ability'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Lightningstrike', 'Distill Mana']
      },
      {
        name: 'Armor abilities',
        values: ['Lightning Ward', 'Lightningproof']
      },
      {
        name: 'Bribe',
        values: 'Lv.1 Key Sphere x4'
      }
    ],
    species: 'Imp',
    scanDescription:
      "Aerial and hard to hit. It's weak against water, but has high magic defense. The only attack it has is Thundaga, so inflict silence to leave it powerless.",
    location: ['Cavern of the Stolen Fayth', 'Mt. Gagazet'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '150%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Grendel: {
    sensorDescription: 'Inflict darkness to evade its attacks. Piercing weapons are the way to go.',
    img: 'Grendel.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '0'
      },
      {
        name: 'Sleep',
        values: '80'
      },
      {
        name: 'Darkness',
        values: '95'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '25'
      },
      {
        name: 'Petrify',
        values: '25'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: '25'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '50'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Flame Ball', 'Gore']
      },
      {
        name: 'Ronso Rage',
        values: 'Fire Breath'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '9,500'
      },
      {
        name: 'MP',
        values: '62'
      },
      {
        name: 'Strength',
        values: '41'
      },
      {
        name: 'Magic',
        values: '23'
      },
      {
        name: 'Defense',
        values: '50'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '31'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '2,600'
      },
      {
        name: 'Gil',
        values: '730'
      }
    ],
    monsterArena: 'mtgagazet',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Hi-Potion'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Mega Potion x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Ability Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Ability Sphere x2'
      },
      {
        name: 'Equipment drop',
        percentage: '50%',
        values: '2-4 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Silencetouch', 'Distill Ability']
      },
      {
        name: 'Armor abilities',
        values: ['HP +10%']
      },
      {
        name: 'Bribe',
        values: 'Mega Potion x60'
      }
    ],
    species: 'Ruminant',
    scanDescription:
      "Inflict darkness to hinder its attacks. Its Flame Ball is a powerful fire attack that hits all, but it needs to Charge before it's released. Use poison and piercing weapons. Kimahri can learn Fire Breath.",
    location: ['Mt. Gagazet', 'Zanarkand Ruins'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '50%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Larva: {
    sensorDescription: 'Casts Thundara on itself to replenish HP and grow even more powerful.',
    img: 'Larva-enemy-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '0'
      },
      {
        name: 'Sleep',
        values: '0'
      },
      {
        name: 'Darkness',
        values: '0'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Thundara']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '1,498'
      },
      {
        name: 'MP',
        values: '1,000'
      },
      {
        name: 'Strength',
        values: '10'
      },
      {
        name: 'Magic',
        values: '19'
      },
      {
        name: 'Defense',
        values: '40'
      },
      {
        name: 'Magic Defense',
        values: '45'
      },
      {
        name: 'Agility',
        values: '10'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '262'
      },
      {
        name: 'Gil',
        values: '350'
      }
    ],
    monsterArena: 'thunderplains',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Lunar Curtain'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Lunar Curtain x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Ability Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Ability Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '23.44%',
        values: '1-2 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Lightningstrike']
      },
      {
        name: 'Armor abilities',
        values: ['Lightning Ward']
      },
      {
        name: 'Bribe',
        values: 'Shining Thorn x10'
      }
    ],
    species: 'Larva',
    scanDescription:
      "When HP is halved, it casts Thundara on itself to recover HP and increase magic power. Silence it with Silence Attack. It's vulnerable to water, so Watera is the way to go.",
    location: ['Thunder Plains'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '-'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '-100%'
      },
      {
        name: 'Water',
        values: '150%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Fafnir: {
    sensorDescription: 'Immune to sensors',
    img: 'Nidhogg (FFX).jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '95'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '95'
      },
      {
        name: 'Mental Break',
        values: '95'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (200)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 4'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack (two versions)', 'Fire Breath', 'Ice Breath', 'Thunder Breath', 'Triple Attack']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '1,100,000'
      },
      {
        name: 'MP',
        values: '30'
      },
      {
        name: 'Strength',
        values: '76'
      },
      {
        name: 'Magic',
        values: '109'
      },
      {
        name: 'Defense',
        values: '30'
      },
      {
        name: 'Magic Defense',
        values: '130'
      },
      {
        name: 'Agility',
        values: '38'
      },
      {
        name: 'Accuracy',
        values: '160'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '10,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'speciesconquest',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Gold Hourglass x2'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Stamina Spring x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Light Curtain x20'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '2-4 slots, 1-4 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Firestrike', 'Lightningstrike (fixed)', 'Waterstrike', 'Icestrike']
      },
      {
        name: 'Armor abilities',
        values: ['Fire Eater', 'Water Eater', 'Ice Eater']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Drake',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '-100%'
      },
      {
        name: 'Ice',
        values: '-100%'
      },
      {
        name: 'Lightning',
        values: '-100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Vouivre: {
    sensorDescription: 'Covered with hard scales. Piercing weapons are the way to go.',
    img: 'Vouivre-enemy-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '0'
      },
      {
        name: 'Sleep',
        values: '0'
      },
      {
        name: 'Darkness',
        values: '0'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Fire Breath']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '255'
      },
      {
        name: 'MP',
        values: '22'
      },
      {
        name: 'Strength',
        values: '20'
      },
      {
        name: 'Magic',
        values: '21'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '120'
      },
      {
        name: 'Agility',
        values: '6'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '24'
      },
      {
        name: 'Gil',
        values: '60'
      }
    ],
    monsterArena: 'miihenhighroad',
    otherInformation: 'Enemy is Tough.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'None'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'None'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-2 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Icestrike']
      },
      {
        name: 'Armor abilities',
        values: ['Slow Ward', 'HP +5%']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Drake',
    scanDescription:
      "Covered with hard scales. Physical and magic defense are high, but it's weak against fire. Its attack may cause slow. Watch out for its ice-based Breath, which hits all.",
    location: ['Luca', "Mi'ihen Highroad (Oldroad)", 'Mushroom Rock Road'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Ahriman: {
    sensorDescription: 'Aerial. Resistant to magic. Watch out for confusion.',
    img: 'Ahriman-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Gaze Attack', 'Sonic Wave']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '2,800'
      },
      {
        name: 'MP',
        values: '400'
      },
      {
        name: 'Strength',
        values: '1'
      },
      {
        name: 'Magic',
        values: '38'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '180'
      },
      {
        name: 'Agility',
        values: '1'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '18'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '2,200'
      },
      {
        name: 'Gil',
        values: '650'
      }
    ],
    monsterArena: 'mtgagazet',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Musk x2'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Musk x3'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Speed Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Speed Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '2-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Icestrike', 'Strength +3%', 'Magic +3%', 'Distill Speed']
      },
      {
        name: 'Armor abilities',
        values: ['Confuse Ward']
      },
      {
        name: 'Bribe',
        values: 'Farplane Wind x1'
      }
    ],
    species: 'Evil Eye',
    scanDescription:
      'Aerial and hard to hit. It has high magic defense and no elemental weaknesses. Its Gaze may cause confusion. It also has Ultrasonics, which strikes all characters.',
    location: ['Mt. Gagazet', 'Zanarkand', 'Inside Sin'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Aerouge: {
    sensorDescription: 'Aerial. Resistant to magic.',
    img: 'Aerogue.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Thundara']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '200'
      },
      {
        name: 'MP',
        values: '220'
      },
      {
        name: 'Strength',
        values: '1'
      },
      {
        name: 'Magic',
        values: '16'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '120'
      },
      {
        name: 'Agility',
        values: '1'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '13'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '92'
      },
      {
        name: 'Gil',
        values: '144'
      }
    ],
    monsterArena: 'thunderplains',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Electro Marble'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Lightning Marble'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Lightningstrike', 'Distill Mana']
      },
      {
        name: 'Armor abilities',
        values: ['Lightning Ward', 'Lightningproof', 'Magic Def +5%']
      },
      {
        name: 'Bribe',
        values: 'Lightning Marble x1'
      }
    ],
    species: 'Imp',
    scanDescription:
      "Aerial and hard to hit. It's weak against water, but has high magic defence. The only attack it has is Thundara, so inflict silence to leave it powerless.",
    location: ['Thunder Plains'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '150%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Espada: {
    sensorDescription: 'Immune to sensors',
    img: 'Epaaj.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: '50'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom',
        values: 'Immune'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 4'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Blade Shower', 'Hades Claw']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '280,000'
      },
      {
        name: 'MP',
        values: '120'
      },
      {
        name: 'Strength',
        values: '44'
      },
      {
        name: 'Magic',
        values: '31'
      },
      {
        name: 'Defense',
        values: '100'
      },
      {
        name: 'Magic Defense',
        values: '160'
      },
      {
        name: 'Agility',
        values: '51'
      },
      {
        name: 'Accuracy',
        values: '100'
      },
      {
        name: 'Evasion',
        values: '12'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '8,000'
      },
      {
        name: 'Gil',
        values: 'N/A'
      }
    ],
    monsterArena: 'areaconquest',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Farplane Shadow x4'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Farplane Wind x1'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Rename Card x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '2-4 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Strength +5%', 'Strength +10%', 'Strength +20% (fixed)']
      },
      {
        name: 'Armor abilities',
        values: ['Defense +5%', 'Defense +10%', 'Defense +20% (fixed)']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Blade',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Chimera Brain': {
    sensorDescription: 'Darkness and silence work well. Vulnerable to Threaten.',
    img: 'Chimera Brain (FFX).jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '95'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: '0'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '25'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '25'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Thundara', 'Megiddo Flame', 'Aqua Breath']
      },
      {
        name: 'Ronso Rage',
        values: 'Aqua Breath'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '9,800'
      },
      {
        name: 'MP',
        values: '250'
      },
      {
        name: 'Strength',
        values: '34'
      },
      {
        name: 'Magic',
        values: '32'
      },
      {
        name: 'Defense',
        values: '10'
      },
      {
        name: 'Magic Defense',
        values: '10'
      },
      {
        name: 'Agility',
        values: '1'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '1,200'
      },
      {
        name: 'Gil',
        values: '1,000'
      }
    ],
    monsterArena: 'calmlands',
    otherInformation: 'Drop Ratio: 60/256 Ability Slots: 2-3 Abilities Attached: 1-3',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Ice Gem'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Lightning Gem x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Ability Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Ability Sphere x2 x1'
      },
      {
        name: 'Equipment drop',
        percentage: '23.44%',
        values: '2-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Magic +5%', 'Magic +10%', 'Distill Mana']
      },
      {
        name: 'Armor abilities',
        values: ['Magic Def +10%']
      },
      {
        name: 'Bribe',
        values: 'Lv. 4 Key Sphere x2'
      }
    ],
    species: 'Chimera',
    scanDescription:
      'The snake casts Thundara, the bull Assaults, the hawk uses Aqua Breath, and the lion uses Megiddo Flame, in that order. Vulnerable to Threaten, darkness, and silence. Kimahri can learn Aqua Breath.',
    location: ['Calm Lands'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '50%'
      },
      {
        name: 'Ice',
        values: '-'
      },
      {
        name: 'Lightning',
        values: '-'
      },
      {
        name: 'Water',
        values: '50%'
      },
      {
        name: 'Holy',
        values: '-'
      }
    ]
  },
  Hornet: {
    sensorDescription: 'Immune to sensors',
    img: 'Wasp (FFX).jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '0'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '95'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '95'
      },
      {
        name: 'Mental Break',
        values: '95'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (200)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 4'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Venomous Stab', 'Bewitching Stab', 'Curaga']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '620,000'
      },
      {
        name: 'MP',
        values: '180'
      },
      {
        name: 'Strength',
        values: '63'
      },
      {
        name: 'Magic',
        values: '88'
      },
      {
        name: 'Defense',
        values: '70'
      },
      {
        name: 'Magic Defense',
        values: '95'
      },
      {
        name: 'Agility',
        values: '102'
      },
      {
        name: 'Accuracy',
        values: '160'
      },
      {
        name: 'Evasion',
        values: '17'
      },
      {
        name: 'Luck',
        values: '33'
      },
      {
        name: 'AP (Overkill)',
        values: '10,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'speciesconquest',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Poison Fang x4'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Purifying Salt x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Accuracy Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '2-4 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Strength +5%', 'Strength +10%', 'Strength +20% (fixed)']
      },
      {
        name: 'Armor abilities',
        values: ['Defense +5%', 'Defense +10%', 'Defense +20% (fixed)']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Wasp',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Master Coeurl': {
    sensorDescription: 'Casts Drain, Confuse, and Blaster when low on HP.',
    img: 'Master Coeurl.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (2)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Blaster', 'Blizzaga', 'Confuse', 'Drain', 'Silence', 'Thundaga']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '13,000'
      },
      {
        name: 'MP',
        values: '540'
      },
      {
        name: 'Strength',
        values: '42'
      },
      {
        name: 'Magic',
        values: '38'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '40'
      },
      {
        name: 'Agility',
        values: '23'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '6,500'
      },
      {
        name: 'Gil',
        values: '2,030'
      }
    ],
    monsterArena: 'omegadungeon',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Farplane Shadow x2'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Farplane Shadow x4'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Lv. 1 Key Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Friend Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '23.44%',
        values: '2-4 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Deathtouch', 'Deathstrike', 'Strength +5%', 'Magic +5%', 'Magic +10%']
      },
      {
        name: 'Armor abilities',
        values: ['Death Ward', 'Deathproof', 'Curseproof', 'Defense +10%', 'Magic Def +10%']
      },
      {
        name: 'Bribe',
        values: 'Warp Sphere x1'
      }
    ],
    species: 'Coeurl',
    scanDescription:
      "High magic attack and defense. Casts Thundaga and Blizzaga. Also casts Drain and Confuse when HP is low. Beware of Blaster, since it's unblockable and causes instant death.",
    location: ['Omega Ruins'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '-'
      },
      {
        name: 'Ice',
        values: '0%'
      },
      {
        name: 'Lightning',
        values: '0%'
      },
      {
        name: 'Water',
        values: '-'
      },
      {
        name: 'Holy',
        values: '-'
      }
    ]
  },
  'Gemini (Sword)': {
    sensorDescription: 'Together they unleash Double Reaper. Focus your attacks to defeat one quickly.',
    img: 'Gemini ffX.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '80'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison (20)',
        values: '90'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (3)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Reaper', 'Double Reaper', 'Leaping Swing']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '36,000'
      },
      {
        name: 'MP',
        values: '1'
      },
      {
        name: 'Strength',
        values: '33'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '50'
      },
      {
        name: 'Magic Defense',
        values: '30'
      },
      {
        name: 'Agility',
        values: '21'
      },
      {
        name: 'Accuracy',
        values: '9'
      },
      {
        name: 'Evasion',
        values: '1'
      },
      {
        name: 'Luck',
        values: '0'
      },
      {
        name: 'AP (Overkill)',
        values: '7,800'
      },
      {
        name: 'Gil',
        values: '1,111'
      }
    ],
    monsterArena: 'insidesin',
    otherInformation: 'Enemy is Tough. Armored.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Light Curtain'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Light Curtain x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x2'
      },
      {
        name: 'Equipment drop',
        percentage: '31.25%',
        values: '2-4 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Strength +10%', 'Magic +10%']
      },
      {
        name: 'Armor abilities',
        values: ['SOS Regen', 'HP +10%']
      },
      {
        name: 'Bribe',
        values: 'Mana Tonic x10'
      }
    ],
    species: 'Iron Giant',
    scanDescription:
      'After receiving a certain amount of damage, they unleash a powerful synchronized attack, the Double Reaper. One absorbs lightning and fire, while the other absorbs water and ice.',
    location: ['Inside Sin', 'Omega Ruins'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '-100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '-100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Gemini (Club)': {
    sensorDescription: 'Together they unleash Double Reaper. Focus your attacks to defeat one quickly.',
    img: 'Gemini ffX.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '80'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison (20)',
        values: '90'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (3)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Reaper', 'Double Reaper', 'Leaping Swing']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '36,000'
      },
      {
        name: 'MP',
        values: '1'
      },
      {
        name: 'Strength',
        values: '33'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '50'
      },
      {
        name: 'Magic Defense',
        values: '30'
      },
      {
        name: 'Agility',
        values: '21'
      },
      {
        name: 'Accuracy',
        values: '9'
      },
      {
        name: 'Evasion',
        values: '1'
      },
      {
        name: 'Luck',
        values: '0'
      },
      {
        name: 'AP (Overkill)',
        values: '7,800'
      },
      {
        name: 'Gil',
        values: '1,111'
      }
    ],
    monsterArena: 'insidesin',
    otherInformation: 'Enemy is Tough. Armored.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Light Curtain'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Light Curtain x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x2'
      },
      {
        name: 'Equipment drop',
        percentage: '31.25%',
        values: '2-4 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Strength +10%', 'Magic +10%']
      },
      {
        name: 'Armor abilities',
        values: ['SOS Regen', 'HP +10%']
      },
      {
        name: 'Bribe',
        values: 'Mana Tonic x10'
      }
    ],
    species: 'Iron Giant',
    scanDescription:
      'After receiving a certain amount of damage, they unleash a powerful synchronized attack, the Double Reaper. One absorbs lightning and fire, while the other absorbs water and ice.',
    location: ['Inside Sin', 'Omega Ruins'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '-100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '-100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  'Iron Giant': {
    sensorDescription: 'Dark Buster is effective, but beware its Reaper attack.',
    img: 'Gemini (Blue)-enemy-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: '50'
      },
      {
        name: 'Darkness',
        values: '95'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Reaper']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '3,600'
      },
      {
        name: 'MP',
        values: '1'
      },
      {
        name: 'Strength',
        values: '30'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '7'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '800'
      },
      {
        name: 'Gil',
        values: '600'
      }
    ],
    monsterArena: 'thunderplains',
    otherInformation: 'Enemy is Tough.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Light Curtain'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Light Curtain'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x2'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x3'
      },
      {
        name: 'Equipment drop',
        percentage: '31.25%',
        values: '2-3 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Strength +5%', 'Strength +10%', 'Magic +5%', 'Magic +10%']
      },
      {
        name: 'Armor abilities',
        values: ['SOS Regen', 'HP +5%', 'HP +10%']
      },
      {
        name: 'Bribe',
        values: 'Stamina Tonic x1'
      }
    ],
    species: 'Iron Giant',
    scanDescription:
      'Targets character with lowest HP. Beware its Reaper attack, which hits all characters. No elemental weaknesses. Takes half damage from lightning. Use piercing weapons and Dark Buster.',
    location: ['Thunder Plains'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '50%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Tonberry: {
    sensorDescription: 'Advances closer four times. Defeat it before then, or else...',
    img: 'Tonberry-enemy-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: 'Immune'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ["Chef's Knife", 'Karma', 'Voodoo']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '13,500'
      },
      {
        name: 'MP',
        values: '1'
      },
      {
        name: 'Strength',
        values: '40'
      },
      {
        name: 'Magic',
        values: '43'
      },
      {
        name: 'Defense',
        values: '10'
      },
      {
        name: 'Magic Defense',
        values: '10'
      },
      {
        name: 'Agility',
        values: '14'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '6,500'
      },
      {
        name: 'Gil',
        values: '2,000'
      }
    ],
    monsterArena: 'stolenfaythcavern',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Hi-Potion'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Farplane Shadow'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Lv. 2 Key Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '50%',
        values: '2-3 slots, 0-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Deathtouch', 'Slowtouch']
      },
      {
        name: 'Armor abilities',
        values: ['Death Ward', 'No Encounters']
      },
      {
        name: 'Bribe',
        values: 'Amulet x2'
      }
    ],
    species: 'Tonberry',
    scanDescription:
      "After four waddles, he stabs with his Chef's Knife. His counter-attack Karma deals damage based on the number of enemies that character has defeated.",
    location: ['Cavern of the Stolen Fayth'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Barbatos: {
    sensorDescription:
      'Covered in thick armor. Armor Break works well, but watch out for a powerful counterattack. All of its attacks deal great damage, so beware.',
    img: 'Barbatos-enemy-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie*',
        values: '90'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '50'
      },
      {
        name: 'Mental Break',
        values: 'Immune'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (5)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 2'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Body Splash', 'Mortar']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '95,000'
      },
      {
        name: 'MP',
        values: '480'
      },
      {
        name: 'Strength',
        values: '42'
      },
      {
        name: 'Magic',
        values: '38'
      },
      {
        name: 'Defense',
        values: '90'
      },
      {
        name: 'Magic Defense',
        values: '15'
      },
      {
        name: 'Agility',
        values: '28'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '17,500'
      },
      {
        name: 'Gil',
        values: '1,550'
      }
    ],
    monsterArena: 'insidesin',
    otherInformation: 'Enemy is Tough.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Star Curtain'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Blessed Gem'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Return Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '50%',
        values: '2-4 slots, 1 ability'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing (any character)']
      },
      {
        name: 'Armor abilities',
        values: ['HP +20%']
      },
      {
        name: 'Bribe',
        values: 'Teleport Sphere x20'
      }
    ],
    species: 'Armor',
    scanDescription:
      'Covered in thick armor. Armor Break works well, but watch out for a powerful counter-attack. All of its attacks deal great damage, so beware.',
    location: ['Inside Sin'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Iguion: {
    sensorDescription: 'Very nimble. Resistant to magic. Watch out for petrification and silence.',
    img: 'Iguion (FFX).jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack only.']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '370'
      },
      {
        name: 'MP',
        values: '70'
      },
      {
        name: 'Strength',
        values: '23'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '120'
      },
      {
        name: 'Agility',
        values: '19'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '8'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '240'
      },
      {
        name: 'Gil',
        values: '138'
      }
    ],
    monsterArena: 'macalania',
    otherInformation: 'Attack may cause Silence or Petrify.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Soft'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Petrify Grenade'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Speed Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Icestrike', 'Distill Speed']
      },
      {
        name: 'Armor abilities',
        values: ['Slow Ward', 'Defense +5%']
      },
      {
        name: 'Bribe',
        values: 'Petrify Grenade x5'
      }
    ],
    species: 'Reptile',
    scanDescription:
      'Very nimble and hard to hit. Magic defense is also high. Takes only half damage from fire and water. Attacks may cause petrification and silence.',
    location: ['Macalania Woods'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '50%'
      },
      {
        name: 'Ice',
        values: '150%'
      },
      {
        name: 'Lightning',
        values: '-'
      },
      {
        name: 'Water',
        values: '50%'
      },
      {
        name: 'Holy',
        values: '-'
      }
    ]
  },
  Yowie: {
    sensorDescription: 'Very nimble. Resistant to magic. Watch out for petrification and silence.',
    img: 'Yowie (FFX).jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack only.']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '900'
      },
      {
        name: 'MP',
        values: '95'
      },
      {
        name: 'Strength',
        values: '26'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '180'
      },
      {
        name: 'Agility',
        values: '29'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '10'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '810'
      },
      {
        name: 'Gil',
        values: '480'
      }
    ],
    monsterArena: 'stolenfaythcavern',
    otherInformation: 'Attack may inflict Petrify or Silence.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Soft'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Petrify Grenade'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Speed Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Icestrike', 'Distill Speed']
      },
      {
        name: 'Armor abilities',
        values: ['Slow Ward']
      },
      {
        name: 'Bribe',
        values: 'Petrify Grenade x1'
      }
    ],
    species: 'Reptile',
    scanDescription:
      'Very nimble and hard to hit. Magic defense is also high. Takes only half damage from fire, lightning and water. Attacks may cause petrification and silence.',
    location: ['Cavern of the Stolen Fayth'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '50%'
      },
      {
        name: 'Ice',
        values: '150%'
      },
      {
        name: 'Lightning',
        values: '50%'
      },
      {
        name: 'Water',
        values: '50%'
      },
      {
        name: 'Holy',
        values: '-'
      }
    ]
  },
  Varuna: {
    sensorDescription: 'Resistant to all four elements.',
    img: 'Varuna.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: '80'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (7)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: 'Immune'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: [
          'Blizzaga',
          'Death',
          'Demi',
          'Dispel',
          'Emblem of Fate',
          'Firaga',
          'Haste',
          'Mana Focus',
          "Pharaoh's Curse",
          'Silence',
          'Thundaga',
          'Waterga'
        ]
      },
      {
        name: 'Ronso Rage',
        values: 'N/A'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '56,000'
      },
      {
        name: 'MP',
        values: '1'
      },
      {
        name: 'Strength',
        values: '13'
      },
      {
        name: 'Magic',
        values: '38'
      },
      {
        name: 'Defense',
        values: '50'
      },
      {
        name: 'Magic Defense',
        values: '10'
      },
      {
        name: 'Agility',
        values: '26'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '19,500'
      },
      {
        name: 'Gil',
        values: '1,780'
      }
    ],
    monsterArena: 'omegadungeon',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Farplane Wind'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Shining Gem'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Lv. 2 Key Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '50%',
        values: '3-4 slots, 0-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Magic +10%', 'Double Overdrive']
      },
      {
        name: 'Armor abilities',
        values: ['SOS Shell', 'Magic Def +10%']
      },
      {
        name: 'Bribe',
        values: 'Megalixir x20'
      }
    ],
    species: 'Spellspinner',
    scanDescription:
      "Casts Haste on himself and attacks with magic, so use Dispel on him. After his Mana Focus, he'll cast Emblem of Fate. You can reduce damage with Shell, but he can cast Dispel on you, too.",
    location: ['Omega Ruins', 'Inside Sin'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '50%'
      },
      {
        name: 'Ice',
        values: '50%'
      },
      {
        name: 'Lightning',
        values: '50%'
      },
      {
        name: 'Water',
        values: '50%'
      },
      {
        name: 'Holy',
        values: '150%'
      }
    ]
  },
  'White Element': {
    sensorDescription: 'Ice elemental. Vulnerable to opposing element.',
    img: 'White element ffx.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Blizzard']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '390'
      },
      {
        name: 'MP',
        values: '120'
      },
      {
        name: 'Strength',
        values: '1'
      },
      {
        name: 'Magic',
        values: '22'
      },
      {
        name: 'Defense',
        values: '120'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '5'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '20'
      },
      {
        name: 'Gil',
        values: '48'
      }
    ],
    monsterArena: 'miihenhighroad',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Antarctic Wind'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Antarctic Wind x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-2 slots, 0-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Icestrike', 'Distill Mana']
      },
      {
        name: 'Armor abilities',
        values: ['Ice Ward', 'Iceproof']
      },
      {
        name: 'Bribe',
        values: 'Arctic Wind x7'
      }
    ],
    species: 'Elemental',
    scanDescription: 'Casts Blizzard. Physical attacks hardly hurt it. Absorbs ice, so Fire is the way to go.',
    location: ["Mi'ihen Highroad"],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '150%'
      },
      {
        name: 'Ice',
        values: '-100%'
      },
      {
        name: 'Lightning',
        values: '50%'
      },
      {
        name: 'Water',
        values: '50%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Raptor: {
    sensorDescription: 'Very nimble. Resistant to magic.',
    img: 'Raptor (FFX).jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack only']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '200'
      },
      {
        name: 'MP',
        values: '45'
      },
      {
        name: 'Strength',
        values: '18'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '120'
      },
      {
        name: 'Agility',
        values: '14'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '7'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '32'
      },
      {
        name: 'Gil',
        values: '48'
      }
    ],
    monsterArena: 'mushroomrockroad',
    otherInformation: 'Attack  may cause Petrify or Silence.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Soft'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Petrify Grenade'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Speed Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-2 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Distill Speed']
      },
      {
        name: 'Armor abilities',
        values: ['Slow Ward', 'Defense +3%']
      },
      {
        name: 'Bribe',
        values: 'Petrify Grenade x3'
      }
    ],
    species: 'Reptile',
    scanDescription:
      'Very nimble and hard to hit. Magic defense is also high. Defeat it quickly to avoid damage. Takes only half damage from fire and lightning, but is vulnerable to ice.',
    location: ['Mushroom Rock Road', 'Djose Highroad'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '50%'
      },
      {
        name: 'Ice',
        values: '150%'
      },
      {
        name: 'Lightning',
        values: '50%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Melusine: {
    sensorDescription: 'Very nimble. Resistant to magic. Watch out for petrification and silence.',
    img: 'MelusineFFX.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack only.']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '265'
      },
      {
        name: 'MP',
        values: '65'
      },
      {
        name: 'Strength',
        values: '20'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '120'
      },
      {
        name: 'Agility',
        values: '17'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '92'
      },
      {
        name: 'Gil',
        values: '108'
      }
    ],
    monsterArena: 'thunderplains',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Soft'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Petrify Grenade'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Speed Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Icestrike', 'Distill Speed']
      },
      {
        name: 'Armor abilities',
        values: ['Slow Ward', 'Defense +3%']
      },
      {
        name: 'Bribe',
        values: 'Petrify Grenade x4'
      }
    ],
    species: 'Reptile',
    scanDescription:
      'Very nimble and hard to hit. Magic defense is also high. Takes only half damage from fire and lightning. Attacks may cause petrification and silence.',
    location: ['Thunder Plains'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '50%'
      },
      {
        name: 'Ice',
        values: '150%'
      },
      {
        name: 'Lightning',
        values: '50%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Achelous: {
    sensorDescription: 'Watch out when it starts glowing. It releases Sonic Wave after the third pulse.',
    img: 'Achelous (FFX).jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '0'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '0'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Sonic Wave']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '5,100'
      },
      {
        name: 'MP',
        values: '85'
      },
      {
        name: 'Strength',
        values: '33'
      },
      {
        name: 'Magic',
        values: '52'
      },
      {
        name: 'Defense',
        values: '10'
      },
      {
        name: 'Magic Defense',
        values: '20'
      },
      {
        name: 'Agility',
        values: '1'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '730'
      },
      {
        name: 'Gil',
        values: '420'
      }
    ],
    monsterArena: 'mtgagazet',
    otherInformation: 'Fought underwater.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Water Gem x2'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Healing Spring'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '23.44%',
        values: '2-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Strength +5%', 'Magic +5%', 'Magic +10%']
      },
      {
        name: 'Armor abilities',
        values: ['MP +10%', 'Auto-Med']
      },
      {
        name: 'Bribe',
        values: 'Healing Spring x16'
      }
    ],
    species: 'Haizhe',
    scanDescription:
      'It starts glowing when hit. After the 3rd pulse, it attacks with a Sonic Wave. Put it to sleep to prevent it from glowing. It takes no damage from water, but is weak against lightning.',
    location: ['Gagazet Caves'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '50%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '150%'
      },
      {
        name: 'Water',
        values: '0%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Coeurl: {
    sensorDescription: 'Casts Drain and Blaster when low on HP.',
    img: 'Coeurl-enemy-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '95'
      },
      {
        name: 'Sleep',
        values: '95'
      },
      {
        name: 'Darkness',
        values: '0'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '25'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '25'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: '25'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Blaster', 'Blizzaga', 'Blizzara', 'Drain', 'Silence', 'Thundara']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '6,000'
      },
      {
        name: 'MP',
        values: '480'
      },
      {
        name: 'Strength',
        values: '38'
      },
      {
        name: 'Magic',
        values: '26'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '40'
      },
      {
        name: 'Agility',
        values: '1'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '1,300'
      },
      {
        name: 'Gil',
        values: '1,100'
      }
    ],
    monsterArena: 'calmlands',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Mana Spring'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Mana Spring'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Mana Sphere x2 x1'
      },
      {
        name: 'Equipment drop',
        percentage: '23.44%',
        values: '2-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Deathstrike', 'Strength +5%', 'Magic +5%', 'Magic +10%']
      },
      {
        name: 'Armor abilities',
        values: ['Death Ward', 'Defense +10%', 'Magic Def +10%']
      },
      {
        name: 'Bribe',
        values: 'Friend Sphere x3'
      }
    ],
    species: 'Coeurl',
    scanDescription:
      "High magic attack and defence. Casts Thundara and Blizzara. Also casts Drain when HP is low. Beware of Blaster, since it's unblockable and causes petrification.",
    location: ['Calm Lands Cavern of the Stolen Fayth'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '-'
      },
      {
        name: 'Ice',
        values: '50%'
      },
      {
        name: 'Lightning',
        values: '50%'
      },
      {
        name: 'Water',
        values: '-'
      },
      {
        name: 'Holy',
        values: '-'
      }
    ]
  },
  'Malboro Menace': {
    sensorDescription: 'Immune to sensors',
    img: 'Malboro Menace-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: 'Immune'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (200)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 5'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Chow Time', 'Gastric Juice Blast', 'Mega Gastric Juice', 'Putrid Breath']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '640,000'
      },
      {
        name: 'MP',
        values: '200'
      },
      {
        name: 'Strength',
        values: '60'
      },
      {
        name: 'Magic',
        values: '53'
      },
      {
        name: 'Defense',
        values: '24'
      },
      {
        name: 'Magic Defense',
        values: '63'
      },
      {
        name: 'Agility',
        values: '34'
      },
      {
        name: 'Accuracy',
        values: '120'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '8,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'areaconquest',
    otherInformation: 'Always ambushes the party.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Remedy x4'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Mana Spring x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Tonic x2'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '3-4 slots, 1-4 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Darkstrike', 'Silencestrike', 'Sleepstrike', 'Poisonstrike (fixed)', 'Stonestrike', 'Zombiestrike', 'Slowstrike']
      },
      {
        name: 'Armor abilities',
        values: ['Darkproof', 'Silenceproof', 'Sleepproof', 'Poisonproof (fixed)', 'Stoneproof', 'Zombieproof', 'Slowproof']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Malboro',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '150%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '-100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Tanket: {
    sensorDescription: 'Immune to sensors',
    img: 'Murussu.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '50'
      },
      {
        name: 'Mental Break',
        values: '99'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (200)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 5'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Rush Attack']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '900,000'
      },
      {
        name: 'MP',
        values: '0'
      },
      {
        name: 'Strength',
        values: '103'
      },
      {
        name: 'Magic',
        values: '3'
      },
      {
        name: 'Defense',
        values: '100'
      },
      {
        name: 'Magic Defense',
        values: '250'
      },
      {
        name: 'Agility',
        values: '41'
      },
      {
        name: 'Accuracy',
        values: '100'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '10,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'speciesconquest',
    otherInformation: 'Enemy is Tough.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Light Curtain x4'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Lunar Curtain x4'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Defense Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '2-4 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Strength +5%', 'Strength +10%', 'Strength +20% (fixed)']
      },
      {
        name: 'Armor abilities',
        values: ['Defense +5%', 'Defense +10%', 'Defense +20% (fixed)']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Helm',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Bomb: {
    sensorDescription: 'Retaliates with Self-Destruct when attacked three times.',
    img: 'FFX bomb render.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Bash', 'Fire', 'Self-Destruct', 'Grow 1/2']
      },
      {
        name: 'Ronso Rage',
        values: 'Self-Destruct'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '850'
      },
      {
        name: 'MP',
        values: '30'
      },
      {
        name: 'Strength',
        values: '19'
      },
      {
        name: 'Magic',
        values: '20'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '11'
      },
      {
        name: 'Accuracy',
        values: '1'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '22'
      },
      {
        name: 'Gil',
        values: '70'
      }
    ],
    monsterArena: 'miihenhighroad',
    otherInformation: 'Retaliates with Self-Destruct when attacked three times.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Bomb Fragment x2'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Bomb Fragment x3'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '15.63%',
        values: '1-2 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: [
          'NTSC: Piercing (only Auron and Kimahri)',
          'Firestrike PAL: Piercing (only Auron and Kimahri)',
          'Firestrike',
          'Distill Power'
        ]
      },
      {
        name: 'Armor abilities',
        values: ['Fire Ward']
      },
      {
        name: 'Bribe',
        values: 'Bomb Core x16'
      }
    ],
    species: 'Bomb',
    scanDescription:
      "Retaliates with Self-Destruct against whoever attacks it a third time. Use NulBlaze if you can't defeat it before then. Vulnerable to ice, so use Blizzard. Kimahri can learn Self-Destruct.",
    location: ["Mi'ihen Highroad Mushroom Rock Road"],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '-100%'
      },
      {
        name: 'Ice',
        values: '150%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Neslug: {
    sensorDescription: 'Immune to sensors',
    img: 'Neslug-ffx-enemy.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '50'
      },
      {
        name: 'Sleep',
        values: '0'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: 'Immune'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom',
        values: 'Immune'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 4'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Megaton', 'Slime', 'Curaga', 'Broken Shell', 'Hides in Shell', 'Emerges From Shell']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '4,000,000'
      },
      {
        name: 'MP',
        values: '999'
      },
      {
        name: 'Strength',
        values: '130'
      },
      {
        name: 'Magic',
        values: '130'
      },
      {
        name: 'Defense',
        values: '80'
      },
      {
        name: 'Magic Defense',
        values: '80'
      },
      {
        name: 'Agility',
        values: '43'
      },
      {
        name: 'Accuracy',
        values: '1'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '20'
      },
      {
        name: 'AP (Overkill)',
        values: '50,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'original',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: "Gambler's Spirit"
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Friend Sphere'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Pendulum x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '2-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing (fixed drop for Auron and Kimahri)', 'Triple AP']
      },
      {
        name: 'Armor abilities',
        values: ['HP +10%', 'HP +20%', 'HP +30% (fixed)']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Hermit',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Zaurus: {
    sensorDescription: 'Immune to sensors',
    img: 'Zaurus.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack only.']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '7,850'
      },
      {
        name: 'MP',
        values: '1'
      },
      {
        name: 'Strength',
        values: '38'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '30'
      },
      {
        name: 'Magic Defense',
        values: '120'
      },
      {
        name: 'Agility',
        values: '46'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '14'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '5,000'
      },
      {
        name: 'Gil',
        values: '950'
      }
    ],
    monsterArena: 'omegadungeon',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Petrify Grenade'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Petrify Grenade'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Speed Sphere x2'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Speed Sphere x2'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '2-4 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Icestrike', 'Distill Speed']
      },
      {
        name: 'Armor abilities',
        values: ['Slow Ward', 'Slowproof']
      },
      {
        name: 'Bribe',
        values: 'Rename Card x10'
      }
    ],
    species: 'Reptile',
    scanDescription: 'Immune to scans',
    location: ['Omega Ruins'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Cactuar: {
    sensorDescription: "You'll get a treat if you can defeat it before it runs away.",
    img: 'Cactuar FFX.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: 'Immune'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (2)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: 'Immune'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 2'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', '10', '000 Needles', 'Run Away']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '800'
      },
      {
        name: 'MP',
        values: '1'
      },
      {
        name: 'Strength',
        values: '23'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '255'
      },
      {
        name: 'Agility',
        values: '24'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '20'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '8,000'
      },
      {
        name: 'Gil',
        values: '1,500'
      }
    ],
    monsterArena: 'bikanel',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Chocobo Feather'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Chocobo Wing'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Speed Sphere x2'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Speed Sphere x3'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '1-3 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Initiative']
      },
      {
        name: 'Armor abilities',
        values: ['HP Stroll', 'MP Stroll', 'HP +10%']
      },
      {
        name: 'Bribe',
        values: 'Cannot bribe'
      }
    ],
    species: 'Cactuar',
    scanDescription:
      'Its 10000 Needles inflict 10000 points of damage. Resistant to both physical and magical attacks. Runs away when HP is low. Hard to defeat, but worth a lot of AP.',
    location: ['Bikanel'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Chimerageist: {
    sensorDescription: 'Immune to sensors',
    img: 'Chimera Brain (FFX).jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '50'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '50'
      },
      {
        name: 'Mental Break',
        values: '50'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (200)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: 'Immune'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: 'Immune'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 4'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: 'Immune'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Megiddo Flame', 'Aqua Breath', 'Thundara', 'Blizzara']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '120,000'
      },
      {
        name: 'MP',
        values: '30'
      },
      {
        name: 'Strength',
        values: '66'
      },
      {
        name: 'Magic',
        values: '68'
      },
      {
        name: 'Defense',
        values: '10'
      },
      {
        name: 'Magic Defense',
        values: '10'
      },
      {
        name: 'Agility',
        values: '29'
      },
      {
        name: 'Accuracy',
        values: '180'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '8,000'
      },
      {
        name: 'Gil',
        values: '0'
      }
    ],
    monsterArena: 'areaconquest',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Mana Spring x2'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Stamina Spring x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Return Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Dark Matter x1'
      },
      {
        name: 'Equipment drop',
        percentage: '100%',
        values: '2-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Firestrike', 'Waterstrike', 'Icestrike']
      },
      {
        name: 'Armor abilities',
        values: ['Fire Eater', 'Water Eater', 'Ice Eater']
      },
      {
        name: 'Bribe',
        values: 'None'
      }
    ],
    species: 'Chimera',
    scanDescription: 'Immune to scans',
    location: ['Monster Arena'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '0%'
      },
      {
        name: 'Ice',
        values: '0%'
      },
      {
        name: 'Lightning',
        values: '0%'
      },
      {
        name: 'Water',
        values: '0%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Splasher: {
    sensorDescription: 'Watch out for Self-Destruct.',
    img: 'Splasher.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Self-Destruct']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '200'
      },
      {
        name: 'MP',
        values: '2'
      },
      {
        name: 'Strength',
        values: '14'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '20'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '15'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '140'
      },
      {
        name: 'Gil',
        values: '100'
      }
    ],
    monsterArena: 'mtgagazet',
    otherInformation: 'Fought underwater.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Grenade'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Frag Grenade'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1 slot, 0-1 ability'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Waterstrike', 'Strength +5%', 'Magic +5%']
      },
      {
        name: 'Armor abilities',
        values: ['HP +5%', 'Defense +3%']
      },
      {
        name: 'Bribe',
        values: 'Dragon Scale x1'
      }
    ],
    species: 'Unspecified',
    scanDescription: 'When defeated, it sometimes inflicts damage on its attacker with Self-Destruct.',
    location: ['Mt. Gagazet Cavern'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '50%'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '150%'
      },
      {
        name: 'Water',
        values: '0%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Spirit: {
    sensorDescription: 'Immune to sensors',
    img: 'Spirit.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (3)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: 'Immune'
      },
      {
        name: 'Scan',
        values: 'Immune'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Blizzara', 'Fira', 'Poison Mist', 'Thundaga', 'Thundara', 'Watera', 'White Wind']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '10,000'
      },
      {
        name: 'MP',
        values: '700'
      },
      {
        name: 'Strength',
        values: '1'
      },
      {
        name: 'Magic',
        values: '42'
      },
      {
        name: 'Defense',
        values: '60'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '24'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '4,300'
      },
      {
        name: 'Gil',
        values: '1,300'
      }
    ],
    monsterArena: 'omegadungeon',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Stamina Spring'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Stamina Spring x2'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Friend Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '3-4 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Sleeptouch', 'Sleepstrike']
      },
      {
        name: 'Armor abilities',
        values: ['Sleepproof', 'Magic Def +20%']
      },
      {
        name: 'Bribe',
        values: 'Twin Stars x10'
      }
    ],
    species: 'Larva',
    scanDescription: 'Immune to scans',
    location: ['Omega Ruins'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '50%'
      },
      {
        name: 'Ice',
        values: '50%'
      },
      {
        name: 'Lightning',
        values: '-100%'
      },
      {
        name: 'Water',
        values: '50%'
      },
      {
        name: 'Holy',
        values: '50%'
      }
    ]
  },
  Wasp: {
    sensorDescription: 'Aerial. Vulnerable to ice. Watch out for poison.',
    img: 'Wasp (FFX).jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack only.']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '360'
      },
      {
        name: 'MP',
        values: '30'
      },
      {
        name: 'Strength',
        values: '17'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '18'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '13'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '240'
      },
      {
        name: 'Gil',
        values: '142'
      }
    ],
    monsterArena: 'macalania',
    otherInformation: 'Attack may cause Poison.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Hi-Potion'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Poison Fang'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Speed Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Speed Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-3 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Icestrike', 'Distill Speed']
      },
      {
        name: 'Armor abilities',
        values: ['Poison Ward', 'MP +10%']
      },
      {
        name: 'Bribe',
        values: 'Poison Fang x3'
      }
    ],
    species: 'Wasp',
    scanDescription:
      "Aerial and hard to hit. Magic attacks are effective. It's vulnerable to ice, so cast Blizzara to achieve Overkill. Attacks may inflict poison.",
    location: ['Macalania Woods'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '150%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Raldo: {
    sensorDescription: 'Covered by a hard shell. Piercing weapons are the way to go.',
    img: 'Raldo (FFX).jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack only.']
      },
      {
        name: 'Ronso Rage',
        values: 'None'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '240'
      },
      {
        name: 'MP',
        values: '10'
      },
      {
        name: 'Strength',
        values: '19'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '120'
      },
      {
        name: 'Agility',
        values: '5'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '20'
      },
      {
        name: 'Gil',
        values: '42'
      }
    ],
    monsterArena: 'miihenhighroad',
    otherInformation: 'Armored.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Potion'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Hypello Potion'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-2 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Icestrike', 'Distill Power']
      },
      {
        name: 'Armor abilities',
        values: ['Berserk Ward', 'Defense +3%']
      },
      {
        name: 'Bribe',
        values: 'Hypello Potion x10'
      }
    ],
    species: 'Helm',
    scanDescription:
      'Covered by a hard shell. Slow-moving, but has high physical and magic defense. Vulnerable to ice. Falls easily to piercing weapons. Have Auron slice it down the middle.',
    location: ["Mi'ihen Highroad"],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '100%'
      },
      {
        name: 'Ice',
        values: '150%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: '100%'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  },
  Dingo: {
    sensorDescription: 'Very nimble. Resistant to magic.',
    img: 'Dingo-ffx-enemy.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: '20'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack only.']
      },
      {
        name: 'Ronso Rage',
        values: 'N/A'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '125'
      },
      {
        name: 'MP',
        values: '10'
      },
      {
        name: 'Strength',
        values: '13'
      },
      {
        name: 'Magic',
        values: '1'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '120'
      },
      {
        name: 'Agility',
        values: '1'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '5'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '2'
      },
      {
        name: 'Gil',
        values: '15'
      }
    ],
    monsterArena: 'besaid',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Potion'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Sleeping Powder'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Power Sphere x1'
      },
      {
        name: 'Equipment drop',
        percentage: '3.13%',
        values: '1-2 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Firestrike', 'Lightningstrike', 'Waterstrike', 'Icestrike', 'Distill Power']
      },
      {
        name: 'Armor abilities',
        values: ['Silence Ward', 'Sleep Ward', 'Magic Def +3%']
      },
      {
        name: 'Bribe',
        values: 'Sleeping Powder x1'
      }
    ],
    species: 'Lupine',
    scanDescription:
      'Very nimble and hard to hit. Magic defense is also high. Try to defeat it quickly to avoid damage. Attack swiftly with Tidus.',
    location: ['Besaid'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: '150%'
      },
      {
        name: 'Ice',
        values: '-'
      },
      {
        name: 'Lightning',
        values: '-'
      },
      {
        name: 'Water',
        values: '-'
      },
      {
        name: 'Holy',
        values: '-'
      }
    ]
  },
  Wraith: {
    sensorDescription: '',
    img: 'Wraith.jpg',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: 'Immune'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: 'Immune'
      },
      {
        name: 'Poison',
        values: 'Immune'
      },
      {
        name: 'Petrify',
        values: 'Immune'
      },
      {
        name: 'Slow',
        values: 'Immune'
      },
      {
        name: 'Zombie',
        values: 'Immune'
      },
      {
        name: 'Power Break',
        values: 'Immune'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: 'Immune'
      },
      {
        name: 'Mental Break',
        values: 'Immune'
      },
      {
        name: 'Threaten',
        values: 'Immune'
      },
      {
        name: 'Death',
        values: 'Immune'
      },
      {
        name: 'Provoke',
        values: 'Immune'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Blizzaga', 'Death', 'Doom', 'Firaga', 'Thundaga', 'Waterga']
      },
      {
        name: 'Ronso Rage',
        values: 'Doom'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '22,222'
      },
      {
        name: 'MP',
        values: '3,500'
      },
      {
        name: 'Strength',
        values: '1'
      },
      {
        name: 'Magic',
        values: '24'
      },
      {
        name: 'Defense',
        values: '150'
      },
      {
        name: 'Magic Defense',
        values: '30'
      },
      {
        name: 'Agility',
        values: '25'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '3,100'
      },
      {
        name: 'Gil',
        values: '1,070'
      }
    ],
    monsterArena: 'insidesin',
    otherInformation: 'Affinities to Fire, Ice, Lightning, and Water vary with each Wraith.',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Farplane Shadow'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Farplane Wind'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Mana Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Mana Sphere x2'
      },
      {
        name: 'Equipment drop',
        percentage: '15.63%',
        values: '2-4 slots, 1-3 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Magic +5%', 'Magic +10%', 'Distill Mana']
      },
      {
        name: 'Armor abilities',
        values: ['MP +10%', 'No Encounters']
      },
      {
        name: 'Bribe',
        values: 'Farplane Wind x60'
      }
    ],
    species: 'Revenant',
    scanDescription: '',
    location: ['Inside Sin', 'Omega Ruins'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: 'Varies'
      },
      {
        name: 'Ice',
        values: 'Varies'
      },
      {
        name: 'Lightning',
        values: 'Varies'
      },
      {
        name: 'Water',
        values: 'Varies'
      },
      {
        name: 'Holy',
        values: '150%'
      }
    ]
  },
  Chimera: {
    sensorDescription: 'Darkness and silence work well. Vulnerable to Threaten.',
    img: 'Chimera-enemy-ffx.png',
    statusesAndImmunities: [
      {
        name: 'Silence',
        values: '20'
      },
      {
        name: 'Sleep',
        values: 'Immune'
      },
      {
        name: 'Darkness',
        values: '20'
      },
      {
        name: 'Poison',
        percentage: '25%',
        values: '0'
      },
      {
        name: 'Petrify',
        values: '0'
      },
      {
        name: 'Slow',
        values: '0'
      },
      {
        name: 'Zombie',
        values: '0'
      },
      {
        name: 'Power Break',
        values: '0'
      },
      {
        name: 'Magic Break',
        values: '0'
      },
      {
        name: 'Armor Break',
        values: '0'
      },
      {
        name: 'Mental Break',
        values: '0'
      },
      {
        name: 'Threaten',
        values: '0'
      },
      {
        name: 'Death',
        values: '0'
      },
      {
        name: 'Provoke',
        values: '0'
      },
      {
        name: 'Doom (1)',
        values: '0'
      },
      {
        name: 'Nul',
        values: '0'
      },
      {
        name: 'Shell',
        values: '0'
      },
      {
        name: 'Protect',
        values: '0'
      },
      {
        name: 'Reflect',
        values: '0'
      },
      {
        name: 'Haste',
        values: '0'
      },
      {
        name: 'Demi',
        values: '0'
      },
      {
        name: 'Regen',
        values: '0'
      },
      {
        name: 'Distill',
        values: '0'
      },
      {
        name: 'Sensor',
        values: '0'
      },
      {
        name: 'Scan',
        values: '0'
      },
      {
        name: 'Bribe',
        values: '0'
      },
      {
        name: 'Delay',
        values: '0'
      },
      {
        name: 'Zanmato',
        values: 'Lv. 1'
      },
      {
        name: 'Berserk',
        values: '0'
      },
      {
        name: 'Capture',
        values: '0'
      },
      {
        name: 'Physical',
        values: '0'
      },
      {
        name: 'Magical',
        values: '0'
      }
    ],
    abilities: [
      {
        name: 'Abilities',
        values: ['Physical attack', 'Thundara', 'Megiddo Flame', 'Aqua Breath', 'Thundaga*']
      },
      {
        name: 'Ronso Rage',
        values: 'Aqua Breath'
      }
    ],
    stats: [
      {
        name: 'HP',
        values: '5,250'
      },
      {
        name: 'MP',
        values: '130'
      },
      {
        name: 'Strength',
        values: '25'
      },
      {
        name: 'Magic',
        values: '22'
      },
      {
        name: 'Defense',
        values: '1'
      },
      {
        name: 'Magic Defense',
        values: '1'
      },
      {
        name: 'Agility',
        values: '1'
      },
      {
        name: 'Accuracy',
        values: '0'
      },
      {
        name: 'Evasion',
        values: '0'
      },
      {
        name: 'Luck',
        values: '15'
      },
      {
        name: 'AP (Overkill)',
        values: '1,220'
      },
      {
        name: 'Gil',
        values: '970'
      }
    ],
    monsterArena: 'macalania',
    otherInformation: 'N/A',
    items: [
      {
        name: 'Common steal',
        percentage: '75%',
        values: 'Arctic Wind'
      },
      {
        name: 'Rare steal',
        percentage: '25%',
        values: 'Lightning Marble'
      },
      {
        name: 'Common drop',
        percentage: '87.5%',
        values: 'Ability Sphere x1'
      },
      {
        name: 'Rare drop',
        percentage: '12.5%',
        values: 'Ability Sphere x2 x1'
      },
      {
        name: 'Equipment drop',
        percentage: '23.44%',
        values: '1-2 slots, 1-2 abilities'
      },
      {
        name: 'Weapon abilities',
        values: ['Piercing', 'Magic +5%', 'Magic +10%', 'Distil Mana']
      },
      {
        name: 'Armor abilities',
        values: ['Magic Def +10%']
      },
      {
        name: 'Bribe',
        values: 'Mana Tablet x10'
      }
    ],
    species: 'Chimera',
    scanDescription:
      'The snake casts Thundara, the bull Assaults, the hawk uses Aqua Breath, and the lion uses Megiddo Flame, in that order. Vulnerable to Threaten, darkness, and silence. Kimahri can learn Aqua Breath.',
    location: ['Macalania Woods Home'],
    elementalAffinities: [
      {
        name: 'Fire',
        values: 'Resist'
      },
      {
        name: 'Ice',
        values: '100%'
      },
      {
        name: 'Lightning',
        values: '100%'
      },
      {
        name: 'Water',
        values: 'Resist'
      },
      {
        name: 'Holy',
        values: '100%'
      }
    ]
  }
};
