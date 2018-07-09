// file: AccountFields.jsx
import React, { Component } from 'react';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';

class Confirmation extends Component {

  render() {
    
    return (<div> 
        {/* <ListGroup>
            <ListGroupItem header="Name:">{this.props.state.name}</ListGroupItem>
            <ListGroupItem header="Heading 2" href="#">
                Linked item
            </ListGroupItem>
            <ListGroupItem header="Heading 3" bsStyle="danger">
                Danger styling
            </ListGroupItem>
            </ListGroup> */}
      
        <Button style={{marginTop: 10 + 'px'}} onClick={ this.props.nextStep }>Register</Button></div>
    )
  }
}

export default Confirmation