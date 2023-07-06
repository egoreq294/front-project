import { StateSchema } from '@app/providers/StorePovider';
import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';

type ActionCreator<Return, Arg, RejectValue> = (
  arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectValue }>;

export class TestAsyncThunk<Return, Arg, RejectValue> {
  dispatch: Dispatch;

  getState: () => StateSchema;

  actionCreator: ActionCreator<Return, Arg, RejectValue>;

  constructor(actionCreator: ActionCreator<Return, Arg, RejectValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, undefined);

    return result;
  }
}
