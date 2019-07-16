const cardSelector = state => {
  //   return state.todos.filter(todo => {
  //     return !todo.completed;
  //   });
  const data = state.data.data;
  const CardsList = data.map(item => {
    return {
      id: item.id,
      title: item.title,
      description: item.description,
      price: item.cards[0].price,
      files: item.files,
      educationSystem: item.education_system,
      teachingInstitution: item.teaching_institution
    };
  });
  return CardsList;
};

export { cardSelector };
