import React from 'react';

class Select extends React.Component{

  createOptionArray = ()=>{
    let arr = [];
    const minCharacters = 8;
    const maxCharacters = 20;
    for(let i = minCharacters; i <= maxCharacters; i++){
      arr.push(i);
    };
    return arr;
  }

  render(){
    const optionArr = this.createOptionArray();
    const {value, onchange} = this.props;
    const styleSelect = {height: 'calc(3rem + 2px)'};
    return(
      <select 
        style={styleSelect}
        className="custom-select col-12"
        value={value}
        onChange={onchange}
      >
        <option defaultValue>Select the length of the password.</option>
        {optionArr.map((el, ind)=><option value={el} key={ind}>{el}</option>)}
      </select>
    )
  }
}

export default Select;