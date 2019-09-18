export const ADD_TO_SELECTED = 'ADD_TO_SELECTED';

export const addToSelected = decadevObject => {
  return {
    type: ADD_TO_SELECTED,
    decadevObject
  };
};

const selectedBoundActionCreator = decadevObject => dispatch => {
  dispatch(addToSelected(decadevObject));
};

export default selectedBoundActionCreator;
