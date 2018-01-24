import lodash from 'lodash';
import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';

const initialState = [];

const errorReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
};

export default errorReducer;
