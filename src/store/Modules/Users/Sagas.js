import { put, takeEvery, all } from "redux-saga/effects";
import { delay } from "../../utils/SagaUtilsFunctions";

function* helloSaga() {
  console.log("Hello Sagas!");
}

function* incrementAsync(action) {
  yield delay(4000);
  yield put({
    type: "ADD_USER"
  });
}

function* watchIncrementAsync() {
  yield takeEvery("ADD_USER", incrementAsync);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
