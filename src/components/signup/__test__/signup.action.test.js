import signupBoundActionCreator from './../signup.action';
import { fail } from 'assert';

function setUp() {
  const dispatch = async val => val;
  const data = {
    email: 'egbouchenna001@gmail.com',
    password: '123456',
    confirmPassword: '123456'
  };

  const setLoading = () => jest.fn();
  const setError = () => jest.fn();
  const onSuccess = () => jest.fn();
  return { data, dispatch, setError, setLoading, onSuccess };
}

describe('signupBoundActionCreator', () => {
  it('should call api and update state', done => {
    const request = {
      post: () =>
        Promise.resolve({
          data: 'dummy data'
        })
    };
    const { data, dispatch, setLoading, setError, onSuccess } = setUp();

    const getSpy = jest.spyOn(request, 'post');

    signupBoundActionCreator(data, request, setLoading, setError, onSuccess)(
      dispatch
    )
      .then(response => {
        expect(response).toBe('dummy data');
        done();
      })
      .catch(() => {
        fail('should not catch');
      });

    expect(getSpy).toBeCalledWith('/users/signup', data);
    expect(getSpy).toBeCalledTimes(1);
  });
});
