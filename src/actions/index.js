export const ADD_ITEM = 'ADD_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CHECK_ITEM = 'CHECK_ITEM';

import uuid from 'uuid';

export const addItem = (title) => ({
	type: ADD_ITEM,
	payload: {
		title,
		id: uuid()
	}
});
export const editItem = (id, title) => ({
	type: EDIT_ITEM,
	payload: {
		title,
		id
	}
})
export const checkItem = (id) => ({
	type: CHECK_ITEM,
	payload: {
		id
	}
})
export const deleteItem = (id) => ({
	type: DELETE_ITEM,
	payload: {
		id
	}
})