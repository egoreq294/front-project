import { Listbox as ListBoxImpl } from '@headlessui/react';
import cn from 'classnames';
import React, { Fragment, ReactElement, ReactNode } from 'react';

import { DropdownDirection } from '@shared/types/ui';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';

import styles from './styles.module.scss';

export interface ListBoxItem<T extends string> {
  value: T;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps<T extends string> {
  className?: string;
  items: ListBoxItem<T>[];
  label?: string;
  value?: T;
  defaultValue?: T;
  onChange: (value: T) => void;
  readOnly?: boolean;
  direction?: DropdownDirection;
}

const DROPDOWN_DIRECTION_MAP: Record<DropdownDirection, string> = {
  'bottom-right': styles.BottomRight,
  'bottom-left': styles.BottomLeft,
  'top-right': styles.TopRight,
  'top-left': styles.TopLeft,
};

/**
 * @deprecated
 */
export const ListBox = <T extends string>({
  className,
  items,
  label,
  value,
  defaultValue,
  onChange,
  readOnly,
  direction = 'bottom-right',
}: ListBoxProps<T>): ReactElement => {
  const selectedContent = items.find((item) => item.value === value)?.content;

  return (
    <HStack gap="8">
      {label && <span className={styles.Label}>{`${label}>`}</span>}
      <ListBoxImpl
        as="div"
        className={cn(
          styles.ListBox,
          { [styles.ReadOnly]: readOnly },
          className,
        )}
        value={value}
        onChange={onChange}
        disabled={readOnly}
      >
        <ListBoxImpl.Button className={styles.TriggerButton} as="div">
          <Button variant="Secondary">{selectedContent || defaultValue}</Button>
        </ListBoxImpl.Button>
        <ListBoxImpl.Options
          className={cn(styles.Options, DROPDOWN_DIRECTION_MAP[direction])}
        >
          {items.map((item) => (
            <ListBoxImpl.Option
              as={Fragment}
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              {({ active }): JSX.Element => (
                <li
                  className={cn(
                    {
                      [styles.ActiveItem]: active,
                      [styles.DisabledItem]: item.disabled,
                    },
                    styles.Item,
                  )}
                >
                  {item.content}
                </li>
              )}
            </ListBoxImpl.Option>
          ))}
        </ListBoxImpl.Options>
      </ListBoxImpl>
    </HStack>
  );
};
