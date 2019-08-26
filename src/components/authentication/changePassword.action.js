const changePassBoundActionCreator = (
  data,
  request,
  token,
  activityIndicator,
  handleError,
  onSuccess,
  token
) => async () => {
  try {
    activityIndicator(true);
    const response = await request.put("/users/change-password", data, {
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

export default changePassBoundActionCreator;
