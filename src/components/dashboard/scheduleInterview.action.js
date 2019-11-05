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
  request,
  onSuccess
) => async dispatch => {
  try {
    dispatch(setLoading(true));
    const res = await request.post('/interview/invite', data);
    onSuccess(res.data.message);
    dispatch(scheduleInterview(res.data.interviewData));
    dispatch(setLoading(false));
    window.location.href = '/dashboard';
    return res.data.interviewData;
  } catch (err) {
    dispatch(setLoading(false));
    return dispatch(onError(err));
  }
};

export default scheduleInterviewBoundActionCreator;
