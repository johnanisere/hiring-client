import { REGISTER_HIRER } from './hirerSignup.action';
import { HIRER_LOGIN } from './hirerLogin/hirerLogin.action';

export const initialState = {
  hirer: {},
  loading: false,
  error: {}
};

export default function hirer(state = initialState, action) {
  switch (action.type) {
    case HIRER_LOGIN:
      return {
        ...state,
        hirer: action.payload
      };
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
    case 'HIRER_LOGIN_ERROR':
      return {
        ...state,
        error: action.payload
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
