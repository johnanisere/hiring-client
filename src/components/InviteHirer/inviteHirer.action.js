export const INVITE_HIRER = 'INVITE_HIRER';
const hirer = payload => ({
  type: INVITE_HIRER,
  payload
});

export const setLoading = payload => ({
  type: 'LOADING',
  payload
});
export const onError = payload => ({
  type: 'INVITE_HIRER_ERROR',
  payload
});

const inviteHirerBoundActionCreator = (data, request) => async dispatch => {
  try {
    dispatch(setLoading(true));
    const response = await request.post('/users/hiring-partner/invite', data);
    dispatch(hirer(response.data));
    console.log('RESPONSE: ', response);
    dispatch(setLoading(false));

    return response.data;
  } catch (err) {
    console.log(err.message);
    dispatch(setLoading(false));
    return dispatch(onError(err));
  }
};
export default inviteHirerBoundActionCreator;
