import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { addPopup } from '@shared/lib/popups/popupSlice';
// eslint-disable-next-line egoreq-plugin/layer-imports
import { ArticleForm, ArticleFormSchema } from '@widgets/ArticleForm';
import { useCreateArticle } from '../api/createArticleApi';
import { getCreateArticleInput } from '../model/lib/getCreateArticleInput';

export const CreateArticle: FC = () => {
  const [createArticle, { isLoading }] = useCreateArticle();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { t } = useTranslation('article');

  const onSubmit = async (values: ArticleFormSchema): Promise<void> => {
    const inputValues = getCreateArticleInput(values);

    try {
      const { id } = await createArticle(inputValues).unwrap();
      navigate(`/articles/${id}`);
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

  return <ArticleForm onSubmit={onSubmit} areFieldsDisabled={isLoading} />;
};
