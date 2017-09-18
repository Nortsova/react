
import { ADD_ITEM, EDIT_ITEM, DELETE_ITEM, CHECK_ITEM } from '../actions';


const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
    {
      const { title, id } = action.payload;
      return [...state, {
        title,
        id,
        checked: false,
      }];
    }
    case EDIT_ITEM:
    {
      const { title, id } = action.payload;
      return state.map((item) => {
        if (item.id !== id) {
          return item;
        }
        return {
          ...item,
          title,
        };
      });
    }
    case CHECK_ITEM:
    {
      const { id } = action.payload;
      return state.map((item) => {
        if (item.id !== id) {
          return item;
        }


        return {
          ...item,
          checked: !item.checked,
        };
      });
    }
    case DELETE_ITEM: {
      const { id } = action.payload;
      return state.filter(todo => todo.id !== id);
    }

    default: return state;
  }
};

export default reducer;
