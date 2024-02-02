import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';

import { StateSchema } from '@app/providers/StoreProvider';

type ActionCreator<Return, Arg, RejectValue> = (
  arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectValue }>;

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

export class TestAsyncThunk<Return, Arg, RejectValue> {
  dispatch: Dispatch;

  getState: () => StateSchema;

  actionCreator: ActionCreator<Return, Arg, RejectValue>;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  apiNew: jest.MockedFunctionDeep<AxiosStatic>;

  constructor(
    actionCreator: ActionCreator<Return, Arg, RejectValue>,
    state?: DeepPartial<StateSchema>,
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StateSchema);
    this.api = mockedAxios;
    this.apiNew = mockedAxios;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, {
      api: this.api,
    });

    return result;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async callThunkNew(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, {
      apiNew: this.apiNew,
    });

    return result;
  }
}
