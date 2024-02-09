import React, { FC, memo, useCallback, useState } from 'react';

import { Drawer } from '@shared/ui/Drawer';
import { IconButton } from '@shared/ui/IconButton';
import { SidebarContent } from './SidebarContent';

interface SidebarButtonProps {
  className?: string;
}

export const SidebarButton: FC<SidebarButtonProps> = memo(({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <>
      <IconButton
        name="Menu"
        width={20}
        height={20}
        onClick={onOpenDrawer}
        className={className}
      />
      <Drawer
        data-testid="SidebarDrawer"
        isOpen={isOpen}
        onClose={onCloseDrawer}
        direction="left"
        size={320}
        className={className}
      >
        <SidebarContent
          showCollapseButton={false}
          onItemClick={onCloseDrawer}
        />
      </Drawer>
    </>
  );
});
