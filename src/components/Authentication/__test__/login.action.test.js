import loginBoundActionCreator from '../login.action';
function setUp() {
  const dispatch = val => val;

  const data = {
    email: 'j@g.com',
    password: 'thvsdbjhdsbchdjsj'
  };
  return { dispatch, data };
}
describe('loginBoundActionCreator', () => {
  const request = {
    post: () =>
      Promise.resolve({
        data: 'dummy data'
      })
  };

  it('should call api and update state', done => {
    const { dispatch, data } = setUp();

    const getSpy = jest.spyOn(request, 'post');

    loginBoundActionCreator(data, request)(dispatch)
      .then(response => {
        expect(Object.keys(response)).toEqual(
          expect.arrayContaining(['type', 'payload'])
        );
        done();
      })
      .catch(() => {
        // fail('should not catch');
      });

    // expect(getSpy).toBeCalledWith('/users/login');
    // expect(getSpy).toBeCalledTimes(1);
  }, 30000);
});
