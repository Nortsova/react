import Router from 'koa-router';
import { getTodoService, createTodoService, updateTodoService, updateTodoCheckedService, deleteTodoService } from '../services/index';

let data = [{"title":"task 01","id":"47cee948-137a-4dc3-96ab-59305ce1cba9","checked":false},{"title":"task 02","id":"b322009e-94ab-4dd2-a882-172682531184","checked":false},{"title":"task 03 aa","id":"c77a7686-ec9a-465c-b2ee-75e434bffc48","checked":false}];


const getList = async (ctx) => {
	ctx.body = {
		data: await getTodoService(),
	}
}

const createTodo = async (ctx) => {
	let {title} = ctx.request.body;
	ctx.body = await createTodoService(title);
}
const updateTodo = async (ctx) => {
	let {title} = ctx.request.body;
	let id = ctx.params.id;
	ctx.body =  await updateTodoService(title, id);
}

const deleteTodo = async (ctx) => {
	let { id } = ctx.params;
	let result = await deleteTodoService(id);
	ctx.body =  result;
}

const checkTodo = async (ctx) => {
	let { id } = ctx.params;
	let result = await updateTodoCheckedService(id);
	ctx.body =  result;
}



export default function configureTodos() {
	const todosRouter = Router();
	const todosUrl = '/data';
	todosRouter.get(todosUrl, getList);
	todosRouter.post(todosUrl, createTodo);
	todosRouter.put(`${todosUrl}/:id`, updateTodo);
	todosRouter.put(`${todosUrl}-checked/:id`, checkTodo);
	todosRouter.delete(`${todosUrl}/:id`, deleteTodo);
	return todosRouter.routes();
}