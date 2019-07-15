import {
  SIGN_IN_WITH_PHONE_SSO_ACTION,
  VERIFY_WITH_PHONE_SSO_ACTION
} from "./ActionTypes";

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
  return {
    type: VERIFY_WITH_PHONE_SSO_ACTION,
    payload: {
      verifyCode: content.verifyCode
    }
  };
};
