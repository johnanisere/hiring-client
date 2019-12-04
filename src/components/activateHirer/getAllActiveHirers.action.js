export const GET_ALL_ACTIVE_HIRER = 'GET_ALL_ACTIVE_HIRER';

export const getActive = payload => ({
  type: GET_ALL_ACTIVE_HIRER,
  payload
});
export const setLoading = payload => ({
  type: 'GET_ALL_ACTIVE_HIRER_LOADING',
  payload
});

export const onError = payload => ({
  type: 'SET_ERROR',
  payload
});

export const getAllActiveHirers = request => async dispatch => {
  try {
    dispatch(setLoading(true));
    const response = await request.get('/hirer/activated');
    dispatch(getActive(response.data));
    dispatch(setLoading(false));
    return response.data;
  } catch (err) {
    dispatch(setLoading(false));
    return dispatch(onError(err));
  }
};

export default getAllActiveHirers;