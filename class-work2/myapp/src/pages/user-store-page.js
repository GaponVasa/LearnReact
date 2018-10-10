import React, {Component} from 'react';

import {CartAddToUserStorePage} from '../components/cart-add-to-user-store-page.js'
import { Button } from '../components/shared/button.js';

export class UserStorePage extends Component {

  render() {
    const{changeActivePageToHomePage}=this.props;
    const{changeActivePageToShoppingCart}= this.props;
    const{allGoods, lookLoggedAs}=this.props;
    const{addToCartNewGoods, existGoodInCart}=this.props;
    return (
        <div className="container">
          <h1>USER PAGE</h1>
          <div className="row">
            <div className="col-8 d-flex flex-wrap">
              {allGoods.map((el, ind)=>{
                return <CartAddToUserStorePage 
                        link='#' 
                        someText={el} 
                        existGoodInCart={existGoodInCart}
                        onClickFunction={addToCartNewGoods} 
                        key={ind}
                      />
              })}
            </div>
            <div className="col-4">
              <div>
                Logged as {lookLoggedAs}
              </div>
              <div className="flex-column ">
                <div className="my-3">
                  <Button
                    cssClass={"btn btn-outline-danger"}
                    onclick={changeActivePageToHomePage}
                    textButton={"User Logout"}
                  />
                </div>
                <div>
                  <Button
                    cssClass={"btn btn-outline-success"}
                    onclick={changeActivePageToShoppingCart}
                    textButton={"Orders"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    )}
}