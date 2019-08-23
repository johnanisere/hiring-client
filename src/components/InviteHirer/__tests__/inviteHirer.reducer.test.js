import user, { initialState } from '../inviteHirer.reducer';

describe('INITIAL_STATE', () => {
  test('is correct', () => {
    const action = { type: 'dummy_action' };
    expect(user(undefined, action)).toEqual(initialState);
  });
});

describe('INVITE_HIRER', () => {
  test('returns the correct state', () => {
    const action = {
      type: 'INVITE_HIRER',
      payload: {
        dummy: 'user data'
      }
    };
    const expectedState = {
      ...initialState,
      hirer: {
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

describe('INVITE_HIRER_ERROR', () => {
  test('returns the correct state', () => {
    const action = {
      type: 'INVITE_HIRER_ERROR',
      payload: 'error message'
    };
    const expectedState = {
      ...initialState,
      error: 'error message'
    };

    expect(user(initialState, action)).toEqual(expectedState);
  });
});
