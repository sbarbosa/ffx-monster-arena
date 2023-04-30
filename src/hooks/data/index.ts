import { monsters } from './_monsters';

type Location = { id: string; name: string };

export const locations: Location[] = [
  { id: 'besaid', name: 'Besaid' },
  { id: 'kilika', name: 'Kilika' },
  { id: 'miihenhighroad', name: "Mi'ihen Highroad" },
  { id: 'mushroomrockroad', name: 'Mushroom Rock Road' },
  { id: 'djoseroad', name: 'Djose Road' },
  { id: 'thunderplains', name: 'Thunder Plains' },
  { id: 'macalania', name: 'Macalania' },
  { id: 'bikanel', name: 'Bikanel' },
  { id: 'calmlands', name: 'Calm Lands' },
  { id: 'stolenfaythcavern', name: 'Stolen Fayth Cavern' },
  { id: 'mtgagazet', name: 'Mt. Gagazet' },
  { id: 'insidesin', name: 'Inside Sin' },
  { id: 'omegadungeon', name: 'Omega Dungeon' },
  { id: 'areaconquest', name: 'Area Conquest' },
  { id: 'speciesconquest', name: 'Species Conquest' },
  { id: 'original', name: 'Original' }
];

export const breedLocations = ['areaconquest', 'speciesconquest', 'original'];

type Conquests = { [location: string]: string[] };

export const conquests: Conquests = {
  besaid: ['Dingo', 'Condor', 'Water Flan'],
  kilika: ['Dinonix', 'Killer Bee', 'Yellow Element', 'Ragora'],
  miihenhighroad: ["Mi'ihen Fang", 'Ipiria', 'Floating Eye', 'White Element', 'Raldo', 'Vouivre', 'Bomb', 'Dual Horn', 'Thunder Flan'],
  mushroomrockroad: ['Raptor', 'Gandarewa', 'Thunder Flan', 'Red Element', 'Lamashtu', 'Funguar', 'Garuda'],
  djoseroad: ['Garm', 'Simurgh', 'Bite Bug', 'Snow Flan', 'Bunyip', 'Basilisk', 'Ochu', 'Raptor', 'Gandarewa', 'Lamashtu', 'Funguar'],
  thunderplains: ['Melusine', 'Aerouge', 'Buer', 'Gold Element', 'Kusariqqu', 'Larva', 'Iron Giant', 'Qactuar'],
  macalania: ['Snow Wolf', 'Iguion', 'Wasp', 'Evil Eye', 'Ice Flan', 'Blue Element', 'Murussu', 'Mafdet', 'Xiphos', 'Chimera'],
  bikanel: ['Sand Wolf', 'Alcyone', 'Mushussu', 'Zu', 'Sand Worm', 'Cactuar'],
  calmlands: ['Skoll', 'Nebiros', 'Flame Flan', 'Shred', 'Anacondaur', 'Ogre', 'Coeurl', 'Chimera Brain', 'Malboro'],
  stolenfaythcavern: ['Yowie', 'Imp', 'Dark Element', 'Nidhogg', 'Thorn', 'Valaha', 'Epaaj', 'Ghost', 'Tonberry', 'Coeurl', 'Malboro'],
  mtgagazet: [
    'Bandersnatch',
    'Ahriman',
    'Dark Flan',
    'Grenade',
    'Grat',
    'Grendel',
    'Bashura',
    'Mandragora',
    'Behemoth',
    'Splasher',
    'Achelous',
    'Maelspike',
    'Imp',
    'Nidhogg'
  ],
  insidesin: [
    'Exoray',
    'Wraith',
    'Gemini (Sword)',
    'Gemini (Club)',
    'Demonolith',
    'Great Malboro',
    'Barbatos',
    'Adamantoise',
    'Behemoth King',
    'Ahriman',
    'Varuna'
  ],
  omegadungeon: [
    'Zaurus',
    'Floating Death',
    'Black Element',
    'Halma',
    'Puroboros',
    'Spirit',
    'Machea',
    'Master Coeurl',
    'Master Tonberry',
    'Varuna',
    'Demonolith',
    'Adamantoise',
    'Wraith',
    'Great Malboro'
  ],
  speciesconquest: [
    'Fenrir',
    'Ornitholestes',
    'Pteryx',
    'Hornet',
    'Vidatu',
    'One-Eye',
    'Jumbo Flan',
    'Nega Elemental',
    'Tanket',
    'Fafnir',
    'Sleep Sprout',
    'Bomb King',
    'Juggernaut',
    'Ironclad'
  ],
  areaconquest: [
    'Stratoavis',
    'Malboro Menace',
    'Kottos',
    'Coeurlregina',
    'Jormungand',
    'Cactuar King',
    'Espada',
    'Abyss Worm',
    'Chimerageist',
    'Don Tonberry',
    'Catoblepas',
    'Abaddon',
    'Vorban'
  ],
  original: ['Earth Eater', 'Greater Sphere', 'Catastrophe', "Th'uban", 'Neslug', 'Ultima Buster', 'Shinryu', 'Nemesis']
};

