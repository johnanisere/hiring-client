import { INCREMENT_NEXT_COUNT, RESET_NEXT_COUNT } from './allowNext.action';

const initialNextState = { count: 0, disable: true };

export default function AllowNextReducers(state = initialNextState, action) {
  switch (action.type) {
    case INCREMENT_NEXT_COUNT:
      return state.count >= 1
        ? { count: 0, disable: false }
        : { ...state, count: state.count + 1 };
    case RESET_NEXT_COUNT:
      return { count: 0, disable: true };
    default:
      return state;
  }
}
