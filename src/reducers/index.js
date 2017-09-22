import { combineReducers } from 'redux';
import todo from './todo';
import loading from './loading';

const reducer = combineReducers({
  data: todo,
  loading,
});

export default reducer;
