import { SCHEDULE_INTERVIEW } from "./scheduleInterview.action";
import { SCHEDULE_TEST } from "../schedule-test/scheduleTest.action";
import { SIGN_OUT } from "../authentication/signout.action";
export const initialState = {
  loading: false,
  interviewDetails: {},
  testDetails: {}
};

export default function interviewDetails(state = initialState, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: action.payload
      };

    case SCHEDULE_INTERVIEW:
      return {
        ...state,
        interviewDetails: action.payload
      };
    case SCHEDULE_TEST:
      return {
        ...state,
        testDetails: action.payload
      };

    case SIGN_OUT:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
