import { IconName } from '@shared/ui/Icon/types';

export interface SidebarItemType {
  path: string;
  text: string;
  iconName?: IconName;
  authOnly?: boolean;
}
