export const INCREMENT_NEXT_COUNT = 'INCREMENTNEXTCOUNT';
export const RESET_NEXT_COUNT = 'RESET_NEXT_COUNT';

export const incrementNext = () => ({
  type: INCREMENT_NEXT_COUNT,
});

export const resetNext = () => ({
  type: RESET_NEXT_COUNT,
});

export const resetNextToDefault = () => async dispatch => {
  dispatch(resetNext());
};

const allowNext = () => async dispatch => {
  dispatch(incrementNext());
};

export default allowNext;
