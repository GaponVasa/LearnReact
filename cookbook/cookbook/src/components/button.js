import React from 'react';

export const Button = (props)=>{
  const{cssClass, onclick, textButton} = props;
  return(
    <button 
      className={cssClass}
      onClick = {onclick}
    >
      {textButton}
    </button>
  )
}