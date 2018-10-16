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
    return(
      <select 
        className="custom-select col-12 p-0"
        value={value}
        onChange={onchange}
      >
        <option defaultValue>Open this select menu</option>
        {optionArr.map((el, ind)=><option value={el} key={ind}>{el}</option>)}
      </select>
    )
  }
}

export default Select;