import React from 'react';
import TodoItem from './todoItem'

class TodoList extends React.Component {
  render () {
    return (
      <ul>
        {
          this.props.todos.map((todo) => {
            return <TodoItem actions={this.props.actions} key={todo.id} todo={todo} />
          })
        }
      </ul>
    );
  }
}

export default TodoList;
