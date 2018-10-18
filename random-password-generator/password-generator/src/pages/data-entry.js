import React from 'react';
import {Button} from '../components/button.js';
import {InputCheckboxGroup} from '../components/input-checkbox-group.js';
import Select from '../components/select.js';

class DataEntry extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value:"",
      errorSelect: false,
      errorCheckboxes: false,
    }
  }

  changeInput = (event)=>{
    this.setState({
      value: event.target.value
    });
  }
  //Створюємо массив з InputCheckboxGroup на основі данних з массиву data-entry-array
  createInputGroups = (arr)=>{ 
    return arr.map((el, ind)=>{
      return(
        <div className="col-6 p-0" key={ind}>
          <InputCheckboxGroup
            inputId={`exampleCheck${ind}`}
            textLable={el}
          />
        </div>
      )
    });
  }
  //Створюємо массив посилань на всі input-и, котрі містяться в формі
  choseAllCheckboxes = ()=>{
    const form = this.form;
    const inputArr = form.querySelectorAll('input');
    const checkboxArray = Array.prototype.slice.call(inputArr);
    return checkboxArray;
  }
  //Попередня перевірка данних для ф.generatePassword і її запуск
  checkDataBeforStartFunction = (linkToFunc, selectData, checkboxesData)=>{
    const flagSelect = selectData === '';
    const flagCheckboxes = checkboxesData.length === 0;
    if(flagSelect || flagCheckboxes){
      if(flagSelect){
        this.setState({
          errorSelect:true,
        })
      }else{
        this.setState({
          errorSelect:false,
        })
      }
      if(flagCheckboxes){
        this.setState({
          errorCheckboxes:true,
        })
      }else{
        this.setState({
          errorCheckboxes:false,
        })
      }
    }else{
      this.setState({
        errorSelect:false,
        errorCheckboxes:false,
      })
      linkToFunc(selectData, checkboxesData);
    }
  }
  //Ф. яка перевіряє і добавляє повідомлення про недостачу данних для запуску ф. генерації
  addErrorMessage = (stateObjec,  message)=>{
    if(stateObjec){
      return(
        <div className="text-danger">
          <h4>{message}</h4>
        </div>
      )
    }else{
      return null
    }
  }
  //Ф. яка створює масив з данними на основі вибраних Checkboxes
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
    this.checkDataBeforStartFunction(generatePassword, value, checkedCheckboxesArr);
  }
  //Ф. яка виставляє, або знімає всі прапорці з Checkboxes 
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
    let {errorSelect, errorCheckboxes} = this.state;
    return(
      <form 
        className="d-flex flex-column justify-content-center col-12 p-0"
        onSubmit={this.handleSubmit}
        ref={form => this.form = form}
      >
        <div className="form-group mb-3">
          <h1>Random password generator.</h1>
        </div>
        {this.addErrorMessage(errorSelect, "Select the length of the password.")}
        <div className="form-group d-flex mb-3">
          <div className="col-6 p-0">
            <Select
              value={this.state.value}
              onchange={this.changeInput}
            />
          </div>
          <div className="col-6 p-0">
            <InputCheckboxGroup
              inputId={"exampleCheckSelectAll"}
              textLable={"Select all checkboxes"}
              onclick={this.checkAll}
            />
          </div>
        </div>
        {this.addErrorMessage(errorCheckboxes, "Select at least one checkbox.")}
        <div className="col-12 d-flex flex-wrap mb-3 p-0">
          {this.createInputGroups(symbolArr)}
        </div>
        <Button
          type={"submit"}
          cssClass={"col-4 btn btn-outline-primary"}
          onclick={null}
          textButton={"Generate password"}
        />
      </form> 
    )
  }
}

export default DataEntry;