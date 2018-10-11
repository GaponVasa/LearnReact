import React from 'react';
import { Button } from './shared/button';
import { InputGroup } from './shared/input-group-with-button';

export class ListAddToAdminStorePage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      inputText: this.props.someText,
      changeItem: false,
    }
  }

  changeInpuText = (event)=>{
    this.setState({
      inputText:event.target.value
    })
  }

  changeItemTrue = ()=>{
    this.setState({
      changeItem: true
    })
  }

  changeItemFalse = ()=>{
    const {keyId, editGoodsArr} = this.props;
    editGoodsArr(keyId, this.state.inputText);
    this.setState({
      changeItem: false
    })
  }

  onlyShow = ()=>{
    const{someText, link}=this.props;
    const{deleteCartGoodsArr}=this.props;
    return(
      <li className="list-group-item mb-3">
        <a href={link} className="admin-orders__link">
          {someText}
        </a>
        <Button
          cssClass={"btn btn-outline-danger float-right "}
          onclick={deleteCartGoodsArr}
          textButton={"Delete page"}
        />
      </li>
    )
  }

  showAndEdit = ()=>{
    const{someText, link}=this.props;
    const{deleteAllGoodsArr}=this.props;
    return(
      <li className="list-group-item mb-3">
        <a href={link} className="admin-orders__link">
          {someText}
        </a>
        
         <Button
          cssClass={"btn btn-outline-danger float-right"}
          onclick={deleteAllGoodsArr}
          textButton={"Delete page"}
        />
        <Button
          cssClass={"btn btn-outline-primary float-right mr-3"}
          onclick={this.changeItemTrue}
          textButton={"Edit page ✎"}
        />
      </li>
    )
  }

  onlyEdit = ()=>{
    return(
      <li className="list-group-item">
        <InputGroup
          placeholder={null}
          value={this.state.inputText}
          onchange={this.changeInpuText}
          onclick={this.changeItemFalse}
          textButton={"Change"}
        />
      </li>
    )
  }

  render() {
    const {changeItem} = this.state;
    const {lookLoggedAs} = this.props;
    if(lookLoggedAs === "User"){
      return (this.onlyShow());
    }else{
      if(changeItem){
        return (this.onlyEdit());
      }else{
        return (this.showAndEdit());
      }
    }
  }
}