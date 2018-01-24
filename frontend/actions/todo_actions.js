export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
import * as APIUtil from '../util/todo_api_util';
import {receiveErrors, clearErrors} from './error_actions';

export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos
  };
};

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id
  };
};

export const fetchTodos = () => {
  return dispatch => {
    return APIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)));
  };
};

export const createTodo = (todo) => {
  return dispatch => {
    return APIUtil.createTodo(todo)
      .then(
        todos => dispatch(receiveTodo(todo)),
        err => dispatch(receiveErrors(err.responseJSON))
      ).then(dispatch(clearErrors()));
  };
};

export const updateTodo = (todo) => {
  return dispatch => {
    
    return APIUtil.updateTodo(todo)
      .then(
        todos => dispatch(receiveTodo(todos.responseJSON)),
        err => dispatch(receiveErrors(err.responseJSON))
      );
  };
};

export const deleteTodo = (id) => {
  return dispatch => {
    return APIUtil.deleteTodo(id)
      .then(
        dispatch(removeTodo(id)),
        err => dispatch(receiveErrors(err.responseJON))
      );
  };
};



















