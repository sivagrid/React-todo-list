import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TodoInput from './todoInput';
import TodoList from './todoList';
import UserInfo from './userInfo';

import actions from '../redux/actions';


function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}


class App extends React.Component {
  render() {
    return (<div><h3>Todo List</h3>
      <UserInfo user={this.props.user} generateRandomId={this.props.actions.generateRandomId} />
      <br />
      <TodoInput addTodo={this.props.actions.addTodo} />
        <br />
        <TodoList actions={this.props.actions} todos={this.props.todos} />
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


