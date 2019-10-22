export const UPDATE_DEV = 'UPDATE_DEV';

const updateDev = payload => ({
  type: 'UPDATE_DEV',
  payload
});

export const setLoading = payload => ({
  type: 'LOADING',
  payload
});
export const onError = payload => ({
  type: 'USER_LOGIN_ERROR',
  payload
});

const updateUserDetailBoundActionCreator = (
  payload,
  email,
  request,
  token,
  type
) => async dispatch => {
  try {
    dispatch(setLoading(true));
    const response = await request.put(
      `/users/update/${type}/${email}`,
      payload,
      {
        headers: {
          authorization: `Bearer ${token}`
        }
      }
    );
    console.log({ response });

    dispatch(updateDev(response.data.user));
    dispatch(setLoading(false));

    return response.data;
  } catch (err) {
    dispatch(setLoading(false));
    return dispatch(onError(err));
  }
};

export default updateUserDetailBoundActionCreator;
