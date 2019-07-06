import { put, takeEvery, all, call } from "redux-saga/effects";
import { delay } from "../../utils/SagaUtilsFunctions";
import { getCards } from './HttpRequests'
function* helloSaga() {
  console.log("Hello Sagas!");
}

function* incrementAsync(action) {
  try {
    const response = yield call(getCards);
    yield put({
      type: "ADD_USER_S"
    });
  }
  catch (err) {
    console.log(err)
  }
}

function* watchIncrementAsync() {
  yield takeEvery("ADD_USER", incrementAsync);
}

export default function* rootSaga() {
  yield all([watchIncrementAsync()]);
}
