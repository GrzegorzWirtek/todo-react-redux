import { actionTypes } from './actionTypes';

export const addTask = (data) => {
	return (dispatch) => {
		dispatch({
			type: actionTypes.add,
			payload: data,
		});
	};
};

export const deleteTask = (id) => {
	return (dispatch) => {
		dispatch({
			type: actionTypes.delete,
			payload: id,
		});
	};
};

export const updateTask = (data) => {
	return (dispatch) => {
		dispatch({
			type: actionTypes.update,
			payload: data,
		});
	};
};

export const editTask = (id) => {
	return (dispatch) => {
		dispatch({
			type: actionTypes.edit,
			payload: id,
		});
	};
};
