import { combineReducers } from 'redux';
import todo from './todo';

const reducer = combineReducers({
  data: todo,
});

export default reducer;
