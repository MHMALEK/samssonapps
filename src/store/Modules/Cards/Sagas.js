import { put, call, select, takeLatest, take } from "redux-saga/effects";
import {
  getCardsFromServer,
  confirmInformationFromServer,
  submitInformationFromServer,
  getPurchasedCardDataFromServer
} from "./HttpRequests";
import {
  cardSelector,
  getCardDataSelector,
  getPurchasedCardId,
  createCardDataSelector
} from "./Selector";
import {
  GET_CARDS_ACTION,
  GET_CARDS_STARTED,
  GET_CARDS_SUCCEED,
  GET_CARDS_FAILD,
  GO_TO_CARD_LIST_ACTION,
  GO_TO_CARD_LIST_SUCCEED,
  CONFIRM_INFORMATION_ACTION,
  CONFIRM_CARD_STARTED,
  CONFIRM_CARD_SUCCEED,
  CONFIRM_CARD_FAILD,
  SELECT_CARD_TO_BUY_ACTION,
  SELECT_CARD_TO_BUY_FAILD,
  SELECT_CARD_TO_BUY_SUCCESS,
  SUBMIT_INFORMATION_ACTION,
  SUBMIT_INFORMATION_SUCCEED,
  SUBMIT_INFORMATION_FAILD,
  SUBMIT_INFORMATION_STARTED,
  GET_PURCHASED_CARD_DATA_ACTION,
  GET_PURCHASED_CARD_DATA_STARTED,
  GET_PURCHASED_CARD_DATA_SUCCESS,
  GET_PURCHASED_CARD_DATA_FAILD
} from "./ActionTypes";
import { NAVIGATION_ACTION } from "../App/ActionTypes";
import {
  SHOW_NOTIFICATION_ACTION,
  UPDATE_NAV_BAR_STEP
} from "../UI/ActionTypes";

function* getCardsRequest() {
  try {
    const _response = yield call(getCardsFromServer);
    const response = cardSelector(_response);
    yield put({
      type: GET_CARDS_STARTED
    });
    yield put({
      type: GET_CARDS_SUCCEED,
      payload: response
    });
  } catch (err) {
    yield put({
      type: SHOW_NOTIFICATION_ACTION,
      payload: {
        text: "دریافت کارت‌ها با خطا مواجه شد. مجددا تکرار نمایید.",
        type: "error"
      }
    });
  }
}

function* goToCardList() {
  yield put({
    type: GO_TO_CARD_LIST_SUCCEED
  });
}

function* submitInformationSaga(action) {
  const selectedCardData = yield select(getCardDataSelector);
  let paramsToSendToServer = action.data;
  paramsToSendToServer.card_id =  1// selectedCardData.card_id;
  paramsToSendToServer.education_system_id = 1 
    // selectedCardData.education_system_id;
  paramsToSendToServer.teaching_institution_id = 2
    // selectedCardData.teaching_institution_id;

  yield put({
    type: SUBMIT_INFORMATION_STARTED
  });
  try {
    const response = yield call(
      submitInformationFromServer,
      paramsToSendToServer
    );

    const purchasedCardData = createCardDataSelector(response.data.data);

    yield put({
      type: SUBMIT_INFORMATION_SUCCEED,
      purchasedCardData
    });
    yield put({
      type: UPDATE_NAV_BAR_STEP,
      payload: {
        currentStep: 1
      }
    });
    yield put({
      type: NAVIGATION_ACTION,
      payload: {
        path: "/card/confirm"
      }
    });
  } catch {
    yield put({
      type: SUBMIT_INFORMATION_FAILD
    });
    yield put({
      type: SHOW_NOTIFICATION_ACTION,
      payload: {
        text:
          "خطا در ارسال اطلاعات. از صحت اطلاعات وارد شده مطمین شده و سپس دوباره اقدام فرمایید.",
        type: "error"
      }
    });
  }
}

function* confirmInformationSaga() {
  yield put({
    type: CONFIRM_CARD_STARTED
  });
  const cardId = yield select(getPurchasedCardId);

  try {
    const response = yield call(confirmInformationFromServer, {
      card_purchased_id: cardId
    });
    const payload = response.data.data.ipg_url;
    yield put({
      type: CONFIRM_CARD_SUCCEED,
      payload
    });
    yield put({
      type: UPDATE_NAV_BAR_STEP,
      payload: {
        currentStep: 2
      }
    });
  } catch {
    yield put({
      type: CONFIRM_CARD_FAILD
    });
    yield put({
      type: SHOW_NOTIFICATION_ACTION,
      payload: {
        text: "ثبت مشخصات  با خطا مواجه شد. مجددا تکرار نمایید.",
        type: "error"
      }
    });
  }
}
function* getPurchasedCardDataSaga(action) {
  yield put({
    type: GET_PURCHASED_CARD_DATA_STARTED
  });
  try {
    const response = yield call(getPurchasedCardDataFromServer, {
      transaction_id: action.payload
    });
    const payload = response.data.data;
    yield put({
      type: GET_PURCHASED_CARD_DATA_SUCCESS,
      payload
    });
  } catch {
    yield put({
      type: GET_PURCHASED_CARD_DATA_FAILD
    });
    yield put({
      type: SHOW_NOTIFICATION_ACTION,
      payload: {
        text: "دریافت اطلاعات با خطا مواجه شد. مجددا تکرار نمایید.",
        type: "error"
      }
    });
  }
}

function* selectCardToBuySaga(action) {
  const {
    education_system_id,
    teaching_institution_id,
    card_id
  } = action.payload;

  if (education_system_id && teaching_institution_id) {
    yield put({
      type: SELECT_CARD_TO_BUY_SUCCESS,
      payload: {
        education_system_id,
        teaching_institution_id,
        card_id
      }
    });
    yield put({
      type: NAVIGATION_ACTION,
      payload: {
        path: "/card/user-info"
      }
    });
  } else {
    yield put({
      type: SELECT_CARD_TO_BUY_FAILD
    });
    yield put({
      type: SHOW_NOTIFICATION_ACTION,
      payload: {
        text:
          "لطفا سیستم آموزشی و نظام آزمایشی کارت مورد نظر را انتخاب نمایید.",
        type: "error"
      }
    });
  }
}

export default [
  takeLatest(GET_CARDS_ACTION, getCardsRequest),
  takeLatest(GO_TO_CARD_LIST_ACTION, goToCardList),
  takeLatest(SELECT_CARD_TO_BUY_ACTION, selectCardToBuySaga),
  takeLatest(SUBMIT_INFORMATION_ACTION, submitInformationSaga),
  takeLatest(CONFIRM_INFORMATION_ACTION, confirmInformationSaga),
  takeLatest(GET_PURCHASED_CARD_DATA_ACTION, getPurchasedCardDataSaga)
];
