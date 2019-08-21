const updatePasswordBoundActionCreator = (
  data,
  request,
  token,
  handleError
) => async () => {
  try {
    const response = await request.put('/users/update-password', data, {
      headers: {
        authorization: `Bearer ${token}`
      }
    });

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export default updatePasswordBoundActionCreator;
