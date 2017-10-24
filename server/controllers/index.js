import Router from 'koa-router';
import configureTodos from './todos.controller';


export const configurePublic = () => {
	const publicRouter = Router();
	return publicRouter.routes();
}

export const configurePrivate = () => {
	// jwt middlware
	const privateRouter = Router();
	privateRouter.use(configureTodos());
	return privateRouter.routes()
}