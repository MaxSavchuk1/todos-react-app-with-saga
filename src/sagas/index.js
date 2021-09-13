import { takeLatest } from 'redux-saga/effects';
import { createTodoSaga, deleteTodoSaga, getTodosSaga } from './todosSagas';
import ACTION_TYPES from '../actions/actionTypes';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.GET_TODOS_ACTION, getTodosSaga);
  yield takeLatest(ACTION_TYPES.CREATE_TODO_ACTION, createTodoSaga);
  yield takeLatest(ACTION_TYPES.DELETE_TODO_ACTION, deleteTodoSaga);
}

export default rootSaga;
