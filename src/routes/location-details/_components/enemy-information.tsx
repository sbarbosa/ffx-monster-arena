import classNames from 'classnames';
import { enemies } from 'hooks/data';
import { FC, ReactNode } from 'react';

import style from './style.module.scss';
import AccordionItem from 'components/accordion/accordion-item';
import Accordion from 'components/accordion';

type Props = {
  name: string;
  onClose: () => void;
};

const EnemyInformation: FC<Props> = ({ name, onClose }) => {
  const enemy = enemies[name];
  if (!enemy) {
    return null;
  }

  return (
    <div className={classNames(style.infoModal, 'modal is-active')}>
      <div className="modal-background" onClick={onClose} />
      <div className="modal-content">
        <div className="box has-text-left">
          <div className={style.header}>
            <figure className="image is-128x128">
              <img src={`/ffx-monster-arena/img/${enemy.img}`} alt="Enemy portrait" />
            </figure>

            <div className="block">
              <p className="title is-4">{name}</p>
              <p className="subtitle">{enemy.sensorDescription}</p>
            </div>
          </div>
          <div className={style.information}>
            <Accordion defaultItem="items">
              <AccordionItem id="scan_description" title="Scan description">
                <p className="subtitle is-6">{enemy.scanDescription}</p>
              </AccordionItem>

              <AccordionItem id="basic_information" title="Basic information">
                <div className={style.sectionInformation}>
                  <InfoSection title="Location" description={enemy.location.map((location) => <span key={location}>{location}</span>)} />
                  <InfoSection title="Species" description={enemy.species} />
                  <InfoSection title="Monster Arena" description={enemy.monsterArena} />
                  <InfoSection title="Other information" description={enemy.otherInformation} />
                </div>
              </AccordionItem>

              <AccordionItem id="stats" title="Stats">
                <div className={style.sectionInformation}>
                  {enemy.stats.map((item) => (
                    <InfoSection
                      key={item.name}
                      title={item.name}
                      description={
                        !Array.isArray(item.values)
                          ? item.values
                          : item.values.map((elem) => <span key={`stats[${item.name}]_[${elem}]`}>{elem}</span>)
                      }
                    />
                  ))}
                </div>
              </AccordionItem>

              <AccordionItem id="items" title="Items">
                <div className={style.sectionInformation}>
                  {enemy.items.map((item) => (
                    <InfoSection
                      key={item.name}
                      title={item.name}
                      description={
                        !Array.isArray(item.values)
                          ? item.values
                          : item.values.map((elem) => <span key={`items[${item.name}]_[${elem}]`}>{elem}</span>)
                      }
                    />
                  ))}
                </div>
              </AccordionItem>

              <AccordionItem id="elemental_affinities" title="Elemental affinities">
                <div className={style.sectionInformation}>
                  {enemy.elementalAffinities.map((item) => (
                    <InfoSection
                      key={item.name}
                      title={item.name}
                      description={
                        !Array.isArray(item.values)
                          ? item.values
                          : item.values.map((elem) => <span key={`elemental_affinities[${item.name}]_[${elem}]`}>{elem}</span>)
                      }
                    />
                  ))}
                </div>
              </AccordionItem>

              <AccordionItem id="statuses_and_immunities" title="Statuses and immunities">
                <div className={style.sectionInformation}>
                  {enemy.statusesAndImmunities.map((item) => (
                    <InfoSection
                      key={item.name}
                      title={item.name}
                      description={
                        !Array.isArray(item.values)
                          ? item.values
                          : item.values.map((elem) => <span key={`statuses_and_immunities[${item.name}]_[${elem}]`}>{elem}</span>)
                      }
                    />
                  ))}
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={onClose} />
    </div>
  );
};

const InfoSection: FC<{ title: string; description: ReactNode }> = ({ title, description }) => (
  <div className="block has-text-left">
    <p className="title is-5">{title}</p>
    <p className={classNames(style.sectionDescription, 'subtitle is-6')}>{description}</p>
  </div>
);

export default EnemyInformation;
