import React, {Component} from 'react';

import {ListAddToAdminStorePage} from '../components/list-add-to-admin-store-page.js';

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
    const{changeActivePageToShoppingCard}= this.props;
    const{allGoods, lookLoggedAs}=this.props;
    return (
        <div className="container flex-grow-1">
          <div className="row">
            <div className="col-8">
              <div className="admin-orders">
                <h1>ADMIN PAGE</h1>
                <ul className="list-group mb-4">
                  {allGoods.map((el, ind)=>{
                      return <ListAddToAdminStorePage link='#' someText={el} key={ind} />
                  })}
                </ul>
                <p>Add new</p>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                      <span className="input-group-text">@</span>
                  </div>
                  <input 
                      type="text" 
                      className="form-control" 
                      placeholder="enter new name"
                      value={this.state.inpuText}
                      onChange={this.changeInpuText}
                  />
                  <button 
                      className="btn btn-primary"
                      onClick = {this.addItem}
                  >
                      Add
                  </button>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div>
                  Logged as {lookLoggedAs}
              </div>
              <div className="flex-column">
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
    )
  }
}