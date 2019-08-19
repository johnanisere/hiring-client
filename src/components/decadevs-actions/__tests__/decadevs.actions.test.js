import { getAllDecadevs } from '../decadevs.action';

function setUp() {
  const dispatch = async val => {
    return await val;
  };
  return { dispatch };
}

describe('getAllDecadevs', () => {
  it('should call api and update decadevs state', done => {
    const request = {
      get: () =>
        Promise.resolve({
          data: 'dummy data'
        })
    };
    const { dispatch } = setUp();

    const getSpy = jest.spyOn(request, 'get');

    getAllDecadevs(request)(dispatch)
      .then(response => {
        expect(response).toBe('dummy data');
        done();
      })
      .catch(() => {
        // eslint-disable-next-line no-undef
        fail('should not catch');
      });

    expect(getSpy).toBeCalledWith(
      'http://localhost:3005/api/v1/users/decadevs'
    );
    expect(getSpy).toBeCalledTimes(1);
  });
});
