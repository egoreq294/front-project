import React, { FC, ReactElement } from 'react';
import { Controller, FieldErrors, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { TextArea } from '@shared/ui/TextArea';
import { ERROR_MESSAGES } from '../../model/constants/constants';
import { ArticleFormSchema } from '../../model/types/ArticleFormSchema';
import { ArticleCodeBlock as ArticleCodeBlockType } from '../../model/types/ArticleFormSchema';
import { ArticleBlockContainer } from './ArticleBlockContainer';

interface ArticleCodeBlockProps {
  className?: string;
  index: number;
  block: ArticleCodeBlockType;
  areFieldsDisabled?: boolean;
}

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = ({
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
  ] as FieldErrors<ArticleCodeBlockType>;

  return (
    <ArticleBlockContainer className={className} block={block}>
      <Controller
        name={`blocks.${index}.code`}
        control={control}
        rules={{ required: t(ERROR_MESSAGES.CanNotBeEmpty) }}
        render={({ field }): ReactElement => (
          <TextArea
            {...field}
            label={t('code')}
            placeholder={t('enter-code')}
            error={errors?.code?.message}
            disabled={areFieldsDisabled}
          />
        )}
      />
    </ArticleBlockContainer>
  );
};
