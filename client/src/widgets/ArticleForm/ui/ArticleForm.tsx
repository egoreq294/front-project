import React, { FC, Fragment, ReactElement } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { ArticleBlockTypeEnum } from '@entities/Article';
import { Card } from '@shared/ui/Card';
import { Input } from '@shared/ui/Input';
import { VStack } from '@shared/ui/Stack';
import { ERROR_MESSAGES } from '../model/constants/constants';
import { ArticleFormSchema } from '../model/types/ArticleFormSchema';
import { ArticleCodeBlock } from './ArticleBlocks/ArticleCodeBlock';
import { ArticleImageBlock } from './ArticleBlocks/ArticleImageBlock';
import { ArticleTextBlock } from './ArticleBlocks/ArticleTextBlock';
import { ArticleTypeTabs } from './ArticleTypeTabs';

interface ArticleFormProps {
  className?: string;
  areFieldsDisabled?: boolean;
}

export const ArticleForm: FC<ArticleFormProps> = ({
  className,
  areFieldsDisabled,
}) => {
  useFormContext();
  const { t } = useTranslation('article');

  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext<ArticleFormSchema>();

  const blocks = watch('blocks');

  return (
    <VStack gap="16" fullWidth className={className}>
      <Card fullWidth padding="24">
        <Controller
          name="title"
          control={control}
          rules={{ required: t(ERROR_MESSAGES.CanNotBeEmpty) }}
          render={({ field }): ReactElement => (
            <Input
              {...field}
              label={t('title')}
              placeholder={t('enter-title')}
              error={errors.title?.message}
              disabled={areFieldsDisabled}
            />
          )}
        />
      </Card>
      <Card fullWidth padding="24">
        <Controller
          name="subtitle"
          control={control}
          render={({ field }): ReactElement => (
            <Input
              {...field}
              label={t('subtitle')}
              placeholder={t('enter-subtitle')}
              disabled={areFieldsDisabled}
            />
          )}
        />
      </Card>
      <Card fullWidth padding="24">
        <Controller
          name="image"
          control={control}
          render={({ field }): ReactElement => (
            <Input
              {...field}
              label={t('image-url')}
              placeholder={t('enter-image-url')}
              disabled={areFieldsDisabled}
            />
          )}
        />
      </Card>
      <Card fullWidth padding="24">
        <ArticleTypeTabs />
      </Card>
      {blocks.map((block, index) => (
        <Fragment key={block.id}>
          {block.type === ArticleBlockTypeEnum.CODE && (
            <ArticleCodeBlock
              index={index}
              block={block}
              areFieldsDisabled={areFieldsDisabled}
            />
          )}
          {block.type === ArticleBlockTypeEnum.TEXT && (
            <ArticleTextBlock
              index={index}
              block={block}
              areFieldsDisabled={areFieldsDisabled}
            />
          )}
          {block.type === ArticleBlockTypeEnum.IMAGE && (
            <ArticleImageBlock
              index={index}
              block={block}
              areFieldsDisabled={areFieldsDisabled}
            />
          )}
        </Fragment>
      ))}
    </VStack>
  );
};
