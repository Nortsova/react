import { combineReducers } from 'redux';
import loading from './loading';

const ui = combineReducers({
  loading,
});

export default ui;
