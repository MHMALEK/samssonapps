const cardSelector = state => {
  //   return state.todos.filter(todo => {
  //     return !todo.completed;
  //   });
  const data = state.data;
  console.log(data);
  // const config = {
  //   contactUs: data.contact_us,
  //   forms: data.forms
  // };
  return data;
};

export { cardSelector };
