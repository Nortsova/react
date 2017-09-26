import uuid from 'uuid';

import request from 'api';

export const LOADING = 'LOADING';
export const GET_DATA = 'GET_DATA';
export const ADD_ITEM = 'ADD_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CHECK_ITEM = 'CHECK_ITEM';


export const getData = () => (
  (dispatch) => {
    dispatch({
      type: LOADING,
    });

    request('api/data', { method: 'GET' })
      .then(data => (dispatch({
        type: GET_DATA,
        payload: {
          data,
        },
      })));
  }

);
export const addItem = title => (
  (dispatch) => {
    request('api/data', {
      method: 'POST',
      body: JSON.stringify({
        title,
        id: uuid(),
        checked: false,
      }),
    })
      .then(data => (dispatch({
        type: ADD_ITEM,
        payload: data,
      })));
  }
);
export const editItem = (id, title) => (
  (dispatch) => {
    request(`./api/data/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
      }),
    })
      .then(data => (dispatch({
        type: GET_DATA,
        payload: {
          data,
        },
      })));
  }
);
export const checkItem = id => (
  (dispatch) => {
    request(`./api/data-checked/${id}`, {
      method: 'PUT',
    })
      .then(data => (dispatch({
        type: GET_DATA,
        payload: {
          data,
        },
      })));
  }
);
export const deleteItem = id => (
  (dispatch) => {
    request(`./api/data/${id}`, {
      method: 'DELETE',
    })
      .then(data => (dispatch({
        type: GET_DATA,
        payload: {
          data,
        },
      })));
  }
);
