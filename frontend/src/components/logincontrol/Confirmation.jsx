import React, { Component } from 'react';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';

class Confirmation extends Component {

  render() {
    
    return (<div> 
        <ListGroup>
            <ListGroupItem header="Name:">{this.props.state.name}</ListGroupItem>
            <ListGroupItem header="E-Mail:">{this.props.state.email}</ListGroupItem>
            <ListGroupItem header="Instrument:">{this.props.state.inst}</ListGroupItem>
            <ListGroupItem header="Skill level:">{this.props.state.skill}</ListGroupItem>
            <ListGroupItem header="Age:">{this.props.state.age}</ListGroupItem>
        </ListGroup>
      
        <Button style={{marginTop: 10 + 'px'}} onClick={ this.props.sendToBackend }>Register</Button></div>
    )
  }
}

export default Confirmation