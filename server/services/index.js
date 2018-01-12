import { Todo } from '../models';

export const getTodoService = () => {
	return Todo.find({}, (err, data) => {
		if (err) throw err;
		return data;
	});
}
export const createTodoService = (title) => {
	const newTodo = new Todo({
		title,
		checked: false
	});
	newTodo.save(function(err) {
		if (err) throw err;
		console.log('Todo saved successfully!');
	});
	return newTodo;
}

export const updateTodoService = (title, id) => Todo.findOneAndUpdate({id},  { $set: { title }}, { new: true });

export const updateTodoCheckedService = async (id) => {
	const todo = await Todo.findOne({id}).lean();
	const checked = !todo.checked;
	const newTodo = await Todo.updateOne({id}, {checked }, { new: true });
	console.log(todo);
	const response = {
		...todo,
		checked
	}
	return response;
}

export const deleteTodoService = async (id) => await Todo.remove({id});