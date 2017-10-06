import uuid from 'uuid';

export const createTodoService = (title) => {
	const newItem = {
		title,
		id: uuid(),
		checked: false,
	  };
	return newItem;
}
export const updateTodoService = (title, item) => {
	return {
		...item,
		title
	};
}