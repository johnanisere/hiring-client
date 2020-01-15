import { USER_LOGIN } from './login.action';

import { USER_SIGNUP } from './signup.action';
import { UPDATE_DEV } from '../profile/actions/updateDetails.action';
import { REGISTER_HIRER } from '../HirerSignUp/hirerSignup.action';
import { HIRER_LOGIN } from '../HirerSignUp/hirerLogin/hirerLogin.action';
import { SIGN_OUT } from './signout.action';
import { GET_HIRER } from '../dashboard/hirer.action';
export const initialState = {
  loading: false,
  data: {},
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
    case UPDATE_DEV:
    case HIRER_LOGIN:
      return {
        ...state,
        data: { ...state.data, ...action.payload },
      };
    case USER_SIGNUP:
      return {
        ...state,
        data: action.payload,
      };
    case GET_HIRER:
      return {
        ...state,
        data: action.payload.partner,
      };
    case 'LOADING':
      return {
        ...state,
        loading: action.payload,
      };

    case 'CLEAR_SIGNUP_ERROR':
      return {
        ...state,
        data: {},
      };
    case REGISTER_HIRER:
      return {
        ...state,
        data: action.payload,
      };
    case SIGN_OUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
