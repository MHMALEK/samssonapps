import { BuyerApiCall } from "../../../utils/httpClient";

export const getCardsFromApi = () => {
  return BuyerApiCall.get();
};
