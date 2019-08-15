const initialState = {
  token: ''
};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
}
