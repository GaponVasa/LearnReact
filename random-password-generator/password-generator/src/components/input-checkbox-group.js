import React from 'react';

export const InputCheckboxGroup = (props)=>{
  let{cssClassDiv, cssClassLable, onclick} = props;
  const{inputId, textLable} = props;
  cssClassDiv = cssClassDiv === undefined?"form-group list-group-item":cssClassDiv;
  cssClassLable = cssClassLable === undefined?"form-check-label":cssClassLable;
  return(
    <div className={cssClassDiv}>
      <input 
        type="checkbox"
        id={inputId}
        defaultChecked="cheked"
        onClick={onclick}
      />
      <label 
        className={cssClassLable} 
        htmlFor={inputId}
      >
        {textLable}
      </label>
    </div>
  )
}