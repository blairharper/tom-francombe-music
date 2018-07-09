import React, { Component } from 'react';
import Registration from './Registration';
import { Alert, Button } from 'react-bootstrap'

function LoginButton(props) {
    return (
      <Button onClick={props.onClick}>
        Login
      </Button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <Button onClick={props.onClick}>
        Logout
      </Button>
    );
  }

  function RegisterButton(props) {
    return (
      <Button onClick={props.onClick}>
        Register
      </Button>
    );
  }

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

  function UserGreeting(props) {
    return (
    <Alert bsStyle="warning">
    <strong>Welcome back!</strong> Good to see you.
    </Alert>);
    
  }
  
  function GuestGreeting(props) {
    return (
      <Alert bsStyle="warning">
      <strong>Please sign up</strong> or login.
      </Alert>);
  }

  class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleRegisterClick = this.handleRegisterClick.bind(this);    
        this.state = {
                        isLoggedIn : false,
                        register: false
                     };
      }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }
    
    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    handleRegisterClick() { 
        this.setState({register: true});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        const register = this.state.register;
        let button;

        if (register) {
            return <Registration />
        } else { 

            if (isLoggedIn) {
                button = <LogoutButton onClick={this.handleLogoutClick} />;
            } else {
                button = ( <div>
                            <LoginButton onClick={this.handleLoginClick} /> 
                            <RegisterButton onClick={this.handleRegisterClick} />
                            </div>
                        )
            
            }
            return (
                <div>
                    <Greeting isLoggedIn={isLoggedIn} />
                    {button}
                </div>
            );
        }
   }
}

export default LoginControl