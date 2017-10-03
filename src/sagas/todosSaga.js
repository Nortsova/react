import { takeEvery, put, call } from 'redux-saga/effects';
import { todosApi } from 'api';
import { LOAD_TODOS, ADD_TODO, EDIT_TODO, DELETE_TODO, CHECK_TODO, TODOS_LOADED, TODO_ADDED, TODO_EDITED, TODO_DELETED, TODO_CHECKED } from '../constants';


function* loadTodos() {
  const { data } = yield call(todosApi.getDataRequest);
  yield put({ type: TODOS_LOADED,
    payload: {
      data,
    },
  });
}

function* addTodo({ payload: { title } }) {
  const data = yield call(todosApi.addItemRequest, { title });
  yield put({ type: TODO_ADDED,
    payload: data,
  });
}

function* editTodo({ payload: { id, title } }) {
  const { data } = yield call(todosApi.editItemRequest, id, { title });
  yield put({ type: TODO_EDITED,
    payload: {
      data,
    },
  });
}
function* deleteTodo({ payload: { id } }) {
  const { data } = yield call(todosApi.deleteItemRequest, id);
  yield put({ type: TODO_DELETED,
    payload: {
      data,
    },
  });
}
function* checkTodo({ payload: { id } }) {
  const { data } = yield call(todosApi.checkItemRequest, id);
  yield put({ type: TODO_CHECKED,
    payload: {
      data,
    },
  });
}

export default function* todosSaga() {
  yield [
    takeEvery(LOAD_TODOS, loadTodos),
    takeEvery(ADD_TODO, addTodo),
    takeEvery(EDIT_TODO, editTodo),
    takeEvery(DELETE_TODO, deleteTodo),
    takeEvery(CHECK_TODO, checkTodo),
  ];
}

