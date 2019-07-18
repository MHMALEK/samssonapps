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
  GET_PURCHASED_CARD_DATA_ACTION
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
  selectedCardId,
  educationSystemId,
  teachingInstitutionId
) => {
  return {
    type: SELECT_CARD_TO_BUY_ACTION,
    payload: {
      selectedCardId,
      educationSystemId,
      teachingInstitutionId
    }
  };
};

export const submitInformationHandlerAction = (data) => {
  const payload = {
    nationality_id: data.NationalityValue,
    id_certificate: data.certificateIdValue,
    last_name: data.familyValue,
    name: data.nameValue,
    national_code: data.nationalityIdValue,
    cell_phone: data.phoneNumberValue
  }
  return {
    type: SUBMIT_INFORMATION_ACTION,
    payload
  };
};

export const confirmInformationHandlerAction = () => {
  return {
    type: CONFIRM_INFORMATION_ACTION
  };
};


export const inquryPurchasedCardAction = (transactionId) => {
  return {
    type: GET_PURCHASED_CARD_DATA_ACTION,
    payload: transactionId
  };
}