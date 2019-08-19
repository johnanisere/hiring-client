import changePassBoundActionCreator from "../changePassword.action";

function setUp() {
  const data = {
    newPassword: "weybudjcbdc",
    confirmPassword: "weybudjcbdc"
  };
  const config = {
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphbmVkb2VAZXhhbXBsZS5jb20iLCJpYXQiOjE1NjU5NjAyOTYsImV4cCI6MTU2NTk2Mzg5Nn0.mwKMRibSeffTEamTYiuWlYy09dtBG57zAgY7ySWb-OE"
    }
  };
  const activityIndicator = () => jest.fn();
  const handleError = () => jest.fn();
  const onSuccess = () => jest.fn();

  return { data, config, activityIndicator, onSuccess, handleError };
}
describe("changePassBoundActionCreator", () => {
  it("should call api and update state", done => {
    const request = {
      put: () =>
        Promise.resolve({
          data: "dummy data"
        })
    };
    const { data, config, activityIndicator, onSuccess, handleError } = setUp();

    const getSpy = jest.spyOn(request, "put");

    changePassBoundActionCreator(
      data,
      request,
      activityIndicator,
      handleError,
      onSuccess
    )()
      .then(response => {
        expect(response).toBe("dummy data");
        done();
      })
      .catch(() => {
        // eslint-disable-next-line no-undef
        fail("should not catch");
      });

    expect(getSpy).toBeCalledWith("/users/change-password", data, config);
    expect(getSpy).toBeCalledTimes(1);
  });
});
