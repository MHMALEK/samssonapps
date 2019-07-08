import HttpClient from "../../../utils/httpClient";

const GET_GENERAL_SETTINGS = "/settings/general";

export const getGeneralSettings = () => {
  return HttpClient.get(GET_GENERAL_SETTINGS);
};
