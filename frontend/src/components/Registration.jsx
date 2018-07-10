import React, { Component } from 'react';
import AccountFields from './AccountFields';
import ReqFields from './ReqFields';
import Confirmation from './Confirmation';
import { ProgressBar } from 'react-bootstrap';

class Registration extends Component {
  constructor(props) {
      super(props);
      this.state = { 
          step : 1,
        };

      this.nextStep = this.nextStep.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.sendToBackend = this.sendToBackend.bind(this);
  
  }
    
    handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState({[name]: value})
    }

    nextStep() {
      this.setState((prevState, props) => ({
        step: prevState.step + 1
      }));
    }
    
    previousStep() {
        this.setState({
          step : this.state.step - 1
        })
    }

    sendToBackend() {
      alert('Backend not yet implemented.');
    }


    showStep() {
    switch (this.state.step) {
        case 1:
        return <AccountFields   handleChange={this.handleChange}
                                nextStep={this.nextStep}/>
        case 2:
        return <ReqFields       handleChange={this.handleChange}                        
                                nextStep={this.nextStep}/>
        case 3:
        return <Confirmation    state={this.state}
                                sendToBackend={this.sendToBackend}/>
        default:
        // nothing
    }
  }

  render() {
    var style = (this.state.step / 3 * 100) ;
    return (
        <main>
          <span className="progress-step">Step {this.state.step}</span>
          <ProgressBar now={style} />
          {this.showStep()}
        </main>
      )
    } 
};

export default Registration