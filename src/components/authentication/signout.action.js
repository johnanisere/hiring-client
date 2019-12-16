export const SIGN_OUT = 'SIGN_OUT';
const signout = () => ({
  type: SIGN_OUT
});

const signOutBoundActionCreator = () => dispatch => {
  dispatch(signout());
};

export default signOutBoundActionCreator;
