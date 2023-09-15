import { ArticleDetailsSchema } from '@entities/Article';
import { CounterSchema } from '@entities/Counter';
import { ProfileSchema } from '@entities/Profile';
import { UserSchema } from '@entities/User';
import { AddCommentFormSchema } from '@features/AddCommentForm';
import { LoginSchema } from '@features/AuthByUsername';
import { ScrollSchema } from '@features/Scroll';
import { ArticleDetailsCommentSchema } from '@pages/ArticleDetailsPage';
import { ArticlesPageSchema } from '@pages/ArticlesPage';
import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  scroll: ScrollSchema;
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsComment?: ArticleDetailsCommentSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
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
