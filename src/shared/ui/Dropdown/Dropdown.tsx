import { Menu } from '@headlessui/react';
import React, { FC, Fragment, ReactNode } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';
import { DropdownDirection } from '@shared/types/ui';
import { AppLink } from '../AppLink/AppLink';

export interface DropdownItem {
  id: string;
  disabled?: boolean;
  content: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

const DROPDOWN_DIRECTION_MAP: Record<DropdownDirection, string> = {
  'bottom-right': styles.BottomRight,
  'bottom-left': styles.BottomLeft,
  'top-right': styles.TopRight,
  'top-left': styles.TopLeft,
};

export const Dropdown: FC<DropdownProps> = ({
  className,
  items,
  trigger,
  direction = 'bottom-right',
}) => {
  return (
    <Menu as="div" className={cn(styles.Dropdown, className)}>
      <Menu.Button as="div" className={styles.TriggerButton}>
        {trigger}
      </Menu.Button>
      <Menu.Items
        className={cn(styles.Menu, DROPDOWN_DIRECTION_MAP[direction])}
      >
        {items.map((item) => {
          const content = ({ active }: { active: boolean }): JSX.Element => (
            <button
              type="button"
              onClick={item?.onClick}
              disabled={item.disabled}
              className={cn(styles.Item, { [styles.ActiveItem]: active })}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item
                as={AppLink}
                to={item.href}
                disabled={item.disabled}
                key={item.id}
              >
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item as={Fragment} disabled={item.disabled} key={item.id}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
