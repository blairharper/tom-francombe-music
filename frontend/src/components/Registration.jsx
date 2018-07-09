import React, { Component } from 'react';
import AccountFields from './AccountFields';
import RequirementsFields from './RequirementsFields';
import { ProgressBar } from 'react-bootstrap';

var fieldValues = {
    name     : null,
    email    : null,
    password : null,
    age      : null,
    inst     : [],
}


class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            step : 1,
         };

         this.nextStep = this.nextStep.bind(this);
    }
    
    saveValues(fields) {
        return function() { 
          fieldValues = Object.assign({}, fieldValues, fields)
        }()
    }
      
    nextStep() {
      this.setState({
        step : this.state.step + 1
      })
    }
      
      // Same as nextStep, but decrementing
    previousStep() {
        this.setState({
          step : this.state.step - 1
        })
    }

    showStep() {
    switch (this.state.step) {
        case 1:
        return <AccountFields
                                nextStep={this.nextStep}
                                saveValues={this.saveValues} />
        case 2:
        return <AccountFields   
                                nextStep={this.nextStep}
                                saveValues={this.saveValues} />
        default:
        // nothing
    }
  }

  render() {
    var style = (this.state.step / 4 * 100) ;
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