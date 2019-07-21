import { SHOW_NOTIFICATION_ACTION, UPDATE_NAV_BAR_STEP } from "./ActionTypes";
export const showNotificationAction = content => {
  return {
    type: SHOW_NOTIFICATION_ACTION,
    payload: {
      text: content
    }
  };
};

export const updateNavbarStep = content => {
  console.log(content);
  return {
    type: UPDATE_NAV_BAR_STEP,
    payload: content.payload.currentStep
  };
};
