import { createReducer } from 'redux-create-reducer';
import constants from 'const';

const { LOADING, TODOS_LOADED } = constants;
const initialState = false;


const loading = createReducer(initialState, {
  [LOADING]: () => (true),
  [TODOS_LOADED]: () => (false),

});

export default loading;
