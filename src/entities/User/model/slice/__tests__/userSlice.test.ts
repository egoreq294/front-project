import { userActions, userReducer } from '../userSlice';
import { UserSchema } from '../../types/user';

describe('counterSlice test suite', () => {
  test('setAuthData should return auth data', () => {
    expect(
      userReducer(
        { _inited: true },
        userActions.setAuthData({
          username: 'test',
          id: '1',
        }),
      ),
    ).toEqual({
      authData: {
        username: 'test',
        id: '1',
      },
      _inited: true,
    });
  });
  test('logout should return empty auth data ', () => {
    const state: UserSchema = {
      authData: {
        username: 'test',
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
