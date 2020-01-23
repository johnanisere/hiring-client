import { INCREMENT_NEXT_COUNT, RESET_NEXT_COUNT } from './allowNext.action';

const initialNextState = { Java: { count: 0, disable: true } };

export default function AllowNextReducers(state = initialNextState, action) {
  let pod = action.payload;
  switch (action.type) {
    case INCREMENT_NEXT_COUNT:
      if (!state[pod]) {
        state[pod] = { count: 0, disable: true };
      } else {
        if (state[pod].count > 0) {
          state[pod] = { count: 0, disable: false };
        } else {
          ++state[pod].count;
          state[pod].disable = true;
        }
      }
      return state;
    case RESET_NEXT_COUNT:
      state[pod] = { count: 0, disable: true };
      return state;
    default:
      return state;
  }
}
