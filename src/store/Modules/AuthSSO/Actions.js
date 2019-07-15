import {
  SIGN_IN_WITH_PHONE_SSO_ACTION,
  VERIFY_WITH_PHONE_SSO_ACTION
} from "./ActionTypes";
import md5Helper from "../../../utils/md5Helper";

export const signInWithPhoneSSOAction = content => {
  return {
    type: SIGN_IN_WITH_PHONE_SSO_ACTION,
    payload: {
      lodingToGetCards: true,
      phoneNumber: content
    }
  };
};

export const verifyWithPhoneSSOAction = content => {
  console.log(content);
  return {
    type: VERIFY_WITH_PHONE_SSO_ACTION,
    payload: {
      code: content.verifyCode,
      phone: content.phoneNumber,
      device_id: content.device_id,
      type: content.type,
      hash: md5Helper(
        content.verifyCode,
        content.phoneNumber,
        process.env.REACT_APP_SALT
      )
    }
  };
};
