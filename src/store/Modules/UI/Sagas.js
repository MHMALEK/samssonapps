import { put, takeEvery, call } from "redux-saga/effects";
import { SHOW_NOTIFICATION_ACTION } from "./ActionTypes";
import { toast } from "react-toastify";

function* showNotificationActionSaga(action) {
  yield toast(action.payload.text);
}

export default [
  takeEvery(SHOW_NOTIFICATION_ACTION, showNotificationActionSaga)
];
