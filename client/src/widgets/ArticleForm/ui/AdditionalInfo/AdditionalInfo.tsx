import cn from 'classnames';
import React, { FC, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { ArticleBlockTypeEnum } from '@entities/Article';
import { Button } from '@shared/ui/Button';
import { Card } from '@shared/ui/Card';
import { VStack } from '@shared/ui/Stack';
import { getBlockInitialValue } from '../../model/lib/utils/getTextBlockInitialValue';
import { ArticleFormSchema } from '../../model/types/ArticleFormSchema';
import { ArticleBlockSelect } from './ArticleBlockSelect';

import styles from './styles.module.scss';

interface AdditionalInfoProps {
  className?: string;
  onSubmit: () => void;
  areFieldsDisabled?: boolean;
}

export const AdditionalInfo: FC<AdditionalInfoProps> = ({
  className,
  onSubmit,
  areFieldsDisabled,
}) => {
  const { t } = useTranslation('article');
  const { setValue, getValues, handleSubmit } =
    useFormContext<ArticleFormSchema>();

  const [articleBlock, setArticleBlock] = useState<ArticleBlockTypeEnum>(
    ArticleBlockTypeEnum.TEXT,
  );

  const onArticleBlockChange = (value: ArticleBlockTypeEnum): void => {
    setArticleBlock(value);
  };

  const onAddBlock = (): void => {
    const blocks = getValues('blocks');

    const newBlock = getBlockInitialValue(articleBlock);

    const newBlocks = [...blocks, newBlock];

    setValue('blocks', newBlocks);
  };

  return (
    <Card padding="24" className={cn(styles.Card, className)}>
      <VStack gap="16" fullWidth>
        <ArticleBlockSelect
          value={articleBlock}
          onChange={onArticleBlockChange}
          disabled={areFieldsDisabled}
        />
        <Button fullWidth onClick={onAddBlock} disabled={areFieldsDisabled}>
          {t('add-block')}
        </Button>
        <Button
          fullWidth
          onClick={handleSubmit(onSubmit)}
          variant="Success"
          disabled={areFieldsDisabled}
        >
          {t('create-article')}
        </Button>
      </VStack>
    </Card>
  );
};
