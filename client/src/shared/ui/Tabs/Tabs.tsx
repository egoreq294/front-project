import React, { ReactElement, ReactNode } from 'react';

import { Card } from '../Card/Card';
import { Flex, FlexDiraction } from '../Stack/Flex/Flex';

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
  direction?: FlexDiraction;
}

export const Tabs = <T extends string>({
  className,
  tabs,
  value,
  onChange,
  direction = 'row',
}: TabsProps<T>): ReactElement => {
  return (
    <Flex className={className} direction={direction} gap="8" align="start">
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          onClick={(): void => {
            onChange(tab);
          }}
          variant={tab.value === value ? 'Light' : 'Primary'}
          className={styles.TabItem}
        >
          {tab.label}
        </Card>
      ))}
    </Flex>
  );
};
