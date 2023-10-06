import React, { FC, Fragment, ReactNode } from 'react';
import { Listbox as ListBoxImpl } from '@headlessui/react';
import styles from './styles.module.scss';
import cn from 'classnames';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

type DropdownDirection = 'Top' | 'Bottom';

interface ListBoxProps {
  className?: string;
  items: ListBoxItem[];
  label?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
  direction?: DropdownDirection;
}

export const ListBox: FC<ListBoxProps> = ({
  className,
  items,
  label,
  value,
  defaultValue,
  onChange,
  readOnly,
  direction = 'Bottom',
}) => {
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
        <ListBoxImpl.Options className={cn(styles.Options, styles[direction])}>
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
