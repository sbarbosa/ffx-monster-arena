import { useImmerAtom } from 'jotai-immer';
import { atomWithStorage } from 'jotai/utils';
import { enemies, species } from './data';

type KillCountValue = {
  [key: string]: {
    [monsterName: string]: number;
  };
};
type KillCount = {
  locations: KillCountValue;
  species: KillCountValue;
};
const defaultLocations = Object.keys(enemies).reduce((map, name) => {
  const enemy = enemies[name];

  if (!map[enemy.monsterArena]) {
    map[enemy.monsterArena] = {};
  }
  map[enemy.monsterArena][name] = 0;
  return map;
}, {} as KillCountValue);

const defaultSpecies = Object.keys(species).reduce((map, name) => {
  map[name] = species[name].reduce((map, enemyName) => {
    map[enemyName] = 0;
    return map;
  }, {} as { [key: string]: number });
  return map;
}, {} as KillCountValue);

const defaultValue: KillCount = {
  locations: defaultLocations,
  species: defaultSpecies
};

console.log(defaultValue);

const textAtom = atomWithStorage('killCount', defaultValue);

export const useKillCount = () => {
  const [killCount, setKillCount] = useImmerAtom(textAtom);
  return [killCount, setKillCount, () => setKillCount((val) => (val = defaultValue))] as const;
};
