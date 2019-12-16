export const HIRER_LOGIN = 'HIRER_LOGIN';
const hirerLogin = payload => ({
  type: HIRER_LOGIN,
  payload
});

const setToken = payload => ({
  type: 'SET_TOKEN',
  payload
});

export const setLoading = payload => ({
  type: 'LOADING',
  payload
});
export const onError = payload => ({
  type: 'SET_ERROR',
  payload
});

const hirerLoginBoundActionCreator = (
  data,
  request,
  navigateToDashboard
) => async dispatch => {
  
  try {
    dispatch(setLoading(true));
    const response = await request.post('/hirer/login', data);
  
    dispatch(hirerLogin(response.data));
    dispatch(setToken(response.data.token));
    dispatch(setLoading(false));
    navigateToDashboard();
    return response.data;
  } catch (err) {
    dispatch(setLoading(false));
    dispatch(onError(err));
    return;
  }
};

export default hirerLoginBoundActionCreator;
