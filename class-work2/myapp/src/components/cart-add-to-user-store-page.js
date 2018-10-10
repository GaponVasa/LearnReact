import React from 'react';
import { Button } from './shared/button.js';

export class CartAddToUserStorePage extends React.Component {

  render() {
    const{someText, onClickFunction, existGoodInCart}=this.props;
    return(
      <div className="card col-4 mb-2">
        <div className="card-body">
          <h5 className="card-title">{someText}</h5>
          <p className="card-text">{existGoodInCart(someText)}</p>
          <Button
            cssClass={"btn btn-primary"}
            onclick={()=>onClickFunction(someText)}
            textButton={"Buy"}
          />
        </div>
      </div>
    )
  }
}