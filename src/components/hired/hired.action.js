export const GET_TOTAL_DECADEVS =
	'GET_TOTAL_DECADEVS';
export const TOTAL_DECADEVS_LOADING =
	'TOTAL_DECADEVS_LOADING';

export const TOGGLE_HIRED = 'TOGGLE_HIRED';

const totalDecadevs = payload => ({
	type: GET_TOTAL_DECADEVS,
	payload
});

const toggleHired = payload => ({
	type: TOGGLE_HIRED,
	payload
});

const setLoading = payload => ({
	type: 'TOTAL_DECADEVS_LOADING',
	payload
});

const onError = payload => ({
	type: 'SET_ERROR',
	payload
});

export const getTotalDecadevs = request => async dispatch => {
	try {
		dispatch(setLoading(true));
		const response = await request.get(
			'/users/all'
		);
		dispatch(
			totalDecadevs(response.data.allDevs)
		);

		dispatch(setLoading(false));

		return;
	} catch (err) {
		dispatch(setLoading(false));
		dispatch(onError(err));
		return;
	}
};

const hireDevBoundActionCreator = (
	request,
	payload
) => async dispatch => {
	try {
		dispatch(setLoading(true));
		const response = await request.put(
			'/users/hire-dev',
			payload
		);
		dispatch(toggleHired(response.data.message))
		window.location.reload(true);
		dispatch(setLoading(true));
	} catch (err) {
		dispatch(setLoading(true));
		dispatch(onError(err));
	}
};
export default hireDevBoundActionCreator;
