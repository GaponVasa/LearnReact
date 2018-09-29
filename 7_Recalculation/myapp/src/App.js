import React, { Component } from 'react';

import './App.css';
import Input from './components/imput.js'
import Select from './components/select';
import {calculate} from './calculate.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      value:"",
      selectValue:""
    };
  };

  handleChange = (event) =>{
    this.setState({value: event.target.value});
  };

  handleSelect = (event) =>{
    this.setState({selectValue: event.target.value});
  };

  addTag = () =>{
    const {selectValue, value} = this.state;
    return(
      <div className="form-group mt-3">
        <p className="font-weight-bold">Recalculation.</p>
        <Input 
          type={"text"} 
          name={"firstName"}
          className={"form-control mt-3"} 
          placeholder={"Enter value."}
          value={this.state.value} 
          onChange={this.handleChange}
        />
        <Select
          classNameSelect={"custom-select mt-3"}
          optionArr={['Select measurement value.','milimeter', 'centimeter', 'decimeter', 'meter']}
          value={this.state.selectValue}
          onChange={this.handleSelect}
        />
        <div className="border rounded p-3 mt-2">
          <p className="text-center">Result</p>
          <div className="milimeter mt-3">{calculate('milimeter', selectValue, value)}mm</div>
          <div className="centimeter mt-3">{calculate('centimeter', selectValue, value)}cm</div>
          <div className="meter mt-3">{calculate('decimeter', selectValue, value)}dm</div>
          <div className="meter mt-3">{calculate('meter', selectValue, value)}M</div>
        </div>
      </div>
    )
  };
  render(){
    return this.addTag();
  };
}

export default App;