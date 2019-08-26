export const USER_LOGIN = "USER_LOGIN";
const login = payload => ({
  type: USER_LOGIN,
  payload
});

const setToken = payload => ({
  type: "SET_TOKEN",
  payload
});

export const setLoading = payload => ({
  type: "LOADING",
  payload
});
export const onError = payload => ({
  type: "USER_LOGIN_ERROR",
  payload
});

const loginBoundActionCreator = (
  data,
  request,
  navigateToDashboard
) => async dispatch => {
  try {
    dispatch(setLoading(true));
    const response = await request.post("/users/login", data);
    dispatch(login(response.data));
    dispatch(setToken(response.data.token));
    dispatch(setLoading(false));
    navigateToDashboard();
    return response.data;
  } catch (err) {
    dispatch(setLoading(false));
    return dispatch(onError(err));
  }
};

export default loginBoundActionCreator;
