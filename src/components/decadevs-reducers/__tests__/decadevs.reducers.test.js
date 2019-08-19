import decadevs, { initialState } from '../decadevs.reducer';

describe('INITIAL STATE', () => {
  test('is correct', () => {
    const action = { type: 'DUMMY_ACTION' };
    expect(decadevs(initialState, action)).toEqual(initialState);
  });
});

describe('GET_ALL_DECADEVS', () => {
  test('returns the correct state', () => {
    const action = {
      type: 'GET_ALL_DECADEVS',
      decadevs: {
        dummy: 'decadevs data'
      }
    };
    const expectedState = {
      ...initialState,
      decadevs: action.payload
    };

    expect(decadevs(initialState, action)).toEqual(expectedState);
  });
});
