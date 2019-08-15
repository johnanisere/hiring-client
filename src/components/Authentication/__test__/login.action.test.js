import loginBoundActionCreator from "../login.action";
function setUp() {
  const dispatch = async val => val;
  const data = {
    email: "j@gmail.com",
    password: "weybudjcbdc"
  };
  return { data, dispatch };
}
describe("fetchCoinAction", () => {
  it("should call api and update coins state", done => {
    const request = {
      post: () =>
        Promise.resolve({
          data: "dummy data"
        })
    };
    const { data, dispatch } = setUp();

    const getSpy = jest.spyOn(request, "post");

    loginBoundActionCreator(data, request)(dispatch)
      .then(response => {
        expect(response).toBe("dummy data");
        done();
      })
      .catch(() => {
        fail("should not catch");
      });

    expect(getSpy).toBeCalledWith("/users/login", data);
    expect(getSpy).toBeCalledTimes(1);
  });
});
