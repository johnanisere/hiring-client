export const errorMessageExtrator = error => {
  console.log({ error });
  if (
    error &&
    error.response &&
    error.response.data &&
    error.response.data.error
  ) {
    return error.response.data.error;
  } else {
    return error.message;
  }
};
