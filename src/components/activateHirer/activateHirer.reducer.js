import { GET_ALL_INACTIVE_HIRER } from './activateHirer.action';
export const initialState = {
  loading: false,
  error: {},
  hirer: []
};

export default function inactivehirer(state = initialState, action) {
  switch (action.type) {
    case 'GET_ALL_INACTIVE_HIRER_LOADING':
      return {
        ...state,
        loading: action.payload
      };
    case 'GET_ALL_INACTIVE_HIRER_ERROR':
      return {
        ...state,
        error: action.payload
      };
    case GET_ALL_INACTIVE_HIRER:
      return {
        ...state,
        hirer: action.payload
      };
    default:
      return state;
  }
}
