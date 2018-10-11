import React, {Component} from 'react';

import './App.css';

import {HomePage} from './pages/home-page'
import { AdminStorePage } from './pages/admin-store-page';
import { UserStorePage } from './pages/user-store-page';
import { ShoppingCart } from './pages/shopping-cart';

class App extends Component {
  constructor(){
    super();
    this.state = {
      logged:"",
      activePage: 'home-page',
      allGoods:['MacBook pro', 'Dell monitor', 'Samsung HDD', 'ASUS Motherboard'],
      cartGoods:[]
    }
  }

  existGoodInCart = (good)=>{
    const {cartGoods} = this.state;
    const includeGood = cartGoods.includes(good);
    const inCart = "In cart";
    const outOfCart = "In list";
    if(includeGood){
      return inCart;
    }else{
      return outOfCart;
    }
  }

  deleteAllGoodsArr = (deleteInd)=>{
    let currentArr = this.state.allGoods;
    currentArr.splice(deleteInd, 1);
    this.setState({
      allGoods:currentArr
    })
  }

  deleteCartGoodsArr = (deleteInd)=>{
    let cardGoodsArr = this.state.cartGoods;
    cardGoodsArr.splice(deleteInd, 1);
    this.setState({
      cartGoods:cardGoodsArr
    })
  }

  editAllGoodsArr = (editInd, editText)=>{
    let currentArr = this.state.allGoods;
    currentArr[editInd] = editText;
    this.setState({
      allGoods:currentArr
    })
  }

  editCartGoodsArr = (editInd, editText)=>{
    let cardGoodsArr = this.state.cartGoods;
    cardGoodsArr[editInd] = editText;
    this.setState({
      cartGoods:cardGoodsArr
    })
  }

  clearCartGoods = ()=>{
    let cardGoodsArr = this.state.cartGoods;
    cardGoodsArr.length = 0;
    this.setState({
      cartGoods:cardGoodsArr
    })
  }

  addNewGoods = (newGood)=>{
    this.setState(
      prevState=>{
        return{
          allGoods:[...prevState.allGoods, newGood],
        }
      }
    )
  }

  addToCartNewGoods = (newGood)=>{
    this.setState(
      prevState=>{
        return{
          cartGoods:[...prevState.cartGoods, newGood],
        }
      }
    )
  }

  goToPeviousPage = ()=>{
    const pageAsLogged = this.state.logged;
    if(pageAsLogged === "Admin"){
      this.changeActivePageToAdminPage();
    }else if(pageAsLogged === "User"){
      this.changeActivePageToUserPage();
    }
  };

  changeActivePageToHomePage = ()=>{
    this.setState({
      activePage: 'home-page',
    });
  }

  changeActivePageToAdminPage = ()=>{
    this.setState({
      activePage: 'admin-store-page',
      logged:"Admin"
    });
  }

  changeActivePageToUserPage = ()=>{
    this.setState({
      activePage: 'user-store-page',
      logged:"User"
    });
  }

  changeActivePageToShoppingCart = ()=>{
    this.setState({
      activePage: 'shopping-cart',
    });
  }

  render() {
    const {activePage} = this.state;

    if(activePage === 'home-page'){
      return <HomePage 
        changeActivePageToAdminPage={this.changeActivePageToAdminPage}
        changeActivePageToUserPage={this.changeActivePageToUserPage}
      />;
    };
    if(activePage === 'admin-store-page'){
      return <AdminStorePage 
        deleteAllGoodsArr={this.deleteAllGoodsArr}
        editGoodsArr={this.editAllGoodsArr}
        changeActivePageToHomePage={this.changeActivePageToHomePage}
        changeActivePageToShoppingCart={this.changeActivePageToShoppingCart}
        lookLoggedAs={this.state.logged}
        allGoods={this.state.allGoods}
        addNewGoods={this.addNewGoods}
      />;
    };
    if(activePage === 'user-store-page'){
      return <UserStorePage
        existGoodInCart={this.existGoodInCart}
        changeActivePageToHomePage={this.changeActivePageToHomePage}
        changeActivePageToShoppingCart={this.changeActivePageToShoppingCart}
        lookLoggedAs={this.state.logged}
        allGoods={this.state.allGoods}
        cartGoods={this.state.cartGoods}
        addToCartNewGoods={this.addToCartNewGoods}
      />;
    };
    if(activePage === 'shopping-cart'){
      return <ShoppingCart
        deleteCartGoodsArr={this.deleteCartGoodsArr}
        editCartGoodsArr={this.editCartGoodsArr}
        clearCartGoods={this.clearCartGoods}
        toPeviousPage={this.goToPeviousPage}
        lookLoggedAs={this.state.logged}
        changeActivePageToHomePage={this.changeActivePageToHomePage}
        cartGoods={this.state.cartGoods}
      />;
    };
  }
}

export default App;