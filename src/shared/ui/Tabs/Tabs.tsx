import cn from 'classnames';
import React, { ReactElement, ReactNode } from 'react';

import { Card } from '../Card/Card';

import styles from './styles.module.scss';

export interface TabItem<T extends string> {
  value: T;
  label: ReactNode;
}

interface TabsProps<T extends string> {
  className?: string;
  tabs: TabItem<T>[];
  value: string;
  onChange: (newTab: TabItem<T>) => void;
}

export const Tabs = <T extends string>({
  className,
  tabs,
  value,
  onChange,
}: TabsProps<T>): ReactElement => {
  return (
    <div className={cn(styles.Tabs, className)}>
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          onClick={(): void => {
            onChange(tab);
          }}
          variant={tab.value === value ? 'Primary' : 'Secondary'}
          className={styles.TabItem}
        >
          {tab.label}
        </Card>
      ))}
    </div>
  );
};
