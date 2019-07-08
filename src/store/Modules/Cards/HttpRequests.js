import HttpClient from "../../../utils/httpClient";

const GET_CARDS_FROM_SERVER = "/card";

export const getCardsFromServer = () => {
  return HttpClient.get(GET_CARDS_FROM_SERVER);
};
