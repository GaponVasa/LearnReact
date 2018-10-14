import React from 'react';

export const FormGroup = (props)=>{
  let{cssClassDiv, cssClassLable} = props;
  const{inputId, textLable} = props;
  cssClassDiv = cssClassDiv === undefined?"form-group list-group-item":cssClassDiv;
  cssClassLable = cssClassLable === undefined?"form-check-label":cssClassLable;
  return(
    <div className={cssClassDiv}>
      <input 
        type="checkbox"
        id={inputId}
        defaultChecked="cheked"
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