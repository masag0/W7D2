import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';
import {uniqueId} from '../../util/util';
// import {receiveTodo} from '../../actions/todo_actions';

class TodoList extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const props = this.props;
    return (
      <div>
        <ul>
          {props.todos.map( (el, idx) => (
            <TodoListItem id={el.id} done={el.done} key={idx}
              title={el.title} body={el.body}
              removeTodo={props.removeTodo}
              updateTodo={props.updateTodo}
              deleteTodo={props.deleteTodo}
            />
          ))}
        </ul>
        <TodoForm receiveTodo={props.receiveTodo}
                  createTodo={props.createTodo}
                  errors={props.errors}
        />
      </div>
    );
  }
  
  componentDidMount() {
    this.props.fetchTodos();
  }
}

export default TodoList;
