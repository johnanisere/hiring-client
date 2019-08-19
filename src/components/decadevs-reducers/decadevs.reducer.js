import { GET_ALL_DECADEVS } from '../decadevs-actions/decadevs.action';
export const initialState = {
  loading: false,
  error: {},
  decadevs: []
};

export default function decadevs(state = initialState, action) {
  switch (action.type) {
    case 'GET_ALL_DECADEVS_LOADING':
      return {
        ...state,
        loading: action.payload
      };
    case 'GET_ALL_DECADEVS_ERROR':
      return {
        ...state,
        error: action.payload
      };
    case GET_ALL_DECADEVS:
      return {
        ...state,
        decadevs: action.payload
      };
    default:
      return state;
  }
}
