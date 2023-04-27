import { FC, useMemo } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { locations, breedLocations, conquests } from 'hooks/data';
import { useKillCount } from 'hooks/use-kill-count';

import style from './style.module.scss';

const Locations: FC = () => {
  const [killCount] = useKillCount();

  const memoizedLocations = useMemo(() => {
    return locations.map((location) => {
      let blocked = false;

      if (breedLocations.includes(location.id)) {
        const someKills = conquests[location.id].some((conquest) => killCount.locations[location.id][conquest] > 0);

        if (!someKills) {
          blocked = true;
        }
      }

      return { ...location, blocked };
    });
  }, [killCount]);

  return (
    <div className="container has-text-centered">
      <div className="columns is-multiline is-3">
        {memoizedLocations.map(({ id, name, blocked }) => (
          <div key={id} className="column is-one-quarter-desktop is-one-third-tablet">
            <Link
              className={classNames(style.location, 'box', {
                [style.blocked]: blocked
              })}
              to={`/${id}`}
            >
              {name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
