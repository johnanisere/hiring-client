import { GET_ALL_INTERVIEWS } from './interviews.action';
import { SIGN_OUT } from '../authentication/signout.action';
export const initialState = {
  loading: false,
  error: {},
  data: [],
  declineDetails: {}
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
        error: {},
        data: action.payload
      };

    case 'WHY_DECLINE':
      return {
        ...state,
        error: {},
        declineDetails: action.payload
      };
    case SIGN_OUT:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
