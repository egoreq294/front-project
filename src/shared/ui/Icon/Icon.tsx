import React, { FC, Ref, SVGProps } from 'react';

import { ICON_MAP } from './constants';
import { IconName } from './types';

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: IconName;
  ref?: Ref<SVGSVGElement>;
}

export const Icon: FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = ICON_MAP[name];

  return <IconComponent {...props} />;
};
