import React, { FC } from 'react';

import { ArticleViewMode } from '@entities/Article';
import { Button } from '@shared/ui/Button';
import { Icon } from '@shared/ui/Icon';

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
      {selectedViewMode === 'List' ? (
        <Icon name="Plate" />
      ) : (
        <Icon name="List" />
      )}
    </Button>
  );
};
