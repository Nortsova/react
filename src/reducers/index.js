import { createReducer } from 'redux-create-reducer';
import { ADD_ITEM, EDIT_ITEM, DELETE_ITEM, CHECK_ITEM } from 'actions';

const initialState = [{
  title: '',
  checked: false,
  id: 0,
}];


const reducer = createReducer(initialState, {
  [ADD_ITEM]: (state, { payload: { title, id } }) => (
    [...state, {
      title,
      id,
      checked: false,
    }]
  ),
  [EDIT_ITEM]: (state, { payload: { title, id } }) => (
    state.map((item) => {
      if (item.id !== id) {
        return item;
      }
      return {
        ...item,
        title,
      };
    })
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
  [DELETE_ITEM]: (state, { payload: { id } }) => (
    state.filter(todo => todo.id !== id)
  ),

});

export default reducer;
