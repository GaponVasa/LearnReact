import React from 'react';
import { Button } from './shared/button';

export const InputGroup = (props)=>{
  const {onclick, textButton, value, onchange, placeholder} = props;
  return(
    <div className="input-group mb-3">
      <input 
        type="text" 
        className="form-control" 
        placeholder={placeholder} 
        value={value}
        onChange={onchange}
        aria-describedby="button-addon2"
      />
      <div className="input-group-append">
        <Button
          cssClass={"btn btn-outline-secondary"}
          onclick={onclick}
          textButton={textButton}
        />
      </div>
    </div>
  )
}