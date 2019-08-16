import { DEVS_MAILINVITE } from "./mailInvite.action";

export const initialState = {
  loading: false,
  error: "",
  data: {}
};

export default function mail(state = initialState, action) {
  switch (action.type) {
    case DEVS_MAILINVITE:
      return {
        ...state,
        data: action.payload
      };
    case "MAIL_INVITE_ERROR":
      return {
        ...state,
        error: action.payload
      };
    case "LOADING":
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
}
