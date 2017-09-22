import { createReducer } from 'redux-create-reducer';
import { LOADING, GET_DATA } from 'actions';

const initialState = false;


const loading = createReducer(initialState, {
  [LOADING]: () => (true),
  [GET_DATA]: () => (false),

});

export default loading;
