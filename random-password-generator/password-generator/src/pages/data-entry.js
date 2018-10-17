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

  choseAllCheckboxes = ()=>{
    const form = this.form;
    const inputArr = form.querySelectorAll('input');
    const checkboxArray = Array.prototype.slice.call(inputArr);
    return checkboxArray;
  }

  handleSubmit = (event)=>{
    event.preventDefault();
    const {generatePassword} = this.props;
    const {value} = this.state;
    const checkboxArray = this.choseAllCheckboxes();
    const checkedCheckboxesArr = [];
    checkboxArray.forEach(
      (input) =>{
        let sibling = input.nextSibling;
        let siblingText = sibling.innerText;
        let text = siblingText.match(/({\}})|({})|({.})|({...})/g);
        if(input.checked && text !== null){
          text = text[0].substring(1, text[0].length - 1);
          checkedCheckboxesArr.push(text);
        };
    } );
    generatePassword(value, checkedCheckboxesArr);
  }

  checkAll = ()=>{
    const checkboxArray = this.choseAllCheckboxes();
    let stateCheckbox;
    checkboxArray.forEach((el, ind)=>{
      if(ind === 0)stateCheckbox = el.checked;
      el.checked = stateCheckbox; 
    })
  }

  render(){
    const {symbolArr} = this.props;
    return(
      
      <form 
        className="d-flex flex-column justify-content-center col-12 p-0"
        onSubmit={this.handleSubmit}
        ref={form => this.form = form}
      >
        <div className="form-group">
          <h1>Random password generator.</h1>
        </div>
        <div className="form-group d-flex">
          <div className="col-6 p-0">
            <Select
              value={this.state.value}
              onchange={this.changeInput}
            />
          </div>
          <div className="col-6 p-0">
            <FormGroup
              inputId={"exampleCheckSelectAll"}
              textLable={"Select all checkboxes"}
              onclick={this.checkAll}
            />
          </div>
        </div>
        <div className="col-12 d-flex flex-wrap my-3 p-0">
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