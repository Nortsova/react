export const ADD_ITEM = 'ADD_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CHECK_ITEM = 'CHECK_ITEM';


let nextId = 4;
export function addItem(title) {
	return {
		type: ADD_ITEM,
		payload: {
			title,
			id: nextId++
		}
	}
}
export function editItem(id, title) {
	return {
		type: EDIT_ITEM,
		payload: {
			title,
			id
		}
	}
}
export function checkItem(id) {
	return {
		type: CHECK_ITEM,
		payload: {
			id
		}
	}
}
export function deleteItem(id) {
	return {
		type: DELETE_ITEM,
		payload: {
			id
		}
	}
}