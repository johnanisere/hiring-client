import { INVITE_HIRER } from './inviteHirer.action';
import { SIGN_OUT } from '../authentication/signout.action';

export const initialState = {
  hirer: {}
};

export default function hirer(state = initialState, action) {
  switch (action.type) {
    case INVITE_HIRER:
      return {
        ...state,
        hirer: action.payload
      };
    case 'LOADING':
      return {
        ...state,
        loading: action.payload
      };
    case 'INVITE_HIRER_ERROR':
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
