import React, { Component } from 'react';
import { Button, ButtonGroup, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}


class ReqFields extends Component {

  render() {

    return ( <form>
      <FieldGroup 
        id="formControlsInstrument"
        type="text"
        label="Instrument:"
        placeholder="Enter the instrument you play"
        onChange={this.props.handleChange}
      />

      <FieldGroup 
        id="formControlsAge"
        type="text"
        label="Age:"
        placeholder="Enter your age"
        onChange={this.props.handleChange}
      />

      <FieldGroup 
        id="formControlsSkill"
        type="text"
        label="Skill Level:"
        placeholder="Enter your skill level"
        onChange={this.props.handleChange}
      />
      <ButtonGroup>
        <Button onClick={ this.props.previousStep }>Back</Button>
        <Button bsStyle ="primary" onClick={ this.props.nextStep }>Next step</Button>
      </ButtonGroup>
      </form>
    )
  };
}
export default ReqFields