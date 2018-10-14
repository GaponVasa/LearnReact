import React from 'react';
import {Button} from '../components/button.js';


class Result extends React.Component{
  render(){
    const {result} = this.props;
    return(
      <div>
        <div>{result}</div>
        <Button
          cssClass={"btn btn-primary"}
          onclick={null}
          textButton={"Copy password"}
        />
      </div>
    )
  }
}

export default Result;