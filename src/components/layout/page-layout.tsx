import { FC } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import loadable from '@loadable/component';
import { useLocalStorage } from 'usehooks-ts';
import { Button } from 'components/button';
import classNames from 'classnames';
import { locations } from 'hooks/data';
import { useKillCount } from 'hooks/use-kill-count';

import style from './style.module.scss';
import Icon from 'components/icon';

const Acknowledge = loadable(() => import('routes/acknowledge'));

const PageLayout: FC = () => {
  const [, , reset] = useKillCount();

  const { pathname } = useLocation();
  const { locationId } = useParams();
  const location = locations.find((item) => item.id === locationId);

  const [acknowledged] = useLocalStorage('acknowledged', false);

  return (
    <>
      <nav className="navbar is-light mb-5" role="navigation">
        <div className={classNames(style.container, 'container is-flex is-justify-content-space-between')}>
          <Button
            className={classNames({
              'is-invisible': pathname === '/' || !acknowledged
            })}
            link={{ replace: true, to: '/' }}
          >
            <Icon name="chevron-left" size="small" />
          </Button>
          <div className="navbar-brand">
            <h4 className="navbar-item title is-4">{location ? location.name : 'FFX - Monster Arena'}</h4>
          </div>
          <Button
            className={classNames({
              'is-invisible': !acknowledged
            })}
            onClick={reset}
          >
            <Icon name="trash" size="small" />
          </Button>
        </div>
      </nav>

      <section className={classNames(style.container, 'container')}>{acknowledged ? <Outlet /> : <Acknowledge />}</section>
    </>
  );
};

export default PageLayout;
