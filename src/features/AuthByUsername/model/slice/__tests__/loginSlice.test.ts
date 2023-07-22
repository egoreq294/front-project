import { loginActions, loginReducer } from '../loginSlice';
import { LoginSchema } from '../../types/loginSchema';

describe('counterSlice test suite', () => {
  test('should return login state with username', () => {
    const state: DeepPartial<LoginSchema> = {
      username: '',
    };

    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername('test test')),
    ).toEqual({
      username: 'test test',
    });
  });

  test('should return login state with password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '',
    };

    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword('1234')),
    ).toEqual({
      password: '1234',
    });
  });
});
