import { SET_CURRENT_HIRERER_POD } from './setPod.action';

const initialState = { pod: '' };

export default function SetPod(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_HIRERER_POD:
      return { pod: action.payload };
    default:
      return state;
  }
}
