import React, {Component} from 'react';

import {ListAddToAdminStorePage} from '../components/list-add-to-admin-store-page.js';
import { Button } from '../components/shared/button.js';
import { InputGroup } from '../components/input-group-with-button.js';

export class AdminStorePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      listArray:[],
      inpuText:''
    }
  }
  
  changeInpuText=(event)=>{
    this.setState({
        inpuText:event.target.value
    })
  }

  addItem = ()=>{
    const{addNewGoods}= this.props;
    const inpuText = this.state.inpuText;
    if(inpuText === '' && inpuText !== 'Please. Fill in the field.'){
      this.setState({
          inpuText:'Please. Fill in the field.'
      })
    }else{
      addNewGoods(inpuText);
      this.setState({inpuText:''})
    };
  }

  render() {
    const{changeActivePageToHomePage}= this.props;
    const{changeActivePageToShoppingCart}= this.props;
    const{allGoods, lookLoggedAs, editGoodsArr}=this.props;
    return (
        <div className="container flex-grow-1">
          <div className="row">
            <div className="col-8">
              <div className="admin-orders">
                <h1>ADMIN PAGE</h1>
                <ul className="list-group mb-4">
                  {allGoods.map((el, ind)=>{
                      return (
                        <ListAddToAdminStorePage 
                          link='#' 
                          someText={el}
                          editGoodsArr={editGoodsArr}
                          keyId={ind}
                          key={ind} 
                        />
                      )
                  })}
                </ul>
                <p>Add new</p>
                <InputGroup
                  placeholder={"Enter new name"}
                  value={this.state.inpuText}
                  onchange={this.changeInpuText}
                  onclick={this.addItem}
                  textButton={"Add"}
                />
              </div>
            </div>
            <div className="col-4">
              <div>
                  Logged as {lookLoggedAs}
              </div>
              <div className="flex-column">
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
    )
  }
}