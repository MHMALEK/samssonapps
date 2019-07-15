import { CHANGE_PHONE_NUMBER_HANDLER_ACTION } from "./ActionTypes";
export const changePhoneNumberHandlerAction = content => {
  return {
    type: CHANGE_PHONE_NUMBER_HANDLER_ACTION,
    payload: {
      phoneNumber: content.phoneNumber
    }
  };
};
