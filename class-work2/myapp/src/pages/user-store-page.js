import React, {Component} from 'react';

import {CardAddToUserStorePage} from '../components/card-add-to-user-store-page.js'

export class UserStorePage extends Component {

  render() {
    const{changeActivePageToHomePage}=this.props;
    const{changeActivePageToShoppingCard}= this.props;
    const{allGoods, lookLoggedAs}=this.props;
    const{addToCardNewGoods}=this.props;
    return (
        <div className="container">
          <h1>USER PAGE</h1>
          <div className="row">
            <div className="col-8">
              <div className="row">
                {allGoods.map((el, ind)=>{
                  return <CardAddToUserStorePage 
                          link='#' 
                          someText={el} 
                          onClickFunction={addToCardNewGoods} 
                          key={ind}
                        />
                })}
              </div>
            </div>
            <div className="col-4">
              <div>
                Logged as {lookLoggedAs}
              </div>
              <div className="flex-column ">
                <div className="my-3">
                  <button
                    className="btn btn-outline-danger"
                    onClick={changeActivePageToHomePage}
                  >
                    User Logout
                  </button>
                </div>
                <div>
                  <button
                    className="btn btn-outline-success"
                    onClick={changeActivePageToShoppingCard}
                  >
                    Orders
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )}
}