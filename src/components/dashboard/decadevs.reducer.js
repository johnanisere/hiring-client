import { GET_ALL_DECADEVS } from "./decadevs.action";
import { SIGN_OUT } from "../authentication/signout.action";
export const initialState = {
  loading: false,

  decadevs: [],
  total: 0
};

export default function decadevs(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_DECADEVS_LOADING":
      return {
        ...state,
        loading: action.payload
      };

    case GET_ALL_DECADEVS:
      return {
        ...state,
        decadevs: action.payload
      };
    case "GET_TOTAL":
      return {
        ...state,
        total: action.payload
      };
    case SIGN_OUT:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
