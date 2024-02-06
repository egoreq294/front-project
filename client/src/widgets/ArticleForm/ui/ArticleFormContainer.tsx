import React, { FC } from 'react';
import { FormProvider, FormState, useForm } from 'react-hook-form';

import { StickyContentLayout } from '@shared/layouts';
import { CREATE_ARTICLE_INITIAL_VALUE } from '../model/constants/constants';
import { ArticleFormSchema } from '../model/types/ArticleFormSchema';
import { AdditionalInfo } from './AdditionalInfo/AdditionalInfo';
import { ArticleForm } from './ArticleForm';

interface ArticleFormContainerProps {
  defaultValues?: ArticleFormSchema;
  onSubmit: (
    values: ArticleFormSchema,
    formState?: FormState<ArticleFormSchema>,
  ) => void;
  areFieldsDisabled?: boolean;
}

export const ArticleFormContainer: FC<ArticleFormContainerProps> = ({
  defaultValues,
  onSubmit,
  areFieldsDisabled,
}) => {
  const form = useForm<ArticleFormSchema>({
    defaultValues: defaultValues || CREATE_ARTICLE_INITIAL_VALUE,
  });

  const { formState, getValues } = form;

  const submitHandler = (): void => {
    const values = getValues();
    onSubmit(values, formState);
  };

  return (
    <FormProvider {...form}>
      <StickyContentLayout
        content={<ArticleForm areFieldsDisabled={areFieldsDisabled} />}
        right={
          <AdditionalInfo
            onSubmit={submitHandler}
            areFieldsDisabled={areFieldsDisabled}
          />
        }
      />
    </FormProvider>
  );
};
