import { createReducer } from 'redux-create-reducer';
import { TODOS_LOADED, TODO_ADDED, TODO_EDITED, TODO_DELETED, TODO_CHECKED } from '../constants';

const initialState = [];


const todo = createReducer(initialState, {
  [TODOS_LOADED]: (state, { payload: { data } }) => (data),
  [TODO_ADDED]: (state, { payload }) => (
    [...state, payload]
  ),
  [TODO_EDITED]: (state, { payload: { data } }) => (data),
  [TODO_DELETED]: (state, { payload: { data } }) => (data),
  [TODO_CHECKED]: (state, { payload: { data } }) => (data),
});

export default todo;
