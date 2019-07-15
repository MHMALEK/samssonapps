import { BuyerApiCall } from "../../../utils/httpClient";
import { CARDS_INDEX_REQUEST } from "../../../utils/endPoints";
export const getCardsFromServer = () => {
  return BuyerApiCall.get(CARDS_INDEX_REQUEST);
};
