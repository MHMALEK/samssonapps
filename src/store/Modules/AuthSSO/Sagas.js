import { put, call, takeLatest, select, delay } from "redux-saga/effects";
import md5Helper from "../../../utils/md5Helper";
import Fingerprint2 from "fingerprintjs2";
import { signInWithPhoneRequest, verifyWithPhoneRequest } from "./HttpRequests";
import {
  SIGN_IN_WITH_PHONE_SSO_ACTION,
  SIGN_IN_WITH_PHONE_SSO_STARTED,
  SIGN_IN_WITH_PHONE_SSO_SUCCEED,
  SIGN_IN_WITH_PHONE_SSO_FAILD,
  VERIFY_WITH_PHONE_SSO_ACTION,
  VERIFY_WITH_PHONE_SSO_STARTED,
  VERIFY_WITH_PHONE_SSO_SUCCEED,
  VERIFY_WITH_PHONE_SSO_FAILD
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
  // ToDo: improve function
  var deviceId;
  setTimeout(function() {
    Fingerprint2.get(function(components) {
      components.map(component => {
        const items = components
          .map(item => {
            return item.value;
          })
          .filter(item => !Array.isArray(item));
        deviceId = md5Helper(items);
      });
    });
  }, 500);
  yield delay(3000);
  try {
    const device_id = deviceId;
    const type = 2;
    const phoneNumber = yield select(getPhoneNumberSelector);
    const verifyCode = action.payload.verifyCode;
    const salt = process.env.REACT_APP_SALT;
    const hash = md5Helper(verifyCode + phoneNumber + salt);
    const requestPayload = {
      code: verifyCode,
      phone: phoneNumber,
      device_id: device_id,
      type,
      hash
    };

    const response = yield call(verifyWithPhoneRequest, requestPayload);

    yield put({
      type: VERIFY_WITH_PHONE_SSO_STARTED
    });

    const payload = {
      ...response.data.data,
      mobileServiceProvider: response.data.data.user.mobile_service_provider,
      active: response.data.data.user.active,
      phoneNumber: response.data.data.user.phoneNumber
    };

    localStorage.setItem("verify", JSON.stringify(payload));
    yield put({
      type: VERIFY_WITH_PHONE_SSO_SUCCEED,
      payload
    });
  } catch {
    yield put({
      type: VERIFY_WITH_PHONE_SSO_FAILD
    });
  }
}

export default [
  takeLatest(SIGN_IN_WITH_PHONE_SSO_ACTION, signInWithPhoneSSOSaga),
  takeLatest(VERIFY_WITH_PHONE_SSO_ACTION, verifyWithPhoneSSOSAGA)
];
