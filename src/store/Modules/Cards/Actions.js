import {
  GET_CARDS_ACTION,
  GO_TO_CARD_LIST_ACTION,
  SELECT_CARD_TO_BUY_ACTION
} from "./ActionTypes";

export const getCardsAction = content => {
  return {
    type: GET_CARDS_ACTION,
    payload: {
      lodingToGetCards: true
    }
  };
};

export const goToCardListAction = content => {
  return {
    type: GO_TO_CARD_LIST_ACTION
  };
};

export const selectCardToBuyAction = content => {
  return {
    type: SELECT_CARD_TO_BUY_ACTION
  };
};
