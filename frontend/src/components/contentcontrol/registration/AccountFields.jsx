import React, { Component } from 'react';
import { Button, ButtonGroup, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';


function FieldGroup({ id, label, help, validate}) {
  var vState;
  if (id === "formControlsPassword") {
    vState = validate;
  }
  
return (
    <FormGroup controlId={id} validationState={vState}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl />
      <FormControl.Feedback />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class AccountFields extends Component {

  render() {
    return ( <form>
      <FieldGroup 
        id="formControlsName"
        type="text"
        label="Name:"
        placeholder="Enter your name"
        onChange={this.props.handleChange}
      />

      <FieldGroup 
        id="formControlsPassword"
        type="password"
        label="Password:"
        placeholder="Create a password"
        onChange={this.props.handleChange}
        validate={this.props.getValidationState()}
      />

      <FieldGroup 
        id="formControlsEmail"
        type="text"
        label="Email:"
        placeholder="Enter your email"
        onChange={this.props.handleChange}
      />      
      <ButtonGroup>
        <Button disabled onClick={ this.props.previousStep }>Back</Button>
        <Button bsStyle ="primary" onClick={ this.props.nextStep }>Next step</Button>
       </ButtonGroup> 
      </form>
    )
  };
}

export default AccountFields