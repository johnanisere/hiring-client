const updatePasswordBoundActionCreator = (
  data,
  request,
  token,
  activityIndicator,
  handleError,
  onSuccess
) => async () => {
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
    handleError(err);
    activityIndicator(false);
  }
};

export default updatePasswordBoundActionCreator;
