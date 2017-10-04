import { takeEvery, put, call } from 'redux-saga/effects';
import { todosApi } from 'api';
import constants from 'const';

const { LOAD_TODOS, ADD_TODO, EDIT_TODO, DELETE_TODO, CHECK_TODO } = constants;
import normalize from 'utils/normalizeData';

import actions from 'actions';

const { loadTodos, todoAdded, todosLoaded, todoEdited, todoDeleted, todoChecked } = actions;

function* loadTodosSaga() {
  const { data } = yield call(todosApi.getDataRequest);
  const transformedData = normalize(data);
  yield put(todosLoaded(transformedData));
}

function* addTodo({ payload: { title } }) {
  const todo = yield call(todosApi.addItemRequest, { title });
  yield put(todoAdded(todo));
}

function* editTodo({ payload: { id, title } }) {
  const data = yield call(todosApi.editItemRequest, id, { title });
  console.log(data);
  yield put(todoEdited(data));
}
function* deleteTodo({ payload: { id } }) {
  yield call(todosApi.deleteItemRequest, id);
  yield put(todoDeleted(id));
}
function* checkTodo({ payload: { id } }) {
  const data = yield call(todosApi.checkItemRequest, id);
  yield put(todoChecked(data));
}

export default function* todosSaga() {
  yield [
    takeEvery(LOAD_TODOS, loadTodosSaga),
    takeEvery(ADD_TODO, addTodo),
    takeEvery(EDIT_TODO, editTodo),
    takeEvery(DELETE_TODO, deleteTodo),
    takeEvery(CHECK_TODO, checkTodo),
  ];
  yield put(loadTodos());
}

