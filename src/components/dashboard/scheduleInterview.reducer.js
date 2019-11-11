import { SCHEDULE_INTERVIEW } from './scheduleInterview.action';
import { SIGN_OUT } from '../authentication/signout.action';
export const initialState = {
  loading: false,

  interviewDetails: {}
};

export default function interviewDetails(state = initialState, action) {
  switch (action.type) {
    case 'SCHEDULE_INTERVIEW_LOADING':
      return {
        ...state,
        loading: action.payload
      };

    case SCHEDULE_INTERVIEW:
      return {
        ...state,
        interviewDetails: action.payload
      };
    case SIGN_OUT:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
