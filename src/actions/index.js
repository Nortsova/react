import { LOADING, LOAD_TODOS, TODOS_LOADED, ADD_TODO, TODO_ADDED, EDIT_TODO, TODO_EDITED, DELETE_TODO, TODO_DELETED, CHECK_TODO, TODO_CHECKED } from '../constants';

export const loading = () => ({
  type: LOADING,
});
export const loadTodos = () => ({
  type: LOAD_TODOS,
});
export const todosLoaded = data => ({
  type: TODOS_LOADED,
  payload: {
    data,
  },
});
export const addTodo = title => ({
  type: ADD_TODO,
  payload: { title },
});
export const todoAdded = todo => ({
  type: TODO_ADDED,
  payload: todo,
});
export const editTodo = (id, title) => ({
  type: EDIT_TODO,
  payload: {
    id,
    title,
  },
});
export const todoEdited = data => ({
  type: TODO_EDITED,
  payload: data,
});
export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: { id },
});
export const todoDeleted = id => ({
  type: TODO_DELETED,
  payload: { id },
});

export const checkTodo = id => ({
  type: CHECK_TODO,
  payload: { id },
});
export const todoChecked = data => ({
  type: TODO_CHECKED,
  payload: data,
});

