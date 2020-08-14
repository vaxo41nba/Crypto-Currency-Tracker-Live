import { actionTypes } from './actionTypes';


const initialState = {
	data: null,
	coins: [],
	numberPerPage: 20,
	currentPage: 1,
};

const reducer = (state = initialState, action) => {
	const { currentPage } = state;
	let { data, coins } = action; //SAGA

	switch (action.type) {
		case actionTypes.UPDATE_DATA_IN_STORE_ASYNC:
			return { ...state, data, coins };

		case actionTypes.LOAD_DATA_IN_STORE_ASYNC:
			// console.log(action)
			return {
				...state,
				data: action.data,
				coins: action.data.body.data,
			};

		case actionTypes.NEXT_PAGE:
			return {
				...state,
				currentPage: currentPage + 1,
			};

		case actionTypes.PREV_PAGE:
			return {
				...state,
				currentPage: currentPage - 1,
			};

		default:
			return state;
	}
};

export default reducer;