const configSelector = data => {
  //   return state.todos.filter(todo => {
  //     return !todo.completed;
  //   });
  const config = {
    contactUs: data.contact_us,
    forms: data.forms
  };
  return config;
};

export { configSelector };
