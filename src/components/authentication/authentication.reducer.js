import { SIGN_OUT } from './signout.action';
const initialState = {
  token: ''
};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload
      };
    case SIGN_OUT:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
