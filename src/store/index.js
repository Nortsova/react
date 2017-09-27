import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducer from 'reducers';


const storeData = createStore(reducer, applyMiddleware(promise));


export default storeData;
