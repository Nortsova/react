import { createStore, applyMiddleware, compose } from 'redux';
// import promise from 'redux-promise';
import reducer from 'reducers';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
/* eslint-disable no-underscore-dangle */
const storeData = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
);
/* eslint-enable */
sagaMiddleware.run(rootSaga);

export default storeData;
