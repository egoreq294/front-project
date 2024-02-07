import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
  getUserAuthData,
  saveJsonSettings,
  useJsonSettings,
} from '@entities/User';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { Caption } from '@shared/ui/Caption';
import { Modal } from '@shared/ui/Modal';

export const ArticlePageGreeting: FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('article');

  const [isOpen, setIsOpen] = useState(false);

  const { isArticlePageWasOpened } = useJsonSettings();
  const authData = useSelector(getUserAuthData);

  useEffect(() => {
    if (isArticlePageWasOpened || !authData) {
      return;
    }

    setIsOpen(true);
    dispatch(saveJsonSettings({ isArticlePageWasOpened: true }));
  }, [isArticlePageWasOpened, authData, dispatch]);

  return (
    <Modal
      lazy
      isOpen={isOpen}
      onClose={(): void => {
        setIsOpen(false);
      }}
      testId="ArticlePageGreeting"
    >
      <Caption
        label={t('welcome-to-article-page')}
        value={t('you-can-search-and-read-articles')}
      />
    </Modal>
  );
};
