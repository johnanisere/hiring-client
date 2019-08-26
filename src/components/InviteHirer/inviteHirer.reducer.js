import { INVITE_HIRER } from './inviteHirer.action';

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
    default:
      return state;
  }
}
