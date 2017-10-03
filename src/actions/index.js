import { LOADING, LOAD_TODOS, ADD_TODO, EDIT_TODO, DELETE_TODO, CHECK_TODO } from '../constants';

export const loading = () => ({
  type: LOADING,
});
export const loadTodos = () => ({
  type: LOAD_TODOS,
});
export const addTodo = title => ({
  type: ADD_TODO,
  payload: { title },
});

export const editTodo = (id, title) => ({
  type: EDIT_TODO,
  payload: {
    id,
    title,
  },
});
export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: { id },
});
export const checkTodo = id => ({
  type: CHECK_TODO,
  payload: { id },
});

