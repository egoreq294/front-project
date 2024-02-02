import { UserSchema } from '../../types/user';
import { userActions, userReducer } from '../userSlice';

describe('counterSlice test suite', () => {
  test('setAuthData should return auth data', () => {
    expect(
      userReducer(
        { _inited: true },
        userActions.setAuthData({
          email: 'test@test.test',
          id: '1',
        }),
      ),
    ).toEqual({
      authData: {
        email: 'test@test.test',
        id: '1',
      },
      _inited: true,
    });
  });
  test('logout should return empty auth data ', () => {
    const state: UserSchema = {
      authData: {
        email: 'test@test.test',
        id: '1',
      },
      _inited: true,
    };

    expect(userReducer(state, userActions.logout())).toEqual({
      authData: undefined,
      _inited: true,
    });
  });
});
