import React, {Component} from 'react';

import {ListAddToAdminStorePage} from '../components/list-add-to-admin-store-page.js';

export class ShoppingCard extends Component {
    
  render() {
    const{changeActivePageToHomePage}=this.props; 
    const{cardGoods, lookLoggedAs}=this.props;

    return (
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h1>Shopping Cart</h1>
              <ul className="list-group">
                {cardGoods.map((el, ind)=>{
                    return <ListAddToAdminStorePage link='#'  someText={el} key={ind}/>
                })}
              </ul>
            </div>
            <div className="col-4">
              <div>
                Logged as {lookLoggedAs}
              </div>
              <button
                className="btn btn-outline-success"
                onClick={changeActivePageToHomePage}
              >
                User Logout
              </button>
            </div>
          </div>
          <div className="row">
            <pre>price:</pre>
          </div>
          <div className="row">
            <button className="btn btn-primary">Ship it</button>
          </div>
        </div>
    )
  }
}