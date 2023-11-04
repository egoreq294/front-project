import cn from 'classnames';
import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { EMPTY_STRING } from '@shared/constants/common';
import { DynamicModuleLoader } from '@shared/lib/components/DynamicModuleLoader';
import { ReducerList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { Button } from '@shared/ui/Button';
import { Input } from '@shared/ui/Input';
import { getCommentFormText } from '../model/selectors/addCommentFormSelectors';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../model/slices/addCommentFormSlice';

import styles from './styles.module.scss';

interface AddCommentFormProps {
  className?: string;
  onSendComment: (value: string) => void;
}

const reducers: ReducerList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm: FC<AddCommentFormProps> = ({
  className,
  onSendComment,
}) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const text = useSelector(getCommentFormText);

  const onTextChange = useCallback(
    (value: string): void => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text);
    onTextChange(EMPTY_STRING);
  }, [text, onSendComment, onTextChange]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={cn(styles.AddCommentForm, className)}>
        <Input
          className={styles.Input}
          placeholder={t('enter-comment-text')}
          value={text}
          onChange={onTextChange}
        />
        <Button variant="Primary" onClick={onSendHandler}>
          {t('send')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default AddCommentForm;
