import React, { FC } from 'react';

import ListIcon from '@shared/assets/icons/list.svg';
import PlateIcon from '@shared/assets/icons/plate.svg';
import { Button } from '@shared/ui/Button/Button';
import { ArticleViewMode } from '../../model/types/article';

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
    <Button
      variant="Ghost"
      onClick={(): void => {
        onViewModeClick(selectedViewMode === 'List' ? 'Plate' : 'List');
      }}
      className={className}
    >
      {selectedViewMode === 'List' ? <PlateIcon /> : <ListIcon />}
    </Button>
  );
};
