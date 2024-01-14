import { LoginSchema } from '../../types/loginSchema';
import { loginActions, loginReducer } from '../loginSlice';

describe('loginSlice test suite', () => {
  test('should return login state with username', () => {
    const state: DeepPartial<LoginSchema> = {
      email: '',
    };

    expect(
      loginReducer(
        state as LoginSchema,
        loginActions.setEmail('test@test.test'),
      ),
    ).toEqual({
      username: 'test@test.test',
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
