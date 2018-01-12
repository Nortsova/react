import { fork } from 'redux-saga/effects';
import todosSaga from './todosSaga';

export default function* rootSaga() {
  yield [
    fork(todosSaga),
  ];
}
