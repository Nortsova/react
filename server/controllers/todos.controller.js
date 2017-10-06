import Router from 'koa-router';
import {createTodoService, updateTodoService} from '../services/index';

let data = [{"title":"task 01","id":"47cee948-137a-4dc3-96ab-59305ce1cba9","checked":false},{"title":"task 02","id":"b322009e-94ab-4dd2-a882-172682531184","checked":false},{"title":"task 03 aa","id":"c77a7686-ec9a-465c-b2ee-75e434bffc48","checked":false}];

const getList = (ctx) => {
	ctx.body = {
		data,
	}
}

const createTodo = (ctx) => {
	let {title} = ctx.request.body;
	let newTodo = createTodoService(title);
	data.push(newTodo);
	ctx.body = newTodo;
}
const updateTodo = (ctx) => {
	let {title} = ctx.request.body;
	let id = ctx.params.id;
	let changedItem;
    const newArray = data.map((item) => {
      if (item.id === id) {
        const arrayObj = item;
        arrayObj.title = title;
        changedItem = updateTodoService(title, item);
      }
      return item;
	});
	data = newArray;
	ctx.body = changedItem;
}

const deleteTodo = (ctx) => {
	let id = ctx.params.id;
	let index = 0;
	data.forEach((item, currIndex) => {
		if (item.id === id.toString()) {
		index = currIndex;
		}
	});
	data.splice(index, 1);
	ctx.body = {status: 'ok'};
}

const checkTodo = (ctx) => {
	let id = ctx.params.id;
    let changedItem;
    const newArray = data.map((item) => {
      if (item.id !== id) {
        return item;
      }
      const newItem = item;
      newItem.checked = !item.checked;
      changedItem = newItem;
      return newItem;
    });
	ctx.body = changedItem;
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