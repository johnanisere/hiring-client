export const REGISTER_HIRER = 'REGISTER_HIRER';
const hirer = payload => ({
  type: REGISTER_HIRER,
  payload
});

export const setLoading = payload => ({
  type: 'LOADING',
  payload
});
export const onError = payload => ({
  type: 'REGISTER_HIRER_ERROR',
  payload
});

const registerHirerBoundActionCreator = (data, request) => async dispatch => {
  try {
    dispatch(setLoading(true));
    const response = await request.post('/hirer/signup', data);
    dispatch(hirer(response.data));
    dispatch(setLoading(false));

    return response.data;
  } catch (err) {
    dispatch(setLoading(false));
    return dispatch(onError(err));
  }
};
export default registerHirerBoundActionCreator;
