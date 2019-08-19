import axios from 'axios';
export const GET_ALL_DECADEVS = 'GET_ALL_DECADEVS';

export const getAllDecadevs = () => dispatch => {
  let response;
  axios
    .get('http://localhost:3005/api/v1/users/decadevs')
    .then(res => {
      dispatch({
        type: GET_ALL_DECADEVS,
        data: res.data.allDecadevs
      });
      return (response = res.data);
    })
    .catch(err => {
      console.log('ACTION ERROR: ', err.message);
      dispatch({
        type: GET_ALL_DECADEVS,
        data: []
      });
    });
  return response;
};
