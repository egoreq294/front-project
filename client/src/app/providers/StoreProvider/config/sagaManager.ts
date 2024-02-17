import { Saga, Task } from 'redux-saga';

import { SagaManager, StateSchema } from './StateSchema';

export const createSagaManager = (
  runSaga: <S extends Saga>(saga: S, ...args: Parameters<S>) => Task,
  rootSaga: () => Generator,
): SagaManager => {
  const rootTask = runSaga(rootSaga);

  const injectedSagas: Partial<Record<keyof StateSchema, Task>> & {
    root: Task;
  } = { root: rootTask };

  return {
    add: (key, saga): void => {
      if (!key || injectedSagas[key]) {
        return;
      }

      const task = runSaga(saga);

      injectedSagas[key] = task;
    },

    remove: (key): void => {
      if (!key || !injectedSagas[key]) {
        return;
      }

      const task = injectedSagas[key];
      task?.cancel();

      delete injectedSagas[key];
    },
  };
};
