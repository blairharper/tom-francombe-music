import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Tooltip } from 'react-bootstrap';
import ContentControl from '../contentcontrol/ContentControl';

var navItems = {
    first  : "Tutoring",
    second   : "Events",
    third  : "Contact",
    fourth   : "Blog",
}

function HomeNav(props) {
    return (
        <NavItem onClick={props.onClick}>
        Home
        </NavItem>
    );
}

function FirstNav(props) {
    return (
        <NavItem onClick={props.onClick}>
        {navItems.first}
        <Tooltip placement="bottom" className="in" id="tooltip-bottom">
            From £50/hr
        </Tooltip>
        </NavItem>

    );
}

function SecondNav(props) {
    return (
        <NavItem onClick={props.onClick}>
        {navItems.second}
        </NavItem>
    );
}

function ThirdNav(props) {
    return (
        <NavItem onClick={props.onClick}>
        {navItems.third}
        </NavItem>
    );
}


function FourthNav(props) {
    return (
        <NavItem onClick={props.onClick}>
        {navItems.fourth}
        </NavItem>
    );
}

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.handleHomeNavClick = this.handleHomeNavClick.bind(this);
        this.handleFirstNavClick = this.handleFirstNavClick.bind(this);
        this.handleSecondNavClick = this.handleSecondNavClick.bind(this);
        this.handleThirdNavClick = this.handleThirdNavClick.bind(this);
        this.handleFourthNavClick = this.handleFourthNavClick.bind(this);

        this.state = {
                        currentPage : 'home',
                     };
      }

    handleHomeNavClick() {
        this.setState({currentPage : 'home'});
    }

    handleFirstNavClick() {
        this.setState({currentPage : 'FirstNav'});
    
    }

    handleSecondNavClick() {
        this.setState({currentPage : 'SecondNav'});

    }

    handleThirdNavClick() {
        this.setState({currentPage : 'ThirdNav'});
  
    }

    handleFourthNavClick() {
        this.setState({currentPage : 'FourthNav'});

    }

  render() {
    return (<div> 
                <div className="react-nav">
                    <Navbar inverse collapseOnSelect>
                    <Navbar.Header> 
                        <Navbar.Toggle />
                    </Navbar.Header>    
                    <Navbar.Collapse>
                        <Nav>
                            <HomeNav onClick={this.handleHomeNavClick}/>
                            <FirstNav onClick = {this.handleFirstNavClick} />
                            <SecondNav onClick = {this.handleSecondNavClick} />
                            <ThirdNav onClick = {this.handleThirdNavClick} />
                            <FourthNav onClick = {this.handleFourthNavClick} />
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                </div>
            <ContentControl currentPage={this.state.currentPage} />
            </div>)
  };
}

export default Navigation