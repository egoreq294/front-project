import { loginActions, loginReducer } from '../loginSlice';
import { LoginSchema } from '../../types/loginSchema';

describe('counterSlice test suite', () => {
  test('should return login state with username', () => {
    const state: LoginSchema = {
      username: '',
      password: '',
      isLoading: false,
      error: undefined,
    };

    expect(loginReducer(state, loginActions.setUsername('test test'))).toEqual({
      username: 'test test',
      password: '',
      isLoading: false,
      error: undefined,
    });
  });

  test('should return login state with password', () => {
    const state: LoginSchema = {
      username: '',
      password: '',
      isLoading: false,
      error: undefined,
    };

    expect(loginReducer(state, loginActions.setPassword('1234'))).toEqual({
      username: '',
      password: '1234',
      isLoading: false,
      error: undefined,
    });
  });
});
