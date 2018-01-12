import { createReducer } from 'redux-create-reducer';
import constants from 'const';

const { TODOS_LOADED, TODO_ADDED, TODO_EDITED, TODO_DELETED, TODO_CHECKED } = constants;

const initialState = {};


const todo = createReducer(initialState, {
  [TODOS_LOADED]: (state, { payload: { data } }) => (data),
  [TODO_ADDED]: (state, { payload }) => ({
    ...state,
    [payload.id]: payload,
  }),
  [TODO_EDITED]: (state, { payload }) => ({
    ...state,
    [payload.id]: payload,
  }),
  [TODO_DELETED]: (state, { payload: { id } }) => {
    const newObj = { ...state };
    delete newObj[id];
    return newObj;
  },
  [TODO_CHECKED]: (state, { payload }) => ({
    ...state,
    [payload.id]: payload,
  }),
});

export default todo;
