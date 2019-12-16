import {
	GET_TOTAL_DECADEVS,
	TOTAL_DECADEVS_LOADING, TOGGLE_HIRED
} from './hired.action';

const initialState = {
	allDevs: [],
    loading: false,
    message: ""
};

export default function devs(
	state = initialState,
	action
) {
	switch (action.type) {
		case TOTAL_DECADEVS_LOADING:
			return {
				...state,
				loading: action.payload
			};

		case GET_TOTAL_DECADEVS:
			return {
				...state,
				allDevs: action.payload
            };
        case TOGGLE_HIRED:
            return{
                ...state,
                message: action.payload
            }

		default:
			return state;
	}
}
