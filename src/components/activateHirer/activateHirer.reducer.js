import { GET_ALL_INACTIVE_HIRER } from "./activateHirer.action";
import { GET_ALL_ACTIVE_HIRER } from "./getAllActiveHirers.action";
export const initialState = {
  loading: false,
  inactiveHirers: [],
  activeHirers: []
};

export default function hirer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_INACTIVE_HIRER_LOADING":
      return {
        ...state,
        loading: action.payload
      };

    case GET_ALL_INACTIVE_HIRER:
      return {
        ...state,
        inactiveHirers: action.payload
      };
    case GET_ALL_ACTIVE_HIRER:
      return {
        ...state,
        activeHirers: action.payload
      };
    default:
      return state;
  }
}
