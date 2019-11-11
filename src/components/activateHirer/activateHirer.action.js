export const GET_ALL_INACTIVE_HIRER = 'GET_ALL_INACTIVE_HIRER';

export const getInactive = payload => ({
  type: GET_ALL_INACTIVE_HIRER,
  payload
});
export const setLoading = payload => ({
  type: 'GET_ALL_INACTIVE_HIRER_LOADING',
  payload
});

export const onError = payload => ({
  type: 'SET_ERROR',
  payload
});

export const getAllInactive = request => async dispatch => {
  try {
    dispatch(setLoading(true));
    const response = await request.get('/hirer/unactivated');
    dispatch(getInactive(response.data));
    dispatch(setLoading(false));
    return response.data;
  } catch (err) {
    dispatch(setLoading(false));
    return dispatch(onError(err));
  }
};

export default getAllInactive;
