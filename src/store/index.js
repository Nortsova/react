import { createStore } from 'redux';
import reducer from 'reducers';
import store from './data';

const storeData = createStore(reducer, store);
export default storeData;
