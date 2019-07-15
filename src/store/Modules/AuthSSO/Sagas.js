import { put, call, takeLatest, select } from "redux-saga/effects";
import md5Helper from "../../../utils/md5Helper";
import { signInWithPhoneRequest, verifyWithPhoneRequest } from "./HttpRequests";
import {
  SIGN_IN_WITH_PHONE_SSO_ACTION,
  SIGN_IN_WITH_PHONE_SSO_STARTED,
  SIGN_IN_WITH_PHONE_SSO_SUCCEED,
  SIGN_IN_WITH_PHONE_SSO_FAILD,
  VERIFY_WITH_PHONE_SSO_ACTION
} from "./ActionTypes";
import { getPhoneNumberSelector } from "./Selector";

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
    const device_id = "sdasdadadasd";
    const type = "web";
    const phoneNumber = yield select(getPhoneNumberSelector);
    const verifyCode = action.verifyCode;
    const salt = process.env.REACT_APP_SALT;
    const hash = md5Helper(verifyCode + phoneNumber + salt);
    const payload = {
      code: verifyCode,
      phone: phoneNumber,
      device_id,
      type,
      hash
    };
    const response = yield call(verifyWithPhoneRequest, payload);
    console.log(response);
  } catch {}
}

export default [
  takeLatest(SIGN_IN_WITH_PHONE_SSO_ACTION, signInWithPhoneSSOSaga),
  takeLatest(VERIFY_WITH_PHONE_SSO_ACTION, verifyWithPhoneSSOSAGA)
];
