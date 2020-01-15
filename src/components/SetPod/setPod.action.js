export const SET_CURRENT_HIRERER_POD = 'SETCURRENTHIRERERPOD';

export const setPod = payload => ({
  type: SET_CURRENT_HIRERER_POD,
  payload,
});

const setCurrentHirererPod = pod => dispatch => {
  dispatch(setPod(pod));
};

export default setCurrentHirererPod;
