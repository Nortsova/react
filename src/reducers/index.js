import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import todo from './todo';
import ui from './ui';

const reducer = combineReducers({
  data: todo,
  ui,
  form: formReducer,
});

export default reducer;
