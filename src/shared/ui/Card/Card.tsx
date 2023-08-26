import React, { FC, HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const Card: FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div className={cn(styles.Card, className)} {...props}>
      {children}
    </div>
  );
};
