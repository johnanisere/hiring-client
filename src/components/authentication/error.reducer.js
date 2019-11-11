import { SIGN_OUT } from './signout.action';
export const initialState = {
  error: ''
};

export default function error(state = initialState, action) {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload
      };
    case SIGN_OUT:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
