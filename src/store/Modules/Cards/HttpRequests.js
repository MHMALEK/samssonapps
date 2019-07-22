import { BuyerApiCall } from "../../../utils/httpClient";
import {
  CARDS_INDEX_REQUEST,
  CARDS_CREATE_REQUEST,
  CARDS_CONFIRM_REQUEST,
  CARDS_INQUIRY_REQUEST
} from "../../../utils/endPoints";
export const getCardsFromServer = () => {
  return BuyerApiCall.get(CARDS_INDEX_REQUEST);
};

export const submitInformationFromServer = params => {
  return BuyerApiCall.post(CARDS_CREATE_REQUEST, params);
};

export const confirmInformationFromServer = params => {
  return BuyerApiCall.post(CARDS_CONFIRM_REQUEST, params);
};

export const getPurchasedCardDataFromServer = params => {
  return BuyerApiCall.get(CARDS_INQUIRY_REQUEST, params);
};
