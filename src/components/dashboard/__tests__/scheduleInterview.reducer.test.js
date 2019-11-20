import interviewDetails, { initialState } from '../scheduleInterview.reducer';

describe('INITIAL_STATE', () => {
  test('is correct', () => {
    const action = { type: 'dummy_action' };
    expect(interviewDetails(undefined, action)).toEqual(initialState);
  });
});

describe('SCHEDULE_INTERVIEW', () => {
  test('returns the correct state', () => {
    const action = {
      type: 'SCHEDULE_INTERVIEW',
      payload: {
        dummy: 'user data'
      }
    };
    const expectedState = {
      ...initialState,
      interviewDetails: {
        dummy: 'user data'
      }
    };

    expect(interviewDetails(initialState, action)).toEqual(expectedState);
  });
});

describe('SCHEDULE_INTERVIEW_LOADING', () => {
  test('returns the correct state', () => {
    const action = {
      type: 'SCHEDULE_INTERVIEW_LOADING',
      payload: true
    };
    const expectedState = {
      ...initialState,
      loading: true
    };

    expect(interviewDetails(initialState, action)).toEqual(expectedState);
  });
});
