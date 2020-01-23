import { GET_HIRER } from './hirer.action';
export const initialState = {};

export default function GET_PARTNER(state = initialState, action) {
  switch (action.type) {
    case GET_HIRER:
      return { ...action.payload };
    default:
      return state;
  }
}
