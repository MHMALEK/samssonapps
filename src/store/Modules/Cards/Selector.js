const cardSelector = state => {
  const data = state.data.data;
  const CardsList = data.map(item => {
    return {
      id: item.id,
      title: item.title,
      description: item.description,
      price: item.cards.length !== 0 ? item.cards[0].price : null,
      files: item.files,
      educationSystem: item.education_system,
      teachingInstitution: item.teaching_institution
    };
  });
  return CardsList;
};

const getCardDataSelector = state => {
  const cardData = {
    card_id: state.Cards.selectedCardData.card_id,
    education_system_id: state.Cards.selectedCardData.education_system_id,
    teaching_institution_id:
      state.Cards.selectedCardData.teaching_institution_id
  };
  return cardData;
};

const getPurchasedCardId = state => {
  return state.Cards.purchasedCard.card.id;
};

const createCardDataSelector = data => {
  const dataToSaveInReduxStore = {
    education_system_id: data.education_system_id,
    teaching_institution_id: data.teaching_institution_id,
    userName: data.username,
    password: data.password,
    card: {
      id: data.card.id,
      title: data.card.title
    },
    buyer: {
      id: data.buyer.id,
      name: data.buyer.name,
      last_name: data.buyer.last_name,
      id_certificate: data.buyer.id_certificate,
      nationality_id: data.buyer.nationality_id,
      national_code: data.buyer.national_code,
      foreigners_code: data.buyer.foreigners_code,
      cell_phone: data.buyer.cell_phone,
      confirm: data.buyer.confirm,
      active: data.buyer.active
    }
  };
  return dataToSaveInReduxStore;
};

export {
  cardSelector,
  getCardDataSelector,
  getPurchasedCardId,
  createCardDataSelector
};
