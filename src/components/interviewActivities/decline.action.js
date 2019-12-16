export const setDecline = payload => ({
	type: 'WHY_DECLINE',
	payload
});
export const setLoading = payload => ({
	type: 'GET_ALL_INTERVIEWS_LOADING',
	payload
});

export const onError = payload => ({
	type: 'SET_ERROR',
	payload
});

export const whyDecline = (
	request,
	payload,
	onSuccess
) => async dispatch => {
	try {
		dispatch(setLoading(true));
		const response = await request.put(
			'/interview/why-decline',
			payload
		);
		onSuccess(response.data.message);
		dispatch(setDecline(response.data.message));
		dispatch(setLoading(false));
		window.location.href = '/';
		return response.data;
	} catch (error) {
		dispatch(setLoading(false));
		return dispatch(onError(error));
	}
};

export default whyDecline;
