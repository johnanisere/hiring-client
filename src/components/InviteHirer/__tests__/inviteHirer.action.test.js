import inviteHirerBoundActionCreator from '../inviteHirer.action';

function setUp() {
  const dispatch = async val => val;
  const data = {
    email: 'j@gmail.com',
    password: 'weybudjcbdc',
    phone: '646873295',
    contactPerson: 'person',
    address: 'dummy address',
    companyURL: 'www.dummyURL.com',
    name: 'jglobal',
    role: 'hiringPartner',
    profilePhoto: 'dummyimagelink'
  };
  return { data, dispatch };
}
describe('inviteHirerBoundActionCreator', () => {
  it('should call api and update state', done => {
    const request = {
      post: () =>
        Promise.resolve({
          data: 'dummy data'
        })
    };
    const { data, dispatch } = setUp();

    const getSpy = jest.spyOn(request, 'post');

    inviteHirerBoundActionCreator(data, request)(dispatch)
      .then(response => {
        expect(response).toBe('dummy data');
        done();
      })
      .catch(() => {
        // eslint-disable-next-line no-undef
        fail('should not catch');
      });

    expect(getSpy).toBeCalledWith('/users/hiring-partner/invite', data);
    expect(getSpy).toBeCalledTimes(1);
  });
});
