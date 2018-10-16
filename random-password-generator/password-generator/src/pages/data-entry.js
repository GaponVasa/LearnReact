import React from 'react';
import {Button} from '../components/button.js';
import {FormGroup} from '../components/form-group.js';
import Select from '../components/select.js';


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
    //event.preventDefault()
    const {generatePassword} = this.props;
    const {value} = this.state;
    //console.log()
    generatePassword(value);
  }

  createInputGroups = (arr)=>{ 
    return arr.map((el, ind)=>{
      return(
        <div className="col-6 p-0" key={ind}>
          <FormGroup
            inputId={`exampleCheck${ind}`}
            textLable={el}
          />
        </div>
      )
    });
  }

  handleSubmit = (event)=>{
    event.preventDefault();
    const form = this.form;
    const {generatePassword} = this.props;
    const {value} = this.state;
    const inputArr = form.querySelectorAll('input');
    const checkboxArray = Array.prototype.slice.call(inputArr);
    const checkedCheckboxes = checkboxArray.map(
      (input) =>{
        let sibling = input.nextSibling;
        let siblingText = sibling.innerText;
        let text = siblingText.match(/({\}})|({})|({.})|({...})/g);
        if(input.checked && text !== null){
          text = text[0].substring(1, text[0].length - 1);
          return text;
        }
    } );
    generatePassword(value, checkedCheckboxes);
    console.log('checked array:', checkedCheckboxes);
  }

  render(){
    const {symbolArr} = this.props;
    //console.log(this.state.value);
    return(
      
      <form 
        className="d-flex flex-column justify-content-center col-12"
        onSubmit={this.handleSubmit}
        ref={form => this.form = form}
      >
        <div className="form-group">
          <h1>Random password generator.</h1>
        </div>
        <div className="form-group col-6 p-0">
          <p className="my-2 p-0">Password length in characters.</p>
          <Select
            value={this.state.value}
            onchange={this.changeInput}
          />
        </div>
        <div className="col-12 d-flex flex-wrap mb-3 p-0">
          {this.createInputGroups(symbolArr)}
        </div>
        <Button
          type={"submit"}
          cssClass={"col-4 btn btn-primary"}
          onclick={null}
          textButton={"Generate password"}
        />
      </form>
        
    )
  }
}

export default DataEntry;