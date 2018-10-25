import React, { Component } from 'react';
import { Button } from './button.js';

class FindAddMenu extends Component {
  render() {
    return (
      <div className="row col-12 m-3 pl-4 pr-4">
        <div className="col-4 d-flex justify-content-center">
          <input type="text" className="form-control" placeholder="Fragment name or ingridient"/>
        </div>
        <div className="col-3 d-flex justify-content-start">
          <Button
            cssClass={"btn btn-outline-secondary"}
            onclick={null}
            textButton={"Find"}
            name={"btn-find"}
          />
        </div>	
        <div className="col-2 d-flex justify-content-center"></div>
        <div className="col-3 d-flex justify-content-end">
          <Button
            cssClass={"btn btn-outline-secondary"}
            onclick={null}
            textButton={"Add recept"}
            name={"btn-add-recept"}
          />
        </div>
      </div>
    );
  }
}

export default FindAddMenu;