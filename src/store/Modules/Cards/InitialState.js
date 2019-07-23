const InitialState = {
  loadingGetCards: false,
  cardsList: [],
  selectedCardData: {
    education_system_id: null,
    teaching_institution_id: null,
    card_id: null
  },
  submitedInformationOnForm: {},
  purchasedCard: {},
  IPGBankUrl: "",
  hasSelectedAnyCard: false,
  purchasedCardInfo: {
    userName: "",
    password: ""
  }
};

export default InitialState;
