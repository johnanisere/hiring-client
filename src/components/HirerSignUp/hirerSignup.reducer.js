import { REGISTER_HIRER } from './hirerSignup.action';

export const initialState = {
  hirer: {}
};

export default function hirer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_HIRER:
      return {
        ...state,
        hirer: action.payload
      };
    case 'LOADING':
      return {
        ...state,
        loading: action.payload
      };
    case 'REGISTER_HIRER_ERROR':
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
