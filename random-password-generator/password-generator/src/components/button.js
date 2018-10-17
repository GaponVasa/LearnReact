import React from 'react';

export const Button = (props)=>{
  const{type, cssClass, onclick, textButton, id} = props;
  return(
    <button 
      type={type}
      className={cssClass}
      onClick = {onclick}
      id={id}
    >
      {textButton}
    </button>
  )
}