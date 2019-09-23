import { ADD_TO_SELECTED } from './selected.action';

const initialState = {
  selectedDecadevs: {},
  total: 0
};

export default function selectedReducer(state = initialState, action) {
  let addedDecadev = action.decadevObject;
  switch (action.type) {
    case ADD_TO_SELECTED:
      return {
        ...state,
        selectedDecadevs: {
          ...state.selectedDecadevs,
          ...state.selectedDecadevs,
        total: state.total++
      };
    default:
      return state;
  }
}
