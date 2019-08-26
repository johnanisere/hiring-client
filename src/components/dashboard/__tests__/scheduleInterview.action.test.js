import scheduleInterviewBoundActionCreator from '../scheduleInterview.action';

function setUp() {
  const dispatch = async val => val;
  const data = {
    title: 'dummy@gmail.com',
    location: 'dummy location',
    description: 'dummy description',
    date: 'dummydate',
    time: 'dummy time',
    decadev: 'dummy decadev'
  };
  return { data, dispatch };
}
describe('scheduleInterviewBoundActionCreator', () => {
  it('should call api and update state', done => {
    const request = {
      post: () =>
        Promise.resolve({
          data: 'dummy data'
        })
    };
    const { data, dispatch } = setUp();

    const getSpy = jest.spyOn(request, 'post');

    scheduleInterviewBoundActionCreator(data, request)(dispatch)
      .then(response => {
        expect(response).toBe('dummy data');
        done();
      })
      .catch(() => {
        // eslint-disable-next-line no-undef
        fail('should not catch');
      });

    // expect(getSpy).toBeCalledWith(`${undefined}/create-event`, data);
    expect(getSpy).toBeCalledTimes(1);
  });
});
