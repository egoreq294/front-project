import { StoryFn } from '@storybook/react';
import React from 'react';

// eslint-disable-next-line egoreq-plugin/layer-imports
import '@app/styles/index.scss';
import styles from './styles.module.scss';

export const StyleDecorator = (StoryComponent: StoryFn): JSX.Element => (
  <div className={styles.Decorator}>
    <StoryComponent />
  </div>
);
