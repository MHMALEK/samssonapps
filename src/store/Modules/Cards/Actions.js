import {
  GET_CARDS_ACTION,
  GO_TO_CARD_LIST_ACTION,
  SELECT_CARD_TO_BUY_ACTION,
  SUBMIT_INFORMATION_ACTION,
  SUBMIT_INFORMATION_STARTED,
  SUBMIT_INFORMATION_SUCCEED,
  SUBMIT_INFORMATION_FAILD,
  CONFIRM_INFORMATION_ACTION,
  CONFIRM_INFORMATION_STARTED,
  CONFIRM_INFORMATION_FAILD,
  CONFIRM_INFORMATION_SUCCESS,
  GET_PURCHASED_CARD_DATA_ACTION,
  BACK_FROM_CONFIRM_INFORMATION
} from "./ActionTypes";

export const getCardsAction = () => {
  return {
    type: GET_CARDS_ACTION,
    payload: {
      lodingToGetCards: true
    }
  };
};

export const goToCardListAction = () => {
  return {
    type: GO_TO_CARD_LIST_ACTION
  };
};

export const selectCardToBuyAction = (
  card_id,
  education_system_id,
  teaching_institution_id
) => {
  return {
    type: SELECT_CARD_TO_BUY_ACTION,
    payload: {
      card_id,
      education_system_id,
      teaching_institution_id
    }
  };
};

export const submitInformationHandlerAction = data => {
  return {
    type: SUBMIT_INFORMATION_ACTION,
    data
  };
};

export const confirmInformationHandlerAction = () => {
  return {
    type: CONFIRM_INFORMATION_ACTION
  };
};

export const inquryPurchasedCardAction = transactionId => {
  return {
    type: GET_PURCHASED_CARD_DATA_ACTION,
    payload: transactionId
  };
};

export const backFromConfirmInformationAction = () => {
  return {
    type: BACK_FROM_CONFIRM_INFORMATION
  };
};
