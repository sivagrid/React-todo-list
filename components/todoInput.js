import React from 'react';
import actions from '../redux/actions';

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
    this.props.dispatch(actions.addToDo(this.state.inputText));
  }

  render () {
    return (
      <div>
        <label>Enter Name: &nbsp;
          <input type="text" 
            placeholder="Enter Name" 
            value={this.state.inputText}
            onChange={this.handleChange.bind(this)} />
        </label>
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default TodoInput;
