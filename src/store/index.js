import { createStore } from 'redux';
import reducer from 'reducers';
import data from './data.json';


const storeData = createStore(reducer, data);

export default storeData;
