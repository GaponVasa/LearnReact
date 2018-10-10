import React, {Component} from 'react';

import {ListAddToAdminStorePage} from '../components/list-add-to-admin-store-page.js';
import { Button } from '../components/shared/button.js';

export class ShoppingCart extends Component {
    
  render() {
    const{changeActivePageToHomePage, clearCartGoods}=this.props; 
    const{cartGoods, lookLoggedAs, toPeviousPage}=this.props;

    return (
        <div className="container">
          <div className="row mb-3">
            <div className="col-8">
              <h1>Shopping Cart</h1>
              <ul className="list-group">
                {cartGoods.map((el, ind)=>{
                    return (
                      <ListAddToAdminStorePage 
                        link='#'  
                        someText={el}
                        lookLoggedAs={lookLoggedAs}
                        key={ind}
                      />
                    )
                })}
              </ul>
            </div>
            <div className="col-4">
              <div>
                Logged as {lookLoggedAs}
              </div>
              <div className="flex-column ">
                <div>
                  <Button
                    cssClass={"btn btn-outline-success my-3"}
                    onclick={toPeviousPage}
                    textButton={"Previous page"}
                  />
                </div>
                <div>
                  <Button
                    cssClass={"btn btn-outline-danger"}
                    onclick={changeActivePageToHomePage}
                    textButton={"User Logout"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <Button
                  cssClass={"btn btn-primary"}
                  onclick={clearCartGoods}
                  textButton={"Ship it"}
                />
            </div>
          </div>
        </div>
    )
  }
}