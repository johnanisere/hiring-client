import { USER_LOGIN } from './login.action';
<<<<<<< HEAD:src/components/authentication h/user.reducer.js

import { USER_SIGNUP } from './signup.action';
export const initialState = {
=======
import { USER_SIGNUP } from '../SignUp/signup.action';
const initialState = {
>>>>>>> Modify sign up and setup tests.:src/components/authentication/user.reducer.js
  loading: false,
  error: {},
  data: {}
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        data: action.payload
      };
    case USER_SIGNUP:
      return {
        ...state,
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

    default:
      return state;
  }
}
