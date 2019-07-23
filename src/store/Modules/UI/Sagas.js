import { put, takeEvery, call } from "redux-saga/effects";
import { SHOW_NOTIFICATION_ACTION } from "./ActionTypes";
import { toast } from "react-toastify";

function* showNotificationActionSaga(action) {
  const toastType = action.payload.type || "error";
  const toastMessage = action.payload.text;
  yield toast[toastType](toastMessage);
}

export default [
  takeEvery(SHOW_NOTIFICATION_ACTION, showNotificationActionSaga)
];
