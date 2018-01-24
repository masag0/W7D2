export const fetchTodos = () => {
  return $.ajax({
    url: 'api/todos',
    method: 'GET',
    dataType: 'json'
  });
};

export const createTodo = (todo) => {
  return $.ajax({
    url: 'api/todos',
    method: 'POST',
    data: { todo: todo },
    dataType: 'json'
  });
};

export const updateTodo = (todo) => {
  return $.ajax({
    url: `api/todos/${todo.id}`,
    method: 'PATCH',
    data: { todo: todo },
    dataType: 'json'
  });
};

export const deleteTodo = (id) => {
  console.log(id);
  return $.ajax({
    url: `api/todos/${id}`,
    method: 'DELETE',
  });
};


