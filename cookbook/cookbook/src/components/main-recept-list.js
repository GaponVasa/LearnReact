import React, { Component } from 'react';

import Recept from './recept.js'
import MainDiv from './main-div.js';
import FindAddMenu from './find-add-menu.js';

import recepts from '../receptArr'

class MainReceptList extends Component {
    
  createReceptList(){
    return recepts.map((el, ind)=>{;
      const {
        name, 
        picLink, 
        ingridients
      } = el;
      return (
        <Recept
          key={ind}
          picLink={picLink}
          name={name}
          ingridients={ingridients}
        />
      )
    })
  }

  render() {
    return (
      <MainDiv>
        <FindAddMenu/>
        <div className="col-12 border border-primary">
          {this.createReceptList()}
        </div>
      </MainDiv>
    );
  }
}

export default MainReceptList;