export const allTodos = (state) => {
  return Object.keys(state.todos).map( key => state.todos[key]);
};

export const stepsByTodoId = (state, todoId) => {
  return Object.keys(state.steps).filter(step => step.todo_id === todoId);
};
