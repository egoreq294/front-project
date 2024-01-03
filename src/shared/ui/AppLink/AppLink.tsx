import cn from 'classnames';
import React, { FC, ReactNode } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

interface AppLinkProps extends LinkProps {
  className?: string;
  activeClassName?: string;
  children: ReactNode;
}

export const AppLink: FC<AppLinkProps> = ({
  to,
  className,
  activeClassName,
  children,
  ...restProps
}) => (
  <NavLink
    to={to}
    className={({ isActive }): string =>
      cn(styles.AppLink, isActive ? activeClassName : undefined, className)
    }
    {...restProps}
  >
    {children}
  </NavLink>
);
