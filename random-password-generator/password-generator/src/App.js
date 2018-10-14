import React, { Component } from 'react';

import DataEntry from './pages/data-entry.js'
import {symbolArr} from './pages/data-entry-array.js';
import {password_generator} from './generate.js';

class App extends Component {

  generatePassword = (len)=>{
    console.log(typeof password_generator);
    console.log(password_generator(len));
  }

  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="col-6 my-3">
          <DataEntry 
            symbolArr={symbolArr}
            generatePassword={this.generatePassword}
          />
        </div>
      </div>
    );
  }
}

export default App;
