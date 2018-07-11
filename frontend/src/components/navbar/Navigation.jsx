import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Tooltip } from 'react-bootstrap';
class Navigation extends Component {

  render() {
    return ( <div className="react-nav">
                <Navbar inverse collapseOnSelect>
                <Navbar.Header> 
                    <Navbar.Toggle />
                </Navbar.Header>    
                <Navbar.Collapse>
                    <Nav>
                    <NavItem href="#">
                    Home
                    </NavItem>
                        <NavItem eventKey={1} href="#">
                        Tutoring
                            <Tooltip placement="bottom" className="in" id="tooltip-bottom">
                            From £50/hr
                            </Tooltip>
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                        Events
                        </NavItem>
                        <NavItem eventKey={1} href="#">
                        Contact
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                        Blog
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
              
                </Navbar>
            </div> )
  };
}

export default Navigation