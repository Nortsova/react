import {combineReducers} from 'redux';

import todos, * as fromTodos from './todo';
import { default as filterReducer } from './filter';


const reducer = combineReducers({
    filter:filterReducer,
    todos
});


export default reducer;


export function getFilteredTodos(state) {
    return fromTodos.getFilteredTodos(state.todos,state.filter);
}