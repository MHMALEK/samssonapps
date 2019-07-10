const configSelector = state => {
  //   return state.todos.filter(todo => {
  //     return !todo.completed;
  //   });
  const data = state.data;
  const config = {
    contactUs: data.contact_us,
    forms: data.forms
  };
  return config;
};

export { configSelector };
