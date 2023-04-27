import classNames from 'classnames';
import { FC, PropsWithChildren, useContext } from 'react';
import Icon from 'components/icon';
import { AccordionContext } from '.';

import style from './style.module.scss';

interface Prop extends PropsWithChildren {
  id: string;
  title: string;
  className?: string;
  collapsed?: boolean;
}

const AccordionItem: FC<Prop> = ({ id, title, children, className, collapsed }) => {
  const { active, toggleActive } = useContext(AccordionContext);
  return (
    <div className={classNames(style.accordionItem, 'card', className, { [style.opened]: active.includes(id) })}>
      <header className="card-header" onClick={() => toggleActive(id)}>
        <p className="card-header-title">{title}</p>
        <button className="card-header-icon" aria-label="more options">
          <Icon name="angle-down" />
        </button>
      </header>
      <div className={classNames(style.accordionContent, 'card-content')}>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
