import { todosApi } from 'api';

console.log(todosApi);
export const LOADING = 'LOADING';
export const GET_DATA = 'GET_DATA';
export const ADD_ITEM = 'ADD_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CHECK_ITEM = 'CHECK_ITEM';


export const loading = () => ({
  type: LOADING,
});
export const getData = () => ({
  type: GET_DATA,
  payload: todosApi.getDataRequest(),
});
export const addItem = title => ({
  type: ADD_ITEM,
  payload: todosApi.addItemRequest({ title }),
});
export const editItem = (id, title) => ({
  type: GET_DATA,
  payload: todosApi.editItemRequest(id, { title }),
});
export const checkItem = id => ({
  type: GET_DATA,
  payload: todosApi.checkItemRequest(id),
});
export const deleteItem = id => ({
  type: GET_DATA,
  payload: todosApi.deleteItemRequest(id),
});
