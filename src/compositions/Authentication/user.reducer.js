import { USER_LOGIN } from './login.action';
const initialState = {
  loading: false,
  error: '',
  data: {}
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
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

    default:
      return state;
  }
}
