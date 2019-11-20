export const onError = payload => ({
  type: 'SET_ERROR',
  payload
});

const updatePasswordBoundActionCreator = (
  data,
  request,
  token,
  activityIndicator,
  onSuccess
) => async dispatch => {
  try {
    activityIndicator(true);
    const response = await request.put('/users/update-password', data, {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
    onSuccess(response.data);
    activityIndicator(false);

    return response.data;
  } catch (err) {
    dispatch(onError(err));
    activityIndicator(false);
  }
};

export default updatePasswordBoundActionCreator;
