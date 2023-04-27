import classNames from 'classnames';
import { FC } from 'react';

interface Props {
  name: string;
  size?: 'small' | 'medium' | 'medium';
}

const Icon: FC<Props> = ({ name, size }) => {
  return (
    <span className="icon">
      <i className={classNames(`fas fa-${name}`, { [`is-${size}`]: !!size })} aria-hidden="true" />
    </span>
  );
};

export default Icon;
