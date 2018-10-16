import React, { Component } from 'react';

import DataEntry from './pages/data-entry.js'
import {symbolArr} from './data/data-entry-array.js';
import {password_generator} from './generator/generate.js';

class App extends Component {

  generatePassword = (len)=>{
    const password = password_generator(len);
    console.log(typeof password_generator);
    console.log(password, 'length', password.length);
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
