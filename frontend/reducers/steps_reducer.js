import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from "../actions/step_actions.js";
import lodash from 'lodash';
import { uniqueId } from '../util/util';

const initialState = {
  1: { // this is the step with id = 1
    id: 1,
    title: 'walk to store',
    done: false,
    todo_id: 1
  },
  2: { // this is the step with id = 2
    id: 2,
    title: 'buy soap',
    done: false,
    todo_id: 1
  }
};

const stepsReducer = (state = initialState, action) => {
  const newState = {};
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_STEPS:
      action.todos.forEach( (step) => {
        newState[step.id] = step;
      });
      return newState;
      
    case RECEIVE_STEP:
      newState[action.step.id] = action.step;
      return lodash.merge({}, state, newState);
      
    case REMOVE_STEP:
      lodash.merge(newState, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default stepsReducer;
