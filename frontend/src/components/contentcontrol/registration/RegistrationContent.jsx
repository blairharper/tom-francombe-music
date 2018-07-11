import React, { Component } from 'react';
import AccountFields from './AccountFields';
import ReqFields from './ReqFields';
import Confirmation from './Confirmation';
import { ProgressBar, Panel } from 'react-bootstrap';

class RegistrationContent extends Component {
  constructor(props) {
      super(props);
      this.state = { 
          step : 1,
          formControlsPassword : '',
        };

      this.nextStep = this.nextStep.bind(this);
      this.previousStep = this.previousStep.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.sendToBackend = this.sendToBackend.bind(this);
      this.getValidationState = this.getValidationState.bind(this);
  }
    
  getValidationState(type) {
    if (type === "password") {
      const length = this.state.formControlsPassword.length;
      if (length > 10) return 'success';
      else if (length > 5) return 'warning';
      else if (length > 0) return 'error';
      return null;
    }
  }


    handleChange(event) {
      const target = event.target;
      const value = target.value;
      const id = target.id;
      this.setState({[id]: value})
    }

    nextStep() {
      this.setState((prevState, props) => ({
        step: prevState.step + 1
      }));
    }
    
    previousStep() {
      this.setState((prevState, props) => ({
        step: prevState.step - 1
      }));
    }

    sendToBackend() {
      alert('Backend not yet implemented.');
    }


    showStep() {
    switch (this.state.step) {
        case 1:
        return <AccountFields   handleChange={this.handleChange}
                                getValidationState={this.getValidationState}
                                nextStep={this.nextStep}
                                previousStep={this.previousStep}/>
        case 2:
        return <ReqFields       handleChange={this.handleChange}                        
                                nextStep={this.nextStep}
                                previousStep={this.previousStep}/>
        case 3:
        return <Confirmation    state={this.state}
                                sendToBackend={this.sendToBackend}
                                previousStep={this.previousStep}/>
        default:
        // nothing
    }
  }

  render() {
    var style = (this.state.step / 3 * 100) ;
    return (
        <div className="registration-content-container">
          <Panel>
            <Panel.Heading><span className="progress-step">Step {this.state.step}</span><ProgressBar now={style} /></Panel.Heading>
            <Panel.Body>{this.showStep()}</Panel.Body>
          </Panel>
        </div>
      )
    } 
};

export default RegistrationContent