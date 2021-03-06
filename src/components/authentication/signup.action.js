export const USER_SIGNUP = 'USER_SIGNUP';
const signup = payload => ({
  type: USER_SIGNUP,
  payload
});

const setToken = payload => ({
  type: 'SET_TOKEN',
  payload
});

const setLoading = payload => ({
  type: 'LOADING',
  payload
});
const onError = payload => ({
  type: 'SET_ERROR',
  payload
});
const clearError = () => ({
  type: 'CLEAR_SIGNUP_ERROR'
});

export const clearErrorBoundActionCreator = () => dispatch => {
  dispatch(clearError());
};

const signupBoundActionCreator = (data, request) => async dispatch => {
  try {
    dispatch(setLoading(true));
    const response = await request.post('/users/signup', data);
    dispatch(signup(response.data));
    dispatch(setToken(response.data.token));
    dispatch(setLoading(false));
    return response.data;
  } catch (err) {
    dispatch(setLoading(false));
    return dispatch(onError(err));
  }
};

export default signupBoundActionCreator;
