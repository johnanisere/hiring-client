export const GET_HIRER = 'GET_HIRER';

export const getHirer = payload => ({
  type: GET_HIRER,
  payload,
});

const getHirerBoundActionCreator = request => async dispatch => {
  try {
    const response = await request.get('/users/getpartner');
    dispatch(getHirer(response.data));
    return response.data;
  } catch (error) {
    return;
  }
};

export default getHirerBoundActionCreator;
