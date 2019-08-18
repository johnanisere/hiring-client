import { GET_ALL_DECADEVS } from '../decadevs-actions/decadevs.action';
const initialState = {
  decadevs: []
};

export default function decadevs(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_DECADEVS:
      return {
        ...state,
        decadevs: action.data
      };
    default:
      return state;
  }
}
