import React from 'react';
import StepListContainer from '../step_list/step_list_container';
// import TodoDetailViewContainer from './todo_detail_view_container';

class TodoDetailView extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    const {title, id, body, deleteTodo} = this.props;

    return (
      <div>
        <h4>Detail View</h4>
        <section>{body}</section>
        
        <ul>
          <StepListContainer todoId={id}/>
        </ul>
    
        <button 
          onClick={() => this.deleteButtonHandler() }>Delete Todo</button>
        
      </div>
    );
  }

  deleteButtonHandler () {
    console.log(this.props.id);
    this.props.deleteTodo(this.props.id);
  }
  

}

export default TodoDetailView;
