import React, { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { ArticleViewMode } from '@entities/Article';
import { ArticleViewSelector } from '@features/ArticleViewSelector';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { getArticlesPageView } from '../model/selectors/articlesPageSelectors';
import { articlesPageActions } from '../model/slices/articlesPageSlice';

interface ViewSelectorProps {
  className?: string;
}

export const ViewSelector: FC<ViewSelectorProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  const viewMode = useSelector(getArticlesPageView);

  const onChangeView = useCallback(
    (view: ArticleViewMode): void => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch],
  );
  return (
    <ArticleViewSelector
      selectedViewMode={viewMode}
      onViewModeClick={onChangeView}
      className={className}
    />
  );
};
