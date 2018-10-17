import React from 'react';
import {Button} from '../components/button.js';


class Result extends React.Component{
  state={value:""}

  changeInputValue = (event)=>{
    this.setState({
      value: event.target.value
    })
  }

  componentWillReceiveProps(props){
    this.setState({
      value: props.result
    })
  }

  render(){
    const {onclick} = this.props;
    return(
      <div className="input-group mt-3">
        <input 
          type="text" 
          className="form-control" 
          value={this.state.value} 
          onChange={this.changeInputValue}
          ref={copyInput => this.copyInput = copyInput}
          aria-label="Recipient's username" 
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <Button
            cssClass={"btn btn-outline-secondary"}
            onclick={()=>onclick(this.copyInput)}
            textButton={"Copy password"}
            id={"button-addon2"}
          />
        </div>
      </div>
    )
  }
}

export default Result;