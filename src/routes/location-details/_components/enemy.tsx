import classNames from 'classnames';
import { breedLocations, enemies, specialConquests, species, unlocks } from 'hooks/data';
import { FC, useState } from 'react';
import { useKillCount } from 'hooks/use-kill-count';
import { Button } from 'components/button';
import EnemyInformation from './enemy-information';

import style from './style.module.scss';

type Props = {
  location: string;
  name: string;
};

const Enemy: FC<Props> = ({ location, name }) => {
  const [killCount, setKillCount] = useKillCount();
  const [showInfo, setShowInfo] = useState(false);

  const enemy = enemies[name];

  if (!enemy) {
    return <>Enemy not found!</>;
  }

  const kills = killCount.locations[enemy.monsterArena][name];

  const unlock = unlocks[name];
  const misplaced = enemy.monsterArena !== location;
  const completed = (!unlock && kills === 10) || (unlock && kills === 1);

  const toggleInfoModal = () => setShowInfo(!showInfo);

  const changeKillCount = (value: number) => {
    setKillCount((killCount) => {
      // Change the direct capture
      const val = killCount.locations[enemy.monsterArena][name] + value;
      if (val >= 0 && val <= 10) {
        killCount.locations[enemy.monsterArena][name] = val;
        killCount.species[enemy.species][name] = val;
      }

      // Control the area unlocks
      // For each breed location
      breedLocations.forEach((area) => {
        // For each enemi of that area
        specialConquests[area].forEach((conquest) => {
          const unlock = unlocks[conquest.enemy];

          let passed = false;

          if (unlock.condition.type === 'location') {
            passed = specialConquests[unlock.condition.value].every(
              (elem) => killCount.locations[elem.location][elem.enemy] >= unlock.condition.quantity
            );
          } else if (unlock.condition.type === 'capture') {
            passed = species[unlock.condition.value].every((enemyName) => {
              const enemy = enemies[enemyName];
              return killCount.locations[enemy.monsterArena][enemyName] >= unlock.condition.quantity;
            });
          } else if (unlock.condition.type === 'breed') {
            const filteredList = specialConquests[unlock.condition.value].filter(
              (conquest) => killCount.locations[unlock.condition.value][conquest.enemy] > 0
            );
            passed = filteredList.length >= unlock.condition.quantity;
          }

          killCount.locations[area][conquest.enemy] = passed ? 1 : 0;
        });
      });
    });
  };

  return (
    <>
      <div
        className={classNames(style.enemy, 'box', {
          [style.misplaced]: misplaced
        })}
      >
        {completed && (
          <span className={classNames(style.check, 'icon is-small')}>
            <i className="fas fa-check" />
          </span>
        )}
        <img
          className={style.portrait}
          src={`/ffx-monster-arena/img/${enemy.img}`}
          alt="Enemy portrait"
          onClick={toggleInfoModal}
          onKeyUp={toggleInfoModal}
        />
        <div className={style.information}>
          <h5 className="title is-5 is-spaced">{name}</h5>
          {unlock ? (
            <p className="subtitle is-6">{unlock.description}</p>
          ) : (
            <div className={style.killcount}>
              <Button className={style.minusButton} onClick={() => changeKillCount(-1)}>
                <span className="icon is-small">
                  <i className="fas fa-minus" />
                </span>
              </Button>
              <div className={style.progress}>
                <span className={classNames(style.label, 'subtitle')}>{kills}</span>
                <progress className="progress is-primary" value={kills} max="10">
                  {kills}
                </progress>
              </div>
              <Button className={style.plusButton} onClick={() => changeKillCount(1)}>
                <span className="icon is-small">
                  <i className="fas fa-plus" />
                </span>
              </Button>
            </div>
          )}
        </div>
      </div>
      {showInfo && <EnemyInformation name={name} onClose={toggleInfoModal} />}
    </>
  );
};

export default Enemy;
