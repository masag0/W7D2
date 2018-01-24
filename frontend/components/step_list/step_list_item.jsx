import React from 'react';

class StepListItem extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    const {steps, todo_id} = this.props;
    return (
      <div>
        <li>item
          <h5>{steps.title}</h5>
          <span>{steps.body}</span>
        </li>
      </div>
    );
  }
}

export default StepListItem;