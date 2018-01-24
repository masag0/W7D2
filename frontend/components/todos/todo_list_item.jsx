import React from 'react';
import TodoDetailView from './todo_detail_view';
import lodash from 'lodash';

class TodoListItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = { done: props.done, detail: false };

    this.handleButton = this.handleButton.bind(this);
    this.openDetail = this.openDetail.bind(this);
  }

  render () {
    const {title, id, removeTodo} = this.props;
    const {done} = this.state;
    let buttonTxt;
    if (done) {
      buttonTxt = "Undo";
    } else {
      buttonTxt = "Done";
    }
    return (
      <div>
        <li>
          <h3 onClick={this.openDetail} >{title}</h3>
          <button onClick={this.handleButton}>{buttonTxt}</button>
          {this.state.detail &&
            <TodoDetailView {...this.props}/>
          }

        </li>
      </div>
  );
  }

  openDetail (e) {
    e.preventDefault();
    this.setState({detail: !this.state.detail});
  }

  handleButton (e) {
    e.preventDefault();
    this.setState({ done: !this.state.done},
      () => {
        const todo = {
          id: this.props.id,
          title: this.props.title,
          body: this.props.body,
          done: this.state.done
        };
        this.props.updateTodo(todo);
      }
    );

  }
}


export default TodoListItem;
