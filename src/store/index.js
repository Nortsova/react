import { createStore } from 'redux';
import store from './data';
import reducer from 'reducers';

const storeData = createStore(reducer, store);
export default storeData;
