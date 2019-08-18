import axios from 'axios';
export const GET_ALL_DECADEVS = 'GET_ALL_DECADEVS';

export const getAllDecadevs = () => dispatch => {
  axios
    .get('http://localhost:3005/api/v1/users/decadevs')
    .then(res => {
      console.log(res.data);

      dispatch({
        type: GET_ALL_DECADEVS,
        data: res.data.allDecadevs
      });
    })
    .catch(err => {
      console.log('ACTION ERROR: ', err.message);

      dispatch({
        type: GET_ALL_DECADEVS,
        data: []
      });
    });
};
