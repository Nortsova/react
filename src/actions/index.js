import uuid from 'uuid';

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

    fetch('./api/data')
      .then(res => res.json())
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
    fetch('./api/data', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        title,
        id: uuid(),
        checked: false,
      }),
    })
      .then(res => res.json())
      .then(data => (dispatch({
        type: ADD_ITEM,
        payload: data,
      })));
  }
);
export const editItem = (id, title) => (
  (dispatch) => {
    fetch(`./api/data/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify({
        title,
      }),
    })
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
    fetch(`./api/data-checked/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'PUT',
    })
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
    fetch(`./api/data/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => (dispatch({
        type: GET_DATA,
        payload: {
          data,
        },
      })));
  }
);