type SpecialConquest = { location: string; enemy: string };
type SpecialConquests = {
  [location: string]: SpecialConquest[];
};
export const specialConquests: SpecialConquests = {
  besaid: [
    { location: 'besaid', enemy: 'Dingo' },
    { location: 'besaid', enemy: 'Condor' },
    { location: 'besaid', enemy: 'Water Flan' }
  ],
  kilika: [
    { location: 'kilika', enemy: 'Dinonix' },
    { location: 'kilika', enemy: 'Killer Bee' },
    { location: 'kilika', enemy: 'Yellow Element' },
    { location: 'kilika', enemy: 'Ragora' }
  ],
  miihenhighroad: [
    { location: 'miihenhighroad', enemy: "Mi'ihen Fang" },
    { location: 'miihenhighroad', enemy: 'Ipiria' },
    { location: 'miihenhighroad', enemy: 'Floating Eye' },
    { location: 'miihenhighroad', enemy: 'White Element' },
    { location: 'miihenhighroad', enemy: 'Raldo' },
    { location: 'miihenhighroad', enemy: 'Vouivre' },
    { location: 'miihenhighroad', enemy: 'Bomb' },
    { location: 'miihenhighroad', enemy: 'Dual Horn' }
  ],
  mushroomrockroad: [
    { location: 'mushroomrockroad', enemy: 'Raptor' },
    { location: 'mushroomrockroad', enemy: 'Gandarewa' },
    { location: 'mushroomrockroad', enemy: 'Thunder Flan' },
    { location: 'mushroomrockroad', enemy: 'Red Element' },
    { location: 'mushroomrockroad', enemy: 'Lamashtu' },
    { location: 'mushroomrockroad', enemy: 'Funguar' },
    { location: 'mushroomrockroad', enemy: 'Garuda' }
  ],
  djoseroad: [
    { location: 'djoseroad', enemy: 'Garm' },
    { location: 'djoseroad', enemy: 'Simurgh' },
    { location: 'djoseroad', enemy: 'Bite Bug' },
    { location: 'djoseroad', enemy: 'Snow Flan' },
    { location: 'djoseroad', enemy: 'Bunyip' },
    { location: 'djoseroad', enemy: 'Basilisk' },
    { location: 'djoseroad', enemy: 'Ochu' }
  ],
  thunderplains: [
    { location: 'thunderplains', enemy: 'Melusine' },
    { location: 'thunderplains', enemy: 'Aerouge' },
    { location: 'thunderplains', enemy: 'Buer' },
    { location: 'thunderplains', enemy: 'Gold Element' },
    { location: 'thunderplains', enemy: 'Kusariqqu' },
    { location: 'thunderplains', enemy: 'Larva' },
    { location: 'thunderplains', enemy: 'Iron Giant' },
    { location: 'thunderplains', enemy: 'Qactuar' }
  ],
  macalania: [
    { location: 'macalania', enemy: 'Snow Wolf' },
    { location: 'macalania', enemy: 'Iguion' },
    { location: 'macalania', enemy: 'Wasp' },
    { location: 'macalania', enemy: 'Evil Eye' },
    { location: 'macalania', enemy: 'Ice Flan' },
    { location: 'macalania', enemy: 'Blue Element' },
    { location: 'macalania', enemy: 'Murussu' },
    { location: 'macalania', enemy: 'Mafdet' },
    { location: 'macalania', enemy: 'Xiphos' },
    { location: 'macalania', enemy: 'Chimera' }
  ],
  bikanel: [
    { location: 'bikanel', enemy: 'Sand Wolf' },
    { location: 'bikanel', enemy: 'Alcyone' },
    { location: 'bikanel', enemy: 'Mushussu' },
    { location: 'bikanel', enemy: 'Zu' },
    { location: 'bikanel', enemy: 'Sand Worm' },
    { location: 'bikanel', enemy: 'Cactuar' }
  ],
  calmlands: [
    { location: 'calmlands', enemy: 'Skoll' },
    { location: 'calmlands', enemy: 'Nebiros' },
    { location: 'calmlands', enemy: 'Flame Flan' },
    { location: 'calmlands', enemy: 'Shred' },
    { location: 'calmlands', enemy: 'Anacondaur' },
    { location: 'calmlands', enemy: 'Ogre' },
    { location: 'calmlands', enemy: 'Coeurl' },
    { location: 'calmlands', enemy: 'Chimera Brain' },
    { location: 'calmlands', enemy: 'Malboro' }
  ],
  stolenfaythcavern: [
    { location: 'stolenfaythcavern', enemy: 'Yowie' },
    { location: 'stolenfaythcavern', enemy: 'Imp' },
    { location: 'stolenfaythcavern', enemy: 'Dark Element' },
    { location: 'stolenfaythcavern', enemy: 'Nidhogg' },
    { location: 'stolenfaythcavern', enemy: 'Thorn' },
    { location: 'stolenfaythcavern', enemy: 'Valaha' },
    { location: 'stolenfaythcavern', enemy: 'Epaaj' },
    { location: 'stolenfaythcavern', enemy: 'Ghost' },
    { location: 'stolenfaythcavern', enemy: 'Tonberry' }
  ],
  mtgagazet: [
    { location: 'mtgagazet', enemy: 'Bandersnatch' },
    { location: 'mtgagazet', enemy: 'Ahriman' },
    { location: 'mtgagazet', enemy: 'Dark Flan' },
    { location: 'mtgagazet', enemy: 'Grenade' },
    { location: 'mtgagazet', enemy: 'Grat' },
    { location: 'mtgagazet', enemy: 'Grendel' },
    { location: 'mtgagazet', enemy: 'Bashura' },
    { location: 'mtgagazet', enemy: 'Mandragora' },
    { location: 'mtgagazet', enemy: 'Behemoth' },
    { location: 'mtgagazet', enemy: 'Splasher' },
    { location: 'mtgagazet', enemy: 'Achelous' },
    { location: 'mtgagazet', enemy: 'Maelspike' }
  ],
  insidesin: [
    { location: 'insidesin', enemy: 'Exoray' },
    { location: 'insidesin', enemy: 'Wraith' },
    { location: 'insidesin', enemy: 'Gemini (Sword)' },
    { location: 'insidesin', enemy: 'Gemini (Club)' },
    { location: 'insidesin', enemy: 'Demonolith' },
    { location: 'insidesin', enemy: 'Great Malboro' },
    { location: 'insidesin', enemy: 'Barbatos' },
    { location: 'insidesin', enemy: 'Adamantoise' },
    { location: 'insidesin', enemy: 'Behemoth King' }
  ],
  omegadungeon: [
    { location: 'omegadungeon', enemy: 'Zaurus' },
    { location: 'omegadungeon', enemy: 'Floating Death' },
    { location: 'omegadungeon', enemy: 'Black Element' },
    { location: 'omegadungeon', enemy: 'Halma' },
    { location: 'omegadungeon', enemy: 'Puroboros' },
    { location: 'omegadungeon', enemy: 'Spirit' },
    { location: 'omegadungeon', enemy: 'Machea' },
    { location: 'omegadungeon', enemy: 'Master Coeurl' },
    { location: 'omegadungeon', enemy: 'Master Tonberry' },
    { location: 'omegadungeon', enemy: 'Varuna' }
  ],
  speciesconquest: [
    { location: 'speciesconquest', enemy: 'Fenrir' },
    { location: 'speciesconquest', enemy: 'Ornitholestes' },
    { location: 'speciesconquest', enemy: 'Pteryx' },
    { location: 'speciesconquest', enemy: 'Hornet' },
    { location: 'speciesconquest', enemy: 'Vidatu' },
    { location: 'speciesconquest', enemy: 'One-Eye' },
    { location: 'speciesconquest', enemy: 'Jumbo Flan' },
    { location: 'speciesconquest', enemy: 'Nega Elemental' },
    { location: 'speciesconquest', enemy: 'Tanket' },
    { location: 'speciesconquest', enemy: 'Fafnir' },
    { location: 'speciesconquest', enemy: 'Sleep Sprout' },
    { location: 'speciesconquest', enemy: 'Bomb King' },
    { location: 'speciesconquest', enemy: 'Juggernaut' },
    { location: 'speciesconquest', enemy: 'Ironclad' }
  ],
  areaconquest: [
    { location: 'areaconquest', enemy: 'Stratoavis' },
    { location: 'areaconquest', enemy: 'Malboro Menace' },
    { location: 'areaconquest', enemy: 'Kottos' },
    { location: 'areaconquest', enemy: 'Coeurlregina' },
    { location: 'areaconquest', enemy: 'Jormungand' },
    { location: 'areaconquest', enemy: 'Cactuar King' },
    { location: 'areaconquest', enemy: 'Espada' },
    { location: 'areaconquest', enemy: 'Abyss Worm' },
    { location: 'areaconquest', enemy: 'Chimerageist' },
    { location: 'areaconquest', enemy: 'Don Tonberry' },
    { location: 'areaconquest', enemy: 'Catoblepas' },
    { location: 'areaconquest', enemy: 'Abaddon' },
    { location: 'areaconquest', enemy: 'Vorban' }
  ],
  original: [
    { location: 'original', enemy: 'Earth Eater' },
    { location: 'original', enemy: 'Greater Sphere' },
    { location: 'original', enemy: 'Catastrophe' },
    { location: 'original', enemy: "Th'uban" },
    { location: 'original', enemy: 'Neslug' },
    { location: 'original', enemy: 'Ultima Buster' },
    { location: 'original', enemy: 'Shinryu' },
    { location: 'original', enemy: 'Nemesis' }
  ],
  spira: locations.reduce((array, { id: location }) => {
    // Solo las locations capturables
    if (breedLocations.indexOf(location) < 0) {
      return [
        ...array,
        ...conquests[location].reduce((array, enemy) => {
          return [...array, { location, enemy }];
        }, [] as SpecialConquest[])
      ];
    } else {
      return array;
    }
  }, [] as SpecialConquest[]),
  'mtgagazet-water': [
    { location: 'mtgagazet', enemy: 'Splasher' },
    { location: 'mtgagazet', enemy: 'Achelous' },
    { location: 'mtgagazet', enemy: 'Maelspike' }
  ]
};

