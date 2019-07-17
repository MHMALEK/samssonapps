import { BuyerApiCall } from "../../../utils/httpClient";
import {
  CARDS_INDEX_REQUEST,
  CARDS_CREATE_REQUEST
} from "../../../utils/endPoints";
export const getCardsFromServer = () => {
  return BuyerApiCall.get(CARDS_INDEX_REQUEST);
};

export const confirmInformationFromServer = params => {
  return BuyerApiCall.post(CARDS_CREATE_REQUEST, params);
};
