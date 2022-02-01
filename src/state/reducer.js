import { actionTypes } from './actionTypes';
import { combineReducers } from 'redux';

const reducer = (state = [], action) => {
	switch (action.type) {
		case actionTypes.add:
			return [action.payload, ...state];

		case actionTypes.edit:
			return state.filter((item) => {
				if (Number(action.payload.id) === item.id) {
					item.isEdit = true;
				} else {
					item.isEdit = false;
				}
				return item;
			});

		case actionTypes.delete:
			return state.filter((item) => item.id !== Number(action.payload.id));

		case actionTypes.update:
			return state.filter((item) => {
				if (Number(action.payload.id) === item.id) {
					item.content = action.payload.content;
					item.isEdit = false;
					item.date = action.payload.date;
				}
				return item;
			});

		default:
			return state;
	}
};

const reducers = combineReducers({
	reducer,
});

export default reducers;
