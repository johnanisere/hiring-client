import { ADD_TO_SELECTED, REMOVE_FROM_SELECTED } from './selected.action';

const initialState = {
  selectedDecadevs: {},
  total: 0
};

export default function selectedReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_SELECTED:
      return {
        ...state,
        selectedDecadevs: {
          ...state.selectedDecadevs,
          ...{
            [action.payload.email]: action.payload
          }
        },
        total: state.total++
      };
    case REMOVE_FROM_SELECTED:
      const oldshorlisted = { ...state.selectedDecadevs };
      delete oldshorlisted[action.payload.email];
      return {
        ...state,
        selectedDecadevs: {
          ...oldshorlisted
        },
        total: state.total--
      };
    default:
      return state;
  }
}
