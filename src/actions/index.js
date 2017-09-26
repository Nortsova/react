import uuid from 'uuid';

import { getRequest, postRequest, putRequest, deleteRequest } from 'api';

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

    getRequest('api/data').then(res => res.json())
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
    postRequest('api/data', JSON.stringify({
      title,
      id: uuid(),
      checked: false,
    }))
      .then(res => res.json())
      .then(data => (dispatch({
        type: ADD_ITEM,
        payload: data,
      })));
  }
);
export const editItem = (id, title) => (
  (dispatch) => {
    putRequest(`./api/data/${id}`, JSON.stringify({
      title,
    }))
      .then(res => res.json())
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
    putRequest(`./api/data-checked/${id}`)
      .then(res => res.json())
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
    deleteRequest(`./api/data/${id}`)
      .then(res => res.json())
      .then(data => (dispatch({
        type: GET_DATA,
        payload: {
          data,
        },
      })));
  }
);
