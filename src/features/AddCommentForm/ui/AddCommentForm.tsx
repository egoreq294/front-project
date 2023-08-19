import React, { FC, useCallback } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { Input } from '@shared/ui/Input/Input';
import { Button } from '@shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
  getCommentFormError,
  getCommentFormText,
} from '../model/selectors/addCommentFormSelectors';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../model/slices/addCommentFormSlice';
import { DynamicModuleLoader } from '@shared/lib/components/DynamicModuleLoader';
import { ReducerList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { EMPTY_STRING } from '@shared/constants/common';

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
  const error = useSelector(getCommentFormError);

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
