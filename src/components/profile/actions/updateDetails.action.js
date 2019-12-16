export const UPDATE_DEV = 'UPDATE_DEV';

const updateDev = payload => ({
	type: 'UPDATE_DEV',
	payload
});

export const setLoading = payload => ({
	type: 'LOADING',
	payload
});
export const onError = payload => ({
	type: 'SET_ERROR',
	payload
});

const updateUserDetailBoundActionCreator = (
	payload,
	email,
	request,
	token,
	type,
	handleSave
) => async dispatch => {
	try {
		dispatch(setLoading(true));
		const response = await request.put(
			`/users/update/${type}/${email}`,
			payload,
			{
				headers: {
					authorization: `Bearer ${token}`
				}
			}
		);

		dispatch(updateDev(response.data.user));
		dispatch(setLoading(false));
		handleSave();

		return response.data;
	} catch (err) {
		dispatch(setLoading(false));
		return dispatch(onError(err));
	}
};

export default updateUserDetailBoundActionCreator;
