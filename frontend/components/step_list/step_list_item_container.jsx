import {connect} from 'react-redux';
import StepListItem from './step_list_item';
import {receiveStep, receiveSteps, removeStep} from '../../actions/step_actions';
import {stepsByTodoId} from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => ({
  steps: stepsByTodoId(state, ownProps.todoId),
  todoId: ownProps.todoId
});

const mapDispatchToProps = (dispatch) => ({
  removeStep: (id) => dispatch(removeStep(id)),
  receiveStep: (step) => dispatch(receiveSteps(step))
});

export default connect(mapStateToProps, mapDispatchToProps)(StepListItem);
