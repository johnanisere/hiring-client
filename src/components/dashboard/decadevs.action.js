export const GET_ALL_DECADEVS = 'GET_ALL_DECADEVS';

export const getDevs = payload => ({
  type: GET_ALL_DECADEVS,
  payload,
});
export const setLoading = payload => ({
  type: 'GET_ALL_DECADEVS_LOADING',
  payload,
});

export const onError = payload => ({
  type: 'SET_ERROR',
  payload,
});
export const getTotal = payload => ({
  type: 'GET_TOTAL',
  payload,
});

const getAllDecadevs = (request, pod) => async dispatch => {
  try {
    dispatch(setLoading(true));

    const response = await request.get(
      `/users/decadevs/${pod ? '?pod=' + pod : ''}`,
    );

    dispatch(getDevs(response.data.allDecadevs));
    dispatch(getTotal(response.data.total));

    dispatch(setLoading(false));
    return response.data;
  } catch (err) {
    dispatch(setLoading(false));
    return dispatch(onError(err));
  }
};

export default getAllDecadevs;
