import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { ArticleDetailsSchema } from '@entities/Article';
import { CounterSchema } from '@entities/Counter';
import { UserSchema } from '@entities/User';
import { AddCommentFormSchema } from '@features/AddCommentForm';
import { AuthSchema } from '@features/AuthByEmail';
import { EditableCardProfileSchema } from '@features/EditableProfileCard';
import { ScrollSchema } from '@features/Scroll';
import { ArticleDetailsPageSchema } from '@pages/ArticleDetailsPage';
import { ArticlesPageSchema } from '@pages/ArticlesPage';
import { rtkApi } from '@shared/api/rtkApi';
import { PopupSchema } from '@shared/lib/popups/types';

export interface StateSchema {
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
  counter: CounterSchema;
  popup: PopupSchema;
  user: UserSchema;
  scroll: ScrollSchema;
  authForm?: AuthSchema;
  editableCardProfile?: EditableCardProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
