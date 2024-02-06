import React, { FC, ReactElement } from 'react';
import { Controller, FieldErrors, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Input } from '@shared/ui/Input';
import { VStack } from '@shared/ui/Stack';
import { TextArea } from '@shared/ui/TextArea';
import { ERROR_MESSAGES } from '../../model/constants/constants';
import { ArticleFormSchema } from '../../model/types/ArticleFormSchema';
import { ArticleTextBlock as ArticleTextBlockType } from '../../model/types/ArticleFormSchema';
import { ArticleBlockContainer } from './ArticleBlockContainer';

interface ArticleTextBlockProps {
  className?: string;
  index: number;
  block: ArticleTextBlockType;
  areFieldsDisabled?: boolean;
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = ({
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
  ] as FieldErrors<ArticleTextBlockType>;

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
              label={t('text-title')}
              placeholder={t('enter-text-title')}
              error={errors?.title?.message}
              disabled={areFieldsDisabled}
            />
          )}
        />
        <Controller
          name={`blocks.${index}.paragraphs`}
          control={control}
          rules={{ required: t(ERROR_MESSAGES.CanNotBeEmpty) }}
          render={({ field }): ReactElement => (
            <TextArea
              {...field}
              label={t('paragraphs-text')}
              placeholder={t('enter-text')}
              error={errors?.paragraphs?.message}
              disabled={areFieldsDisabled}
            />
          )}
        />
      </VStack>
    </ArticleBlockContainer>
  );
};
