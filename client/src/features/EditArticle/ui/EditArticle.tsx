import React, { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Article } from '@entities/Article';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { addPopup } from '@shared/lib/popups/popupSlice';
// eslint-disable-next-line egoreq-plugin/layer-imports
import { ArticleForm, ArticleFormSchema } from '@widgets/ArticleForm';
import { useEditArticle } from '../api/editArticleApi';
import { getEditArticleInitialValues } from '../model/lib/getEditArticleInitialValues';
import { getEditArticleInput } from '../model/lib/getEditArticleInput';
import { EditArticleSkeleton } from './EditArticleSkeleton';

interface EditArticleProps {
  article: Article | null;
  loading: boolean;
}

export const EditArticle: FC<EditArticleProps> = ({ article, loading }) => {
  const [createArticle, { isLoading }] = useEditArticle();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { t } = useTranslation('article');

  const initialValues = useMemo(
    () => getEditArticleInitialValues(article),
    [article],
  );

  const onSubmit = async (values: ArticleFormSchema): Promise<void> => {
    if (!article?.id) {
      return;
    }

    const inputValues = getEditArticleInput(article.id, values);

    try {
      const { id: articleId } = await createArticle(inputValues).unwrap();
      navigate(`/articles/${articleId}`);
    } catch (error) {
      dispatch(
        addPopup({
          title: t('error'),
          description: t('create-article-error'),
        }),
      );
      console.error(error);
    }
  };

  if (loading) {
    return <EditArticleSkeleton />;
  }

  return (
    <ArticleForm
      onSubmit={onSubmit}
      areFieldsDisabled={isLoading}
      defaultValues={initialValues}
    />
  );
};
