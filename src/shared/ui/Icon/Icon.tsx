import React, { FC, Ref, SVGProps } from 'react';

import { ICON_MAP } from './constants';
import { IconName } from './types';

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: IconName;
  ref?: Ref<SVGSVGElement>;
}

export const Icon: FC<IconProps> = ({
  name,
  width = '20',
  height = '20',
  ...props
}) => {
  const IconComponent = ICON_MAP[name];

  return <IconComponent width={width} height={height} {...props} />;
};
