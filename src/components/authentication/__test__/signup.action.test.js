import signupBoundActionCreator from '../signup.action';

function setUp() {
  const dispatch = async val => val;
  const data = {
    name: 'Egbo Uchenna',
    email: 'egbouche@gmail.com',
    password: '123456',
    confirmPassword: '123456'
  };
  return { data, dispatch };
}
describe('signupBoundActionCreator', () => {
  it('should call api and update state', done => {
    const request = {
      post: () =>
        Promise.resolve({
          data: 'dummy data'
        })
    };
    const { data, dispatch } = setUp();

    const getSpy = jest.spyOn(request, 'post');

    signupBoundActionCreator(data, request)(dispatch)
      .then(response => {
        expect(response).toBe('dummy data');
        done();
      })
      .catch(() => {
        // eslint-disable-next-line no-undef
        fail('should not catch');
      });

    expect(getSpy).toBeCalledWith('/users/signup', data);
    expect(getSpy).toBeCalledTimes(1);
  });
});
