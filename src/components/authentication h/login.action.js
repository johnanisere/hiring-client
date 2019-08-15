export const USER_LOGIN = 'USER_LOGIN';
const login = payload => ({
  type: USER_LOGIN,
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
  type: 'USER_LOGIN_ERROR',
  payload
});

const loginBoundActionCreator = (data, request) => async dispatch => {
  try {
    dispatch(setLoading(true));
    const response = await request({
      method: 'POST',
      url: '/users/login',
      data
    });
    dispatch(login(response.data));
    dispatch(setToken(response.data.token));
    dispatch(setLoading(false));
    return response.data;
  } catch (err) {
    dispatch(setLoading(false));
    dispatch(onError(err));
  }
};

export default loginBoundActionCreator;
