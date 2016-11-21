import React from 'react';
import TodoInput from './todoInput';
import TodoList from './todoList';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return state;
}

class App extends React.Component {
  render() {
    return (<div><h3>Todo List</h3>
      <TodoInput dispatch={this.props.dispatch} />
        <br />
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
};

export default connect(mapStateToProps)(App);


