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
  type: 'SET_ERROR',
  payload
});

const inviteHirerBoundActionCreator = (data, request) => async dispatch => {
  try {
    dispatch(setLoading(true));
    const response = await request.post('/users/hiring-partner/invite', data);
    dispatch(hirer(response.data));
    dispatch(setLoading(false));

    return response.data;
  } catch (err) {
    dispatch(setLoading(false));
    return dispatch(onError(err));
  }
};
export default inviteHirerBoundActionCreator;
