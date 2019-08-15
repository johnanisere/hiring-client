
const changePassBoundActionCreator = (data, request,activityIndicator,handleError,onSuccess) => async dispatch => {
  try {
    activityIndicator()
    const response = await request({
      method: 'PUT',
      url: '/change-password',
      data
    });
    onSuccess(response.data);
    activityIndicator()
    return response.data;
  } catch (err) {
    activityIndicator()
    handleError(err);
  }
};

export default changePassBoundActionCreator;
