import React, { FC, ReactElement } from 'react';
import { Controller, FieldErrors, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Input } from '@shared/ui/Input';
import { VStack } from '@shared/ui/Stack';
import { ERROR_MESSAGES } from '../../model/constants/constants';
import { ArticleFormSchema } from '../../model/types/ArticleFormSchema';
import { ArticleImageBlock as ArticleImageBlockType } from '../../model/types/ArticleFormSchema';
import { ArticleBlockContainer } from './ArticleBlockContainer';

interface ArticleImageBlockProps {
  className?: string;
  index: number;
  block: ArticleImageBlockType;
  areFieldsDisabled?: boolean;
}

export const ArticleImageBlock: FC<ArticleImageBlockProps> = ({
  className,
  index,
  block,
  areFieldsDisabled,
}) => {
  const { t } = useTranslation('article');
  const {
    control,
    formState: { errors: formStateErrors },
  } = useFormContext<ArticleFormSchema>();

  const errors = formStateErrors.blocks?.[
    index
  ] as FieldErrors<ArticleImageBlockType>;

  return (
    <ArticleBlockContainer className={className} block={block}>
      <VStack gap="8" fullWidth>
        <Controller
          name={`blocks.${index}.title`}
          control={control}
          rules={{ required: t(ERROR_MESSAGES.CanNotBeEmpty) }}
          render={({ field }): ReactElement => (
            <Input
              {...field}
              label={t('image-title')}
              placeholder={t('enter-image-title')}
              error={errors?.title?.message}
              disabled={areFieldsDisabled}
            />
          )}
        />
        <Controller
          name={`blocks.${index}.src`}
          control={control}
          rules={{ required: t(ERROR_MESSAGES.CanNotBeEmpty) }}
          render={({ field }): ReactElement => (
            <Input
              {...field}
              label={t('image-url')}
              placeholder={t('enter-image-url')}
              error={errors?.src?.message}
              disabled={areFieldsDisabled}
            />
          )}
        />
      </VStack>
    </ArticleBlockContainer>
  );
};
