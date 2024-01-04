import cn from 'classnames';
import React, { FC } from 'react';

import { ArticleViewMode } from '@entities/Article';
import { Card } from '@shared/ui/Card';
import { IconButton } from '@shared/ui/IconButton';

import styles from './styles.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  selectedViewMode: ArticleViewMode;
  onViewModeClick: (view: ArticleViewMode) => void;
}

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = ({
  className,
  onViewModeClick,
  selectedViewMode,
}) => {
  return (
    <Card className={cn(styles.ArticleViewSelector, className)}>
      <IconButton
        name="ListNew"
        className={cn(selectedViewMode !== 'List' && styles.NotActive)}
        onClick={(): void => {
          onViewModeClick('List');
        }}
      />
      <IconButton
        name="PlateNew"
        className={cn(selectedViewMode !== 'Plate' && styles.NotActive)}
        onClick={(): void => {
          onViewModeClick('Plate');
        }}
      />
    </Card>
  );
};
