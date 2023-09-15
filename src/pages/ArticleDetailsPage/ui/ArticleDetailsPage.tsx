import { ArticleDetails, ArticleList } from '@entities/Article';
import { CommentList } from '@entities/Comment';
import React, { FC, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './styles.module.scss';
import { DynamicModuleLoader } from '@shared/lib/components/DynamicModuleLoader';
import { ReducerList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getArticleComments } from '../model/slices/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticleDetailsCommentsIsLoading } from '../model/selectors/commentsSelectors';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';
import { AddCommentForm } from '@features/AddCommentForm';
import { addCommentForArticle } from '../model/services/addCommentForArticle';
import { Button } from '@shared/ui/Button/Button';
import { Typography } from '@shared/ui/Typography/Typography';
import { Page } from '@widgets/Page/Page';
import { getArticleRecommendation } from '../model/slices/articleDetailsRecommendationsSlice';
import { getArticleRecommendationIsLoading } from '../model/selectors/recommendationsSelectors';
import { fetchArticleRecommendaions } from '../model/services/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../model/slices';

const reducers: ReducerList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('article');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const comments = useSelector(getArticleComments.selectAll);
  const isCommentsLoading = useSelector(getArticleDetailsCommentsIsLoading);

  const recommendations = useSelector(getArticleRecommendation.selectAll);
  const isRecommendationLoading = useSelector(
    getArticleRecommendationIsLoading,
  );

  const onSendComment = useCallback(
    (value: string) => {
      dispatch(addCommentForArticle(value));
    },
    [dispatch],
  );

  const onBackToList = useCallback(() => {
    navigate('/articles');
  }, [navigate]);

  useEffect(() => {
    if (!id) {
      return;
    }

    dispatch(fetchCommentsByArticleId(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchArticleRecommendaions());
  }, [dispatch]);

  if (!id) {
    return <div>{t('article-not-found')}</div>;
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page>
        <Button variant="Secondary" onClick={onBackToList}>
          {t('back-to-list')}
        </Button>
        <ArticleDetails articleId={id} />
        <div className={styles.RecommendationsWrapper}>
          <Typography variant="M">{t('recommendations')}</Typography>
          <ArticleList
            className={styles.Recommendations}
            articles={recommendations}
            isLoading={isRecommendationLoading}
            viewMode="Plate"
            target="_blank"
          />
        </div>
        <div className={styles.CommentsWrapper}>
          <Typography variant="M">{t('comments')}</Typography>
          <AddCommentForm onSendComment={onSendComment} />
          <CommentList comments={comments} isLoading={isCommentsLoading} />
        </div>
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
