import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class AccountFields extends Component {

  render() {
    return ( <div>
      <label>Name</label> 
      <input type="text"
             name="name"
             onChange={this.props.handleChange} />

      <label>Password</label>
      <input type="password"
             name="password"
             onChange={this.props.handleChange} />

      <label>Email</label>
      <input type="email"
             name="email"
             onChange={this.props.handleChange} />

      <Button style={{marginTop: 10 + 'px'}} onClick={ this.props.nextStep }>Next</Button></div>
    )
  };
}

export default AccountFields