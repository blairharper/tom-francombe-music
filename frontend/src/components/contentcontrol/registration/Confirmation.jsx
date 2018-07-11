import React, { Component } from 'react';
import { Button, ButtonGroup, ListGroup, ListGroupItem } from 'react-bootstrap';

class Confirmation extends Component {

  render() {
    
    return (<div> 
        <ListGroup>
            <ListGroupItem header="Name:">{this.props.state.formControlsName}</ListGroupItem>
            <ListGroupItem header="E-Mail:">{this.props.state.formControlsEmail}</ListGroupItem>
            <ListGroupItem header="Instrument:">{this.props.state.formControlsInstrument}</ListGroupItem>
            <ListGroupItem header="Skill level:">{this.props.state.formControlsSkill}</ListGroupItem>
            <ListGroupItem header="Age:">{this.props.state.formControlsAge}</ListGroupItem>
        </ListGroup>
      
        <ButtonGroup>
        <Button onClick={ this.props.previousStep }>Back</Button>
        <Button bsStyle ="primary" onClick={ this.props.sendToBackend }>Submit</Button>
       </ButtonGroup>    
       </div>)
  }
}

export default Confirmation