export const species = locations.reduce((map, { id: location }) => {
  // Solo las locations capturables
  if (breedLocations.indexOf(location) < 0) {
    conquests[location].forEach((name) => {
      const monster = monsters[name];
      if (!map[monster?.species]) {
        map[monster.species] = [];
      }
      map[monster.species].push(name);
    });
    return map;
  } else {
    return map;
  }
}, {} as { [monsterName: string]: string[] });

type Unlock = {
  description: string;
  condition: {
    type: string;
    value: string;
    quantity: number;
  };
};
type Unlocks = { [monsterName: string]: Unlock };

export const unlocks: Unlocks = {
  //Original
  'Earth Eater': {
    description: 'Breed at least 2 fiends in Area Conquest.',
    condition: {
      type: 'breed',
      value: 'areaconquest',
      quantity: 2
    }
  },
  'Greater Sphere': {
    description: 'Breed at least 2 fiends in Species Conquest.',
    condition: {
      type: 'breed',
      value: 'speciesconquest',
      quantity: 2
    }
  },
  Catastrophe: {
    description: 'Breed at least 6 fiends in Area Conquest.',
    condition: {
      type: 'breed',
      value: 'areaconquest',
      quantity: 6
    }
  },
  "Th'uban": {
    description: 'Breed at least 6 monsters in Species Conquest.',
    condition: {
      type: 'breed',
      value: 'speciesconquest',
      quantity: 6
    }
  },
  Neslug: {
    description: 'Capture at least 1 of each fiend in all areas throughout Spira.',
    condition: {
      type: 'location',
      value: 'spira',
      quantity: 1
    }
  },
  'Ultima Buster': {
    description: 'Capture 5 of each fiend roaming throughout Spira.',
    condition: {
      type: 'location',
      value: 'spira',
      quantity: 5
    }
  },
  Shinryu: {
    description: 'Capture at least 2 of each underwater fiend in the Mt. Gagazet cavern.',
    condition: {
      type: 'location',
      value: 'mtgagazet-water',
      quantity: 2
    }
  },
  Nemesis: {
    description:
      'Capture 10 of every (capturable) fiend found in Spira and defeat all other Original Species, Area Conquest and Species Conquest monsters at least once.',
    condition: {
      type: 'location',
      value: 'spira',
      quantity: 10
    }
  },

  //Speciesconquest
  Fenrir: {
    description: "Capture 3 of each of the 'Wolf'-type fiends.",
    condition: {
      type: 'capture',
      value: 'Lupine',
      quantity: 3
    }
  },
  Ornitholestes: {
    description: "Capture 3 of each of the 'Reptile'-type fiends.",
    condition: {
      type: 'capture',
      value: 'Reptile',
      quantity: 3
    }
  },
  Pteryx: {
    description: "Capture 5 of each of the 'Bird'-type fiends.",
    condition: {
      type: 'capture',
      value: 'Bird',
      quantity: 5
    }
  },
  Hornet: {
    description: "Capture 4 of each of the 'Wasp'-type fiends.",
    condition: {
      type: 'capture',
      value: 'Wasp',
      quantity: 4
    }
  },
  Vidatu: {
    description: "Capture 4 of each of the elemental 'Imp'-type fiends.",
    condition: {
      type: 'capture',
      value: 'Imp',
      quantity: 4
    }
  },
  'One-Eye': {
    description: "Capture 4 of each of the 'Eye'-type fiends.",
    condition: {
      type: 'capture',
      value: 'Evil Eye',
      quantity: 4
    }
  },
  'Jumbo Flan': {
    description: "Capture 3 of each of the 'Flan'-type fiends.",
    condition: {
      type: 'capture',
      value: 'Flan',
      quantity: 3
    }
  },
  'Nega Elemental': {
    description: "Capture 3 of each of the 'Element'-type fiends.",
    condition: {
      type: 'capture',
      value: 'Elemental',
      quantity: 3
    }
  },
  Tanket: {
    description: "Capture 3 of each of the 'Helm (armored)'-type fiends.",
    condition: {
      type: 'capture',
      value: 'Helm',
      quantity: 3
    }
  },
  Fafnir: {
    description: "Capture 4 of each of the 'Drake'-type fiends.",
    condition: {
      type: 'capture',
      value: 'Drake',
      quantity: 4
    }
  },
  'Sleep Sprout': {
    description: "Capture 5 of each of the 'Fungus'-type fiends.",
    condition: {
      type: 'capture',
      value: 'Fungus',
      quantity: 5
    }
  },
  'Bomb King': {
    description: "Capture 5 of each of the 'Bomb'-type fiends.",
    condition: {
      type: 'capture',
      value: 'Bomb',
      quantity: 5
    }
  },
  Juggernaut: {
    description: "Capture 5 of each of the 'Ruminant'-type fiends.",
    condition: {
      type: 'capture',
      value: 'Ruminant',
      quantity: 5
    }
  },
  Ironclad: {
    description: "Capture 10 of each of the 'Iron Giant'-type fiends.",
    condition: {
      type: 'capture',
      value: 'Iron Giant',
      quantity: 10
    }
  },

  //Areaconquest
  Stratoavis: {
    description: 'Capture at least one of every fiend in Besaid.',
    condition: {
      type: 'location',
      value: 'besaid',
      quantity: 1
    }
  },
  'Malboro Menace': {
    description: 'Capture at least one of every fiend in Kilika.',
    condition: {
      type: 'location',
      value: 'kilika',
      quantity: 1
    }
  },
  Kottos: {
    description: "Capture at least one of every fiend on the Mi'ihen Highroad.",
    condition: {
      type: 'location',
      value: 'miihenhighroad',
      quantity: 1
    }
  },
  Coeurlregina: {
    description: 'Capture at least one of every fiend on the Mushroom Rock Road.',
    condition: {
      type: 'location',
      value: 'mushroomrockroad',
      quantity: 1
    }
  },
  Jormungand: {
    description: 'Capture at least one of every fiend on the Djose Highroad.',
    condition: {
      type: 'location',
      value: 'djoseroad',
      quantity: 1
    }
  },
  'Cactuar King': {
    description: 'Capture at least one of every fiend in the Thunder Plains.',
    condition: {
      type: 'location',
      value: 'thunderplains',
      quantity: 1
    }
  },
  Espada: {
    description: 'Capture at least one of every fiend in the Macalania Woods and Lake Macalania.',
    condition: {
      type: 'location',
      value: 'macalania',
      quantity: 1
    }
  },
  'Abyss Worm': {
    description: 'Capture at least one of every fiend in Bikanel.',
    condition: {
      type: 'location',
      value: 'bikanel',
      quantity: 1
    }
  },
  Chimerageist: {
    description: 'Capture at least one of every fiend in the Calm Lands.',
    condition: {
      type: 'location',
      value: 'calmlands',
      quantity: 1
    }
  },
  'Don Tonberry': {
    description: 'Capture at least one of every fiend in the Cavern of the Stolen Fayth.',
    condition: {
      type: 'location',
      value: 'stolenfaythcavern',
      quantity: 1
    }
  },
  Catoblepas: {
    description: 'Capture at least one of every fiend at Mt. Gagazet.',
    condition: {
      type: 'location',
      value: 'mtgagazet',
      quantity: 1
    }
  },
  Abaddon: {
    description: 'Capture at least one of every fiend from inside Sin.',
    condition: {
      type: 'location',
      value: 'insidesin',
      quantity: 1
    }
  },
  Vorban: {
    description: 'Capture at least one of every fiend in the Omega Ruins.',
    condition: {
      type: 'location',
      value: 'omegadungeon',
      quantity: 1
    }
  }
};

export const enemies = monsters;
