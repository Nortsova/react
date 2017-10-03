import { createReducer } from 'redux-create-reducer';
import { LOADING, TODOS_LOADED } from '../constants';

const initialState = false;


const loading = createReducer(initialState, {
  [LOADING]: () => (true),
  [TODOS_LOADED]: () => (false),

});

export default loading;
