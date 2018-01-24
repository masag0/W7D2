import React from 'react';
import StepListItemContainer from './step_list_item_container';

class StepList extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render () {
    console.log(this.props);
    return (
      <div>
        <ul>step_list
          {
            this.props.steps.map ( el => (
              <li>
                <StepListItemContainer 
                  todoId={el.todoId}
                />
              </li>
              
            ))
            
          }
        </ul>
      
      </div>
    );
  }
}

export default StepList;
