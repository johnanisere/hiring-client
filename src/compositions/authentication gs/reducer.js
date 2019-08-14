import { USER_LOGIN } from '../../components/authentication/login.action';
const initialState = {
  user: {}
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.data
      };
    default:
      return state;
  }
}
