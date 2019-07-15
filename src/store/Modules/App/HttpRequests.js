import { BuyerApiCall } from "../../../utils/httpClient";
import { GENERAL_SETTINGS_REQUEST } from "../../../utils/endPoints";

export const getGeneralSettings = () => {
  return BuyerApiCall.get(GENERAL_SETTINGS_REQUEST);
};
