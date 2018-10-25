import React, { Component } from 'react';
import { Button } from './button';
import { UnorderedList } from './unordered-list';
import MainDiv from './main-div';

class MainReceptEdit extends Component {
  render() {
    const{picLink} = this.props;
    return (
      <MainDiv>
        <div className="col-12 border border-primary rounded">
          <div className="row p-3 m-3">
            <div className="col-3 d-flex flex-column justify-content-center">
              <div className="d-flex justify-content-center">
                <img src={picLink} alt="Recept"/>
              </div>
              <div>
                <Button
                  cssClass={"btn btn-outline-secondary halfwidth m-1"}
                  onclick={null}
                  textButton={"Download"}
                  name="btn-download"
                />
                <Button
                  cssClass={"btn btn-outline-secondary halfwidth m-1"}
                  onclick={null}
                  textButton={"Delete"}
                  name="btn-delete"
                />
              </div>
            </div>
            <div className="col-9 border border-primary rounded p-4">
              <div className="text-center mb-3">
                <h1>Name</h1>
              </div>
              <div className="d-flex flex-column">
                <div className="row">
                  <div className="col-3 ">
                    <p className="font-weight-bold float-right">Name.</p>
                  </div>
                  <div className="col-9 pl-2">
                    <input type="text" name="name" className="form-control" placeholder="Name"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <p className="font-weight-bold float-right">The list ingredients.</p>
                  </div>
                  <div className="col-9 row d-flex flex-row justify-content-center align-items-center pl-4">
                    <div className="col-5 p-3">
                      <UnorderedList
                        arrText={["Ingridient", "Ingridient", "Ingridient"]}
                        cssClassUl={"list-group row"}
                        cssClassList={"list-group-item"}
                      />
                    </div>
                    <div className="col-2 p-3">
                      <Button
                        cssClass={"btn btn-outline-secondary width mb-2"}
                        onclick={null}
                        textButton={">"}
                        name="btn-add"
                      />
                      <Button
                        cssClass={"btn btn-outline-secondary width mb-2"}
                        onclick={null}
                        textButton={"<"}
                        name="btn-remove"
                      />
                    </div>
                    <div className="col-5 p-3">
                      <UnorderedList
                        arrText={["Ingridient", "Ingridient", "Ingridient"]}
                        arrElement={["1", "5", "2"]}
                        cssClassUl={"list-group row"}
                        cssClassList={"list-group-item"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainDiv>
    );
  }
}

export default MainReceptEdit;