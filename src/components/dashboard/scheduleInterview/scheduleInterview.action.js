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
  onToggle
) => async dispatch => {
  try {
    dispatch(setLoading(true));
    const response = await request.post(
      `${process.env.REACT_APP_CALENDAR_BASE_URL}/create-event`,
      data
    );

    const payload = {
      hiringPartner: data.email,
      decaDev: data.devemail,
      location: data.location,
      startTime: data.startTime,
      endTime: data.endTime,
      description: data.description,
      eventId: response.data.id
    };
    const res = await request.post('/interview/invite', payload);

    dispatch(setLoading(false));

    dispatch(scheduleInterview(res.data));

    return res.data;
  } catch (err) {
    if (err.response && err.response.status >= 400) {
      const response = await request.post(
        `${process.env.REACT_APP_CALENDAR_BASE_URL}/authenticate-user`,
        { email: data.email }
      );
      window.open(response.data.authUrl, '_blank');
      onToggle();
    }
    // dispatch(setLoading(false));
    // return dispatch(onError(err));
  }
};

export const authorizeBoundActionCreator = (
  data,
  request,
  onToggle,
  callback
) => async dispatch => {
  try {
    dispatch(setLoading(true));
    const response = await request.post(
      `${process.env.REACT_APP_CALENDAR_BASE_URL}/authorize-user`,
      data
    );
    callback && callback(undefined, onToggle);
    console.log(response);

    // dispatch(scheduleInterview(response.data));
    dispatch(setLoading(false));
    return response.data;
  } catch (err) {
    console.log({ err });

    // dispatch(setLoading(false));
    // return dispatch(onError(err));
  }
};

export default scheduleInterviewBoundActionCreator;
