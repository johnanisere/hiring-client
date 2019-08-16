export const DEVS_MAILINVITE = "DEVS_MAILINVITE";

const mailInvite = payload => ({
  type: DEVS_MAILINVITE,
  payload
});

const setLoading = payload => ({
  type: "LOADING",
  payload
});

const onError = payload => ({
  type: "MAIL_INVITE_ERROR",
  payload
});

const mailInviteBoundActionCreator = (data, request) => async dispatch => {
  try {
    dispatch(setLoading(true));
    const response = await request.post("/invite/devs", data);
    dispatch(mailInvite(response.data));
    dispatch(setLoading(false));
    return response.data;
  } catch (error) {
    dispatch(setLoading(false));
    return dispatch(onError(error));
  }
};

export default mailInviteBoundActionCreator;
