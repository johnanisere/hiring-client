export const INCREMENT_NEXT_COUNT = 'INCREMENTNEXTCOUNT';
export const RESET_NEXT_COUNT = 'RESET_NEXT_COUNT';

export const incrementNext = payload => {
  return {
    type: INCREMENT_NEXT_COUNT,
    payload,
  };
};

export const resetNext = payload => ({
  type: RESET_NEXT_COUNT,
  payload,
});

export const resetNextToDefault = pod => async dispatch => {
  dispatch(resetNext(pod));
};

const allowNext = pod => async dispatch => {
  dispatch(incrementNext(pod));
};

export default allowNext;
