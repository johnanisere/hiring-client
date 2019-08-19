import authentication from '../authentication.reducer';

describe('INITIAL_STATE', () => {
  test('is correct', () => {
    const action = { type: 'dummy_action' };
    const initialState = { token: '' };

    expect(authentication(undefined, action)).toEqual(initialState);
  });
});

describe('SET_TOKEN', () => {
  test('returns the correct state', () => {
    const action = { type: 'SET_TOKEN', payload: 'tokenstring' };
    const expectedState = { token: 'tokenstring' };

    expect(authentication(undefined, action)).toEqual(expectedState);
  });
});
