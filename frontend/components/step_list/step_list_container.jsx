import {connect} from 'react-redux';
import StepList from './step_list';
import {receiveStep, receiveSteps} from '../../actions/step_actions';
import {stepsByTodoId} from '../../reducers/selectors';


  const mapStateToProps = (state, ownProps) => ({
    steps: stepsByTodoId(state, ownProps.todoId),
    todoId: ownProps.todoId
  });
  
  const mapDispatchToProps = (dispatch) => ({
    receiveSteps: (steps) => dispatch(receiveSteps(steps)),
    receiveStep: (step) => dispatch(receiveSteps(step))
  });
  


export default connect(mapStateToProps, mapDispatchToProps)(StepList);
