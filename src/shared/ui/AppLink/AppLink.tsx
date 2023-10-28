import cn from 'classnames';
import React, { FC, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import styles from './styles.module.scss';

type AppLinkTheme = 'Primary' | 'Inverted';

interface AppLinkProps extends LinkProps {
  className?: string;
  children: ReactNode;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
  to,
  theme = 'Primary',
  className,
  children,
  ...restProps
}) => (
  <Link
    to={to}
    className={cn(styles.AppLink, styles[theme], className)}
    {...restProps}
  >
    {children}
  </Link>
);
