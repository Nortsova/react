import uuid from 'uuid';

import request from 'api';

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
  payload: request('api/data').then(data => ({ data })),
});
export const addItem = title => ({
  type: ADD_ITEM,
  payload: request('api/data', {
    method: 'POST',
    data: {
      item: JSON.stringify({
        title,
        id: uuid(),
        checked: false,
      }),
    },
  }),
});
export const editItem = (id, title) => ({
  type: GET_DATA,
  payload: request(`./api/data/${id}`, {
    method: 'PUT',
    data: {
      item: JSON.stringify({
        title,
      }),
    },
  }).then(data => ({ data })),
});
export const checkItem = id => ({
  type: GET_DATA,
  payload: request(`./api/data-checked/${id}`, {
    method: 'PUT',
  }).then(data => ({ data })),
});
export const deleteItem = id => ({
  type: GET_DATA,
  payload: request(`./api/data/${id}`, {
    method: 'DELETE',
  }).then(data => ({ data })),
});
