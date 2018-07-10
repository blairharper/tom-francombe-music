import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ReqFields extends Component {

  render() {

    return ( <div>
      <label>Instrument</label> 
      <input type="text"
             name="inst"
             onChange={this.props.handleChange} />

      <label>Age</label>
      <input type="text"
             name="age"
             onChange={this.props.handleChange} />
      
      <label>Skill level</label>
      <input type="text"
             name="skill"
             onChange={this.props.handleChange} />
      

      <Button style={{marginTop: 10 + 'px'}} onClick={ this.props.nextStep }>Next</Button></div>
    )
  };
}
export default ReqFields