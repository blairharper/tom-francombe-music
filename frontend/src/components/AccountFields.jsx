// file: AccountFields.jsx
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class AccountFields extends Component {

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value})
  }

  handleSubmit() {
    // Get values via this.refs
    var data = {
      name     : this.state.name,
      password : this.state.password,
      email    : this.state.email
    }
    this.props.saveValues(data);
    this.props.nextStep();
  }

  render() {
      
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    return ( <div>
      <label>Name</label> 
      <input type="text"
             name="name"
             onChange={this.handleChange} />

      <label>Password</label>
      <input type="password"
             name="password"
             onChange={this.handleChange} />

      <label>Email</label>
      <input type="email"
             name="email"
             onChange={this.handleChange} />

      <Button style={{marginTop: 10 + 'px'}} onClick={ this.handleSubmit }>Next</Button></div>
    )
  };
}

export default AccountFields