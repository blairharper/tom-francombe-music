import React, { Component } from 'react';
import AccountFields from './AccountFields';
var fieldValues = {
    name     : null,
    email    : null,
    password : null,
    age      : null,
    inst     : null,
}


class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            step : 1
         };
      }
    
    saveValues(fields) {
        return function() {
          // Remember, `fieldValues` is set at the top of this file, we are simply appending
          // to and overriding keys in `fieldValues` with the `fields` with Object.assign
          // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
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
        return <AccountFields fieldValues={fieldValues}
                                nextStep={this.nextStep}
                                saveValues={this.saveValues} />
    }
  }

  render() {
    var style = {
      width : (this.state.step / 4 * 100) + '%'
    }
    return (
        <main>
          <span className="progress-step">Step {this.state.step}</span>
          <progress className="progress" style={style}></progress>
          {this.showStep()}
        </main>
      )
    } 

};

export default Registration