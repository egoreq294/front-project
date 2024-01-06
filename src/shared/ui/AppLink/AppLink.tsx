import cn from 'classnames';
import React, { forwardRef, ReactNode, Ref } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

interface AppLinkProps extends LinkProps {
  className?: string;
  activeClassName?: string;
  children: ReactNode;
}

export const AppLink = forwardRef(
  (props: AppLinkProps, ref: Ref<HTMLAnchorElement> | undefined) => {
    const { to, className, activeClassName, children, ...restProps } = props;

    return (
      <NavLink
        to={to}
        ref={ref}
        className={({ isActive }): string =>
          cn(styles.AppLink, isActive ? activeClassName : undefined, className)
        }
        {...restProps}
      >
        {children}
      </NavLink>
    );
  },
);
