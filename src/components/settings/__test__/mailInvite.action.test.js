import mailInviteBoundActionCreator from "../mailInvite.action";

function setUp() {
  const dispatch = async val => val;
  const data = {
    squadNo: "Squad 1"
  };
  return { data, dispatch };
}
describe("mailInviteBoundActionCreator", () => {
  it("should call api and update state", done => {
    const request = {
      post: () =>
        Promise.resolve({
          data: "dummy data"
        })
    };
    const { data, dispatch } = setUp();

    const getSpy = jest.spyOn(request, "post");

    mailInviteBoundActionCreator(data, request)(dispatch)
      .then(response => {
        expect(response).toBe("dummy data");
        done();
      })
      .catch(() => {
        // eslint-disable-next-line no-undef
        fail("should not catch");
      });

    expect(getSpy).toBeCalledWith("/invite/devs", data);
    expect(getSpy).toBeCalledTimes(1);
  });
});
