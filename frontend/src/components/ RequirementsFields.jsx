// file: AccountFields.jsx
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class RequirementsFields extends Component {

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value})
  }

  handleSubmit() {
    // Get values via this.refs
    var data = {
      inst     : this.state.inst,
      age : this.state.age
    }
    this.props.saveValues(data);
    this.props.nextStep();
  }

  render() {
      
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    return ( <div>
      <label>Instrument</label> 
      <input type="text"
             name="inst"
             onChange={this.handleChange} />

      <label>Age</label>
      <input type="text"
             name="age"
             onChange={this.handleChange} />

      <Button style={{marginTop: 10 + 'px'}} onClick={ this.handleSubmit }>Next</Button></div>
    )
  };
}
export default RequirementsFields