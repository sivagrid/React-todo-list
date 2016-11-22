import React from 'react';

class TodoInput extends React.Component {
  constructor(props) {
    super();
    this.state = {
      inputText: ''
    }
  }

  handleChange(evt) {
    this.setState({
      inputText: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addTodo(this.state.inputText);
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Enter Name: &nbsp;
            <input type="text" 
              placeholder="Enter Name" 
              value={this.state.inputText}
              onChange={this.handleChange.bind(this)} />
          </label>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default TodoInput;
