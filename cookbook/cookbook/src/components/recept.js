import React, { Component } from 'react';

import { Button } from './button';
import { UnorderedList } from './unordered-list';

class Recept extends Component {

  render() {
    const{picLink, name, ingridients} = this.props;
    //console.log(ingridients);
    return(
      <div className="row border border-primary rounded p-3 m-3">
        <div className="col-3">
          <img src={picLink} alt="recept"/>
        </div>
        <div className="col-3 d-flex flex-column justify-content-center">
          <p className="row mediumtext">{name}</p>
          <UnorderedList
            arrText={ingridients}
            cssClassList={"list-group-item"}
            cssClassUl={"list-group row"}
          />
        </div>
        <div className="col-3 d-flex justify-content-center align-items-end">
          <p className="mediumtext">All ingredients:<span className="pl-3">{ingridients.length}</span></p>
        </div>
        <div className="col-3 d-flex flex-column justify-content-between flex-wrap">
          <Button
            cssClass={"btn btn-outline-secondary width"}
            onclick={null}
            textButton={"Edit"}
            name="btn-edit"
          />
          <Button
            cssClass={"btn btn-outline-secondary width"}
            onclick={null}
            textButton={"Delete"}
            name="btn-delete"
          />
        </div>
      </div>
    )
  }
}

export default Recept;