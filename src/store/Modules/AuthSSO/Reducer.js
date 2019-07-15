import {
  SIGN_IN_WITH_PHONE_SSO_STARTED,
  SIGN_IN_WITH_PHONE_SSO_SUCCEED,
  SIGN_IN_WITH_PHONE_SSO_FAILD,
  VERIFY_WITH_PHONE_SSO_ACTION
} from "./ActionTypes";
import initialState from "./InitialState";

const AuthSSOReducer = function(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_WITH_PHONE_SSO_STARTED: {
      return {
        ...state,
        loadingSubmitPhoneNumber: true
      };
    }
    case SIGN_IN_WITH_PHONE_SSO_SUCCEED: {
      return {
        ...state,
        loadingSubmitPhoneNumber: false,
        showVerify: true,
        initTimer: action.payload.wait,
        operator: action.payload.operator,
        phoneNumber: action.payload.phoneNumber
      };
    }
    case SIGN_IN_WITH_PHONE_SSO_FAILD: {
      return {
        ...state,
        loadingSubmitPhoneNumber: false
      };
    }

    default:
      return state;
  }
};

export default AuthSSOReducer;
