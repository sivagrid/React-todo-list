import React from 'react';

class UserInfo extends React.Component {
  generateRandomId(evt) {
    evt.preventDefault();
    this.props.generateRandomId();
  }
  render () {
    return (
      <div>
        <div>
          <span>{this.props.user.name}</span>&nbsp; : &nbsp;
          <span>{this.props.user.id}</span>
        </div>
        <button onClick={this.generateRandomId.bind(this)}>Generate RNDID</button>
      </div>
    );
  }
}

export default UserInfo;
