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

export { cardSelector, getCardDataSelector };
