import React, { Component } from 'react';

import DataEntry from './pages/data-entry.js';
import Result from './pages/result.js';
import {symbolArr} from './data/data-entry-array.js';
import {password_generator} from './generator/generate.js';

class App extends Component {
  state={password:""};

  generatePassword = (len, arrCharacters)=>{
    const password = password_generator(len, arrCharacters);
    this.setState({
      password:password
    });
  }

  copyText = (link)=>{
    link.select();
    document.execCommand("copy");
  }

  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="col-6 my-3">
          <DataEntry 
            symbolArr={symbolArr}
            generatePassword={this.generatePassword}
          />
          <Result 
            onclick={this.copyText}
            result={this.state.password}
          />
        </div>
      </div>
    );
  }
}

export default App;
