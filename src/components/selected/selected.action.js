export const ADD_TO_SELECTED = 'ADD_TO_SELECTED';
export const REMOVE_FROM_SELECTED = 'REMOVE_FROM_SELECTED';

export const addToSelected = payload => {
  return {
    type: ADD_TO_SELECTED,
    payload
  };
};

export const removeFromSelected = payload => {
  return {
    type: REMOVE_FROM_SELECTED,
    payload
  };
};

const selectedBoundActionCreator = (decadevObject, selected) => dispatch => {
  const action = !selected
    ? removeFromSelected(decadevObject)
    : addToSelected(decadevObject);
  dispatch(action);
};

export default selectedBoundActionCreator;
