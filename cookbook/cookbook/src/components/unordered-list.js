import React from 'react';

export const UnorderedList = (props)=>{
  const {arrText, arrElement, cssClassList, cssClassUl} = props;
  const flagArrText = Array.isArray(arrText);
  const flagArrElement = Array.isArray(arrElement);
  // console.log('flagArrText',flagArrText);
  // console.log('flagArrElement',flagArrElement);
  if(flagArrText && flagArrElement){
    return(
      <ul className={cssClassUl}>
        {arrText.map((el, ind)=>{
          return<li key={ind} className={cssClassList}>{`${ind+1}.  ${el}`}{arrElement[ind]}</li>
        })}
      </ul>
    ) 
  }else if(flagArrText && !flagArrElement){
    return(
      <ul className={cssClassUl}>
        {arrText.map((el, ind)=>{
          return<li key={ind} className={cssClassList}>{`${ind+1}.  ${el}`}</li>
        })}
      </ul>
    ) 
  }else if(!flagArrText && flagArrElement){
    return(
      <ul className={cssClassUl}>
        {flagArrElement.map((el, ind)=>{
          return<li key={ind} className={cssClassList}>{el}</li>
        })}
      </ul>
    ) 
  }
}