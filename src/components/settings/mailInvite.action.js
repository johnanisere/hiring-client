export const DEVS_MAILINVITE = 'DEVS_MAILINVITE';

const mailInviteBoundActionCreator = (
  emails,
  request,
  setLoading,
  setError,
  onSuccess
) => async dispatch => {
  try {
    setError({});
    setLoading(true);
    const response = await request.post('/invites/invite/devs', emails);
    onSuccess(response.data.message);
    setLoading(false);
    return response.data;
  } catch (error) {
    setLoading(false);
    setError(error);
  }
};

export default mailInviteBoundActionCreator;
