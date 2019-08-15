const changePassBoundActionCreator = (
  data,
  request,
  activityIndicator,
  handleError,
  onSuccess
) => async () => {
  try {
    activityIndicator(true);
    const response = await request.put("/users/change-password", data, {
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphbmVkb2VAZXhhbXBsZS5jb20iLCJpYXQiOjE1NjU5NjAyOTYsImV4cCI6MTU2NTk2Mzg5Nn0.mwKMRibSeffTEamTYiuWlYy09dtBG57zAgY7ySWb-OE"
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
