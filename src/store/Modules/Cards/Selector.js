

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
    card_id: state.Cards.selectedCardData.selectedCardId,
    education_system_id: state.Cards.selectedCardData.educationSystemId,
    teaching_institution_id: state.Cards.selectedCardData.teachingInstitutionId
  };
  return cardData;
};

const getPurchasedCardId = state => {
  return state.Cards.boughtCard.card.id
}

const createCardDataSelector = (data) => {
  const dataToSaveInReduxStore = {
    educationSystemId: data.education_system_id,
    teachingInstitutionId: data.teaching_institution_id,
    userName: data.username,
    password: data.password,
    card: {
      id: data.card.id,
      title: data.card.title,
    },
    buyer: {
      id: data.buyer.id,
      name: data.buyer.name,
      lastName: data.buyer.last_name,
      certificateId: data.buyer.id_certificate,
      nationalityId: data.buyer.nationality_id,
      nationalCode: data.buyer.national_code,
      foreignersCode: data.buyer.foreigners_code,
      phoneNumber: data.buyer.cell_phone,
      confirm: data.buyer.confirm,
      active: data.buyer.active
    },

  }
  return dataToSaveInReduxStore
}

export {
  cardSelector,
  getCardDataSelector,
  getPurchasedCardId,
  createCardDataSelector,
};