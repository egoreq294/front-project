import { ListBox } from '@shared/ui/ListBox/ListBox';
import { Page } from '@widgets/Page/Page';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
  const { t } = useTranslation('main');
  const [state, setState] = useState<string>('');

  return (
    <Page>
      {t('main-page')}
      <ListBox
        defaultValue="Выберите значение"
        items={[
          { content: 'Яблоко', value: 'apple' },
          { content: 'Апельсин', value: 'orange', disabled: true },
          { content: 'Арбуз', value: 'watermelon' },
        ]}
        value={state}
        onChange={(value: string): void => {
          setState(value);
        }}
      />
    </Page>
  );
};

export default MainPage;
