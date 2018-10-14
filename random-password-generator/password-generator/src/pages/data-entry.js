import React from 'react';
import {Button} from '../components/button.js';
import {FormGroup} from '../components/form-group.js';


class DataEntry extends React.Component{
  state={
    value:""
  }

  changeInput = (event)=>{
    this.setState({
      value: event.target.value
    });
  }

  onclickButton = (event)=>{
    event.preventDefault()
    const {generatePassword} = this.props;
    const {value} = this.state;
    generatePassword(value);
  }

  render(){
    const {symbolArr} = this.props;
    //console.log(this.state.value);
    return(
      
      <form className="d-flex flex-column justify-content-center">
        <div className="form-group">
          <h1>Random password generator.</h1>
        </div>
        <div className="form-group">
          <input 
            type="text" 
            className="form-control" 
            value={this.state.value}
            onChange={this.changeInput}
            placeholder="Enter length password."
          />
          <small id="emailHelp" className="form-text text-muted">Password length in characters.</small>
        </div>
        <div className="list-group mb-3">
          {symbolArr.map((el, ind)=>{
            return(
              <FormGroup
                key={ind}
                inputId={`exampleCheck${ind}`}
                textLable={el}
              />
            )
          })}
        </div>
        <Button
          cssClass={"col-4 btn btn-primary"}
          onclick={this.onclickButton}
          textButton={"Generate password"}
        />
      </form>
        
    )
  }
}

export default DataEntry;