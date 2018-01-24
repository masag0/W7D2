import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from "../actions/todo_actions.js";
import lodash from 'lodash';
import { uniqueId } from '../util/util';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  // console.log(state);
  const newState = {};
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach( (todo) => {
        newState[todo.id] = todo;
      });
      return newState;

    case RECEIVE_TODO:
      const obj = {};
      // console.log('here');
      console.log(action.todo);
      // action.todo.id = uniqueId();
      obj[action.todo.id] = action.todo;
      return lodash.merge({}, state, obj);

    case REMOVE_TODO:
      lodash.merge(newState, state);
      delete newState[action.id];
      return newState;

    default:
      return state;
  }
};

export default todosReducer;
