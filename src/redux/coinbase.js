import { actionTypes } from './actionTypes';

export const loadData = (data) => {
	return {
		type: actionTypes.LOAD_DATA_IN_STORE,
		data
	};
};
export const updateData = () => {
	return {
		type: actionTypes.UPDATE_DATA_IN_STORE,
	};
};

export const nextPage = () => {
	return {
	  type: actionTypes.NEXT_PAGE,
	};
  };
  
  export const prevPage = () => {
	return {
	  type: actionTypes.PREV_PAGE,
	};
  };
