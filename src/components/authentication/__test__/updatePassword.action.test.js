import updatePasswordBoundActionCreator from '../updatePassword.action';

function setUp() {
  const data = {
    email: 'vdmsbfhjf@gmail.com',
    newPassword: 'gjhsdfkgfh5'
  };
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphbmVkb2VAZXhhbXBsZS5jb20iLCJpYXQiOjE1NjU5NjAyOTYsImV4cCI6MTU2NTk2Mzg5Nn0.mwKMRibSeffTEamTYiuWlYy09dtBG57zAgY7ySWb-OE';
  const config = {
    headers: {
      authorization: `Bearer ${token}`
    }
  };
  const activityIndicator = () => jest.fn();
  const handleError = () => jest.fn();
  const onSuccess = () => jest.fn();

  return { data, config, activityIndicator, onSuccess, handleError, token };
}
describe('updatePasswordBoundActionCreator', () => {
  it('should call api and update state', done => {
    const request = {
      put: () =>
        Promise.resolve({
          data: 'dummy data'
        })
    };
    const {
      data,
      config,
      activityIndicator,
      onSuccess,
      handleError,
      token
    } = setUp();

    const getSpy = jest.spyOn(request, 'put');

    updatePasswordBoundActionCreator(
      data,
      request,
      token,
      activityIndicator,
      handleError,
      onSuccess
    )()
      .then(response => {
        expect(response).toBe('dummy data');
        done();
      })
      .catch(() => {
        // eslint-disable-next-line no-undef
        fail('should not catch');
      });

    expect(getSpy).toBeCalledWith('/users/update-password', data, config);
    expect(getSpy).toBeCalledTimes(1);
  });
});
