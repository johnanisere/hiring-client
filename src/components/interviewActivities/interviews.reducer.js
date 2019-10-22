import { GET_ALL_INTERVIEWS } from './interviews.action';
export const initialState = {
  loading: false,
  error: {},
  data: []
};

export default function interviews(state = initialState, action) {
  switch (action.type) {
    case 'GET_ALL_INTERVIEWS_LOADING':
      return {
        ...state,
        loading: action.payload
      };
    case 'GET_ALL_INTERVIEWS_ERROR':
      return {
        ...state,
        error: action.payload
      };
    case GET_ALL_INTERVIEWS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
