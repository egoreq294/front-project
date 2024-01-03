import cn from 'classnames';
import React, { FC } from 'react';

import styles from './styles.module.scss';

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

export const Overlay: FC<OverlayProps> = ({ className, onClick }) => {
  return <div className={cn(styles.Overlay, className)} onClick={onClick} />;
};
