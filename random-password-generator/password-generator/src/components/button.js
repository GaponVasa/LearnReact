import React from 'react';

export const Button = (props)=>{
  const{type="button", cssClass, onclick, textButton} = props;
  return(
    <button 
      type={type}
      className={cssClass}
      onClick = {onclick}
    >
      {textButton}
    </button>
  )
}