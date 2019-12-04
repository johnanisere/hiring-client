export const SCHEDULE_TEST = "SCHEDULE_TEST";

export const scheduleTest = payload => ({
  type: SCHEDULE_TEST,
  payload
});
export const setLoading = payload => ({
  type: "LOADING",
  payload
});

export const onError = payload => ({
  type: "SET_ERROR",
  payload
});

const delay = ms => new Promise(res => setTimeout(res, ms));

export const scheduleTestBoundActionCreator = (
  data,
  request,
  onSuccess
) => async dispatch => {
  try {
  
    dispatch(setLoading(true));
    const res = await request.post("/tests/invite", data);
  
    onSuccess(res.data.message);
    dispatch(scheduleTest(res.data.testData));
    dispatch(setLoading(false));
    await delay(2000);
    window.history.back();
    return res.data.testData;
  } catch (err) {
    dispatch(setLoading(false));
    return dispatch(onError(err));
  }
};

export default scheduleTestBoundActionCreator;
