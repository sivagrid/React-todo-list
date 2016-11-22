import React from 'react';

class TodoItem extends React.Component {
  
  handleComplete(evt) {
    evt.preventDefault();
    this.props.actions.completeTodo(this.props.todo.id);
  }

  handleDelete(evt) {
    evt.preventDefault();
    this.props.actions.deleteTodo(this.props.todo.id);
  }

  render () {
    return (
      <li>
        <div>{this.props.todo.text}</div>
        <button onClick={this.handleComplete.bind(this)}>Mark as completed</button>
        <button onClick={this.handleDelete.bind(this)}>Delete Todo</button>
      </li>
    );
  }
}

export default TodoItem;
