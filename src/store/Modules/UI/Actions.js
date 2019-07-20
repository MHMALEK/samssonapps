import { SHOW_NOTIFICATION_ACTION } from "./ActionTypes";
export const showNotificationAction = content => {
  return {
    type: SHOW_NOTIFICATION_ACTION,
    payload: {
      text: content
    }
  };
};
