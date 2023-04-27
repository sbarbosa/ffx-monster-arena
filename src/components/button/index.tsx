import classNames from 'classnames';
import { CSSProperties, FC, MouseEventHandler, PropsWithChildren } from 'react';
import { Link, To } from 'react-router-dom';

type Color = 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'link';

interface Props extends PropsWithChildren {
  color?: Color;
  className?: string;
  light?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  style?: CSSProperties;
  link?: {
    reloadDocument?: boolean;
    replace?: boolean;
    state?: unknown;
    preventScrollReset?: boolean;
    to: To;
  };
}

const Button: FC<Props> = ({ color, style, light, className, children, link, onClick }) => {
  const buttonProps = {
    className: classNames('button', className, {
      [`is-${color}`]: !!color,
      'is-light': !!light
    }),
    style,
    onClick
  };

  return link ? (
    <Link {...link} {...buttonProps}>
      {children}
    </Link>
  ) : (
    <button {...buttonProps}>{children}</button>
  );
};

export { Button };
