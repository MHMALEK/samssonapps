import { AuthApiCall } from "../../../utils/httpClient";
import {
  SIGN_IN_WITH_PHONE_REQUEST,
  VERIFY_WITH_PHONE_REQUEST
} from "../../../utils/endPoints";

export const signInWithPhoneRequest = params => {
  return AuthApiCall.post(SIGN_IN_WITH_PHONE_REQUEST, params);
};

export const verifyWithPhoneRequest = params => {
  return AuthApiCall.post(VERIFY_WITH_PHONE_REQUEST, params);
};
