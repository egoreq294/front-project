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
  selectedTabs: T[];
  onSelectTab: (newTab: TabItem<T>) => void;
  onRemoveTab: (newTab: TabItem<T>) => void;
  direction?: FlexDiraction;
}

export const Tabs = <T extends string>({
  className,
  tabs,
  selectedTabs,
  onSelectTab,
  onRemoveTab,
  direction = 'row',
}: TabsProps<T>): ReactElement => {
  return (
    <Flex className={className} direction={direction} gap="8" align="start">
      {tabs.map((tab) => {
        const isActive = selectedTabs.includes(tab.value);

        const onChangeHandler = (): void => {
          if (isActive) {
            onRemoveTab(tab);
            return;
          }

          onSelectTab(tab);
        };

        return (
          <Card
            key={tab.value}
            onClick={onChangeHandler}
            variant={isActive ? 'Light' : 'Primary'}
            className={styles.TabItem}
          >
            {tab.label}
          </Card>
        );
      })}
    </Flex>
  );
};
