import React, { Component } from 'react';

import CreateTable from './components/create-table/create-table.js';
import Input from './components/input/input.js';

import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      valueN: '',
      valueM: '',
      clickSwitch: false
    };
  };

  setValue = (event) =>{
    const target = event.target
    if(target.id === 'numberN'){
      this.setState({valueN:target.value});
    }else if(target.id === 'numberM'){
      this.setState({valueM:target.value});
    };
    this.downSwitch();
  };

  upSwitch = ()=>{this.setState({clickSwitch:true})};

  downSwitch = ()=>{this.setState({clickSwitch:false})};

  setSize = ()=>{
    if(this.state.valueN !== '' && this.state.valueM !== '' && this.state.clickSwitch){
      return[this.state.valueN, this.state.valueM]
    }else{
      return;
    }
  };

  render(){
      return(
        <div>
          <div className="head">
            {/* <div className="wrapper">
              <input 
                id="numberN" 
                type="text" 
                placeholder="Enter number N line"
                value={this.state.value}
                onBlur={this.setValue}
              />
             
            </div> */}
            <Input
              id={"numberN"}
              type={"text"}
              placeholder={"Enter number N line"}
              value={this.state.value}
              onBlur={this.setValue}
              onClick={null}
            />
            <Input
              id={"numberM"}
              type={"text"}
              placeholder={"Enter number M line"}
              value={this.state.value}
              onBlur={this.setValue}
              onClick={null}
            />
            <Input
              id={"button"}
              type={"button"}
              placeholder={""}
              value={"Random Table"}
              onBlur={null}
              onClick={this.upSwitch}
            />
            {/* <div className="wrapper">
              <input 
                id="numberM" 
                type="text" 
                placeholder="Enter number M column"
                value={this.state.value} 
                onBlur={this.setValue}
              />
            </div> */}
            {/* <div className="wrapper">
              <input 
                id="button" 
                type="button" 
                value="Random Table"
                onClick={this.upSwitch}
              />
            </div> */}
          </div>
          <div className="container">
            <CreateTable tableSize = {this.setSize()} />
          </div>
        </div>
      );
  };
}

export default App;
