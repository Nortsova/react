import { createReducer } from 'redux-create-reducer';
import { GET_DATA, ADD_ITEM, EDIT_ITEM, DELETE_ITEM, CHECK_ITEM } from 'actions';

const initialState = [];


const todo = createReducer(initialState, {
  [GET_DATA]: (state, { payload: { data } }) => (data),
  [ADD_ITEM]: (state, { payload }) => (
    [...state, payload]
  ),
  [CHECK_ITEM]: (state, { payload: { id } }) => (
    state.map((item) => {
      if (item.id !== id) {
        return item;
      }
      return {
        ...item,
        checked: !item.checked,
      };
    })
  ),

});

export default todo;
