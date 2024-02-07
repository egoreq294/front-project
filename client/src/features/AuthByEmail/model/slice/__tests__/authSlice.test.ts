import { AuthSchema } from '../../types/authSchema';
import { authActions, authReducer } from '../authSlice';

describe('authSlice test suite', () => {
  test('should return login state with email', () => {
    const state: DeepPartial<AuthSchema> = {
      email: '',
    };

    expect(
      authReducer(state as AuthSchema, authActions.setEmail('test@test.test')),
    ).toEqual({
      email: 'test@test.test',
    });
  });

  test('should return login state with password', () => {
    const state: DeepPartial<AuthSchema> = {
      password: '',
    };

    expect(
      authReducer(state as AuthSchema, authActions.setPassword('1234')),
    ).toEqual({
      password: '1234',
    });
  });
});
