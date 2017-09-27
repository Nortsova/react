import api from 'api';

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
  payload: api.getDataRequest(),
});
export const addItem = title => ({
  type: ADD_ITEM,
  payload: api.addItemRequest({ title }),
});
export const editItem = (id, title) => ({
  type: GET_DATA,
  payload: api.editItemRequest(id, { title }),
});
export const checkItem = id => ({
  type: GET_DATA,
  payload: api.checkItemRequest(id),
});
export const deleteItem = id => ({
  type: GET_DATA,
  payload: api.deleteItemRequest(id),
});
