import { USER_LOGIN } from './login.action';

import { USER_SIGNUP } from './signup.action';
import { UPDATE_DEV } from '../profile/actions/updateDetails.action';
import { REGISTER_HIRER } from '../HirerSignUp/hirerSignup.action';
import { HIRER_LOGIN } from '../HirerSignUp/hirerLogin/hirerLogin.action';
import { SIGN_OUT } from './signout.action';
export const initialState = {
  loading: false,
  error: {},
  data: {}
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
    case UPDATE_DEV:
    case HIRER_LOGIN:
      return {
        ...state,
        error: {},
        data: { ...state.data, ...action.payload }
      };
    case USER_SIGNUP:
      return {
        ...state,
        error: {},
        data: action.payload
      };
    case 'LOADING':
      return {
        ...state,
        loading: action.payload
      };
    case 'USER_LOGIN_ERROR':
      return {
        ...state,
        error: action.payload
      };
    case 'USER_SIGNUP_ERROR':
      return {
        ...state,
        error: action.payload
      };
    case 'CLEAR_SIGNUP_ERROR':
      return {
        ...state,
        error: {},
        data: {}
      };
    case REGISTER_HIRER:
      return {
        ...state,
        error: {},
        data: action.payload
      };
    case SIGN_OUT:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
