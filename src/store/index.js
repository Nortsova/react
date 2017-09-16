import store from './data';
import {createStore} from 'redux';
import reducer from '../reducers';


const storeData = createStore(reducer, store);
export default storeData;