import React, { Component } from 'react';
import { List } from './list';

const Span = (props)=>{return<span className="ml-5">{props.element}</span>}

export class UnorderedList extends Component{
  existElement = (ind)=>{
    const {arrElement} = this.props;
    const flagArrElement = Array.isArray(arrElement);
    return flagArrElement?<Span element={arrElement[ind]}/>:null
  }
  render(){
    const {arrText, cssClassList, cssClassUl} = this.props;
    return(
      <ul className={cssClassUl}>
      {arrText.map((el, ind)=>{
        return(
          <List
            key={ind}
            id={ind+1}
            ingridient={el}
            cssClassList={cssClassList}
          >
            {this.existElement(ind)}
          </List>
        )
      })}
    </ul>
    )
  }
}

export default UnorderedList;