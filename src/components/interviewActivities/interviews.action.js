export const GET_ALL_INTERVIEWS = 'GET_ALL_INTERVIEWS';

export const getInterviews = payload => ({
  type: GET_ALL_INTERVIEWS,
  payload
});
export const setLoading = payload => ({
  type: 'GET_ALL_INTERVIEWS_LOADING',
  payload
});

export const onError = payload => ({
  type: 'SET_ERROR',
  payload
});

export const getAllInterviews = request => async dispatch => {
  try {
    dispatch(setLoading(true));
    const response = await request.get('/interview/get-interviews');

    dispatch(getInterviews(response.data.allInterviews));
    dispatch(setLoading(false));
    return response.data;
  } catch (err) {
    dispatch(setLoading(false));
    return dispatch(onError(err));
  }
};

export default getAllInterviews;
