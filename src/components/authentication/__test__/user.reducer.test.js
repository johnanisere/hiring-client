import user, { initialState } from '../user.reducer';

describe('INITIAL_STATE', () => {
  test('is correct', () => {
    const action = { type: 'dummy_action' };
    expect(user(undefined, action)).toEqual(initialState);
  });
});

describe('USER_LOGIN', () => {
  test('returns the correct state', () => {
    const action = {
      type: 'USER_LOGIN',
      payload: {
        dummy: 'user data'
      }
    };
    const expectedState = {
      ...initialState,
      data: {
        dummy: 'user data'
      }
    };

    expect(user(initialState, action)).toEqual(expectedState);
  });
});

describe('LOADING', () => {
  test('returns the correct state', () => {
    const action = {
      type: 'LOADING',
      payload: true
    };
    const expectedState = {
      ...initialState,
      loading: true
    };

    expect(user(initialState, action)).toEqual(expectedState);
  });
});
