import { put, call, takeLatest } from "redux-saga/effects";
import { signInWithPhoneRequest, verifyWithPhoneRequest } from "./HttpRequests";
import md5Helper from "../../../utils/md5Helper";
import {
  SIGN_IN_WITH_PHONE_SSO_ACTION,
  SIGN_IN_WITH_PHONE_SSO_STARTED,
  SIGN_IN_WITH_PHONE_SSO_SUCCEED,
  SIGN_IN_WITH_PHONE_SSO_FAILD,
  VERIFY_WITH_PHONE_SSO_ACTION
} from "./ActionTypes";
import { verifyWithPhoneSSOAction } from "./Actions";

function* signInWithPhoneSSOSaga(action) {
  const phoneNumber = action.payload.phoneNumber;
  try {
    const response = yield call(signInWithPhoneRequest, {
      phone: phoneNumber,
      hash: md5Helper(phoneNumber + process.env.REACT_APP_SALT)
    });
    yield put({
      type: SIGN_IN_WITH_PHONE_SSO_STARTED
    });
    const payload = {
      ...response.data.data,
      phoneNumber
    };
    yield put({
      type: SIGN_IN_WITH_PHONE_SSO_SUCCEED,
      payload
    });
  } catch {
    yield put({
      type: SIGN_IN_WITH_PHONE_SSO_FAILD
    });
  }
}

function* verifyWithPhoneSSOSAGA(action) {
  try {
    const response = yield call(verifyWithPhoneRequest, action.payload);
  } catch {}
}

export default [
  takeLatest(SIGN_IN_WITH_PHONE_SSO_ACTION, signInWithPhoneSSOSaga),
  takeLatest(VERIFY_WITH_PHONE_SSO_ACTION, verifyWithPhoneSSOSAGA)
];
