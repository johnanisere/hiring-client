export const SCHEDULE_INTERVIEW = 'SCHEDULE_INTERVIEW';

export const scheduleInterview = payload => ({
  type: SCHEDULE_INTERVIEW,
  payload
});
export const setLoading = payload => ({
  type: 'SCHEDULE_INTERVIEW_LOADING',
  payload
});

export const onError = payload => ({
  type: 'SCHEDULE_INTERVIEW_ERROR',
  payload
});

export const scheduleInterviewBoundActionCreator = (
  data,
  request
) => async dispatch => {
  try {
    dispatch(setLoading(true));
    const res = await request.post('/interview/invite', data);
    dispatch(scheduleInterview(res.data));
    dispatch(setLoading(false));
    return res.data;
  } catch (err) {
    dispatch(setLoading(false));
    return dispatch(onError(err));
  }
};

export default scheduleInterviewBoundActionCreator;
