import React, { Component } from 'react';

class MainReceptEdit extends Component {

  render() {
    const{picLink} = this.props;
    return (
      <main className="container-fluid">
        <div className="row d-flex justify-content-center m-3">
            <div className="col-12 border border-primary rounded">
              <div className="row p-3 m-3">
                <div className="col-3 d-flex flex-column justify-content-center">
                    <div className="d-flex justify-content-center">
                      <img src={picLink} alt="Recept"/>
                    </div>
                    <div>
                      <button className="btn btn-outline-secondary halfwidth m-1" type="button" name="btn-download">Download</button>
                      <button className="btn btn-outline-secondary halfwidth m-1" type="button" name="btn-delete">Delete</button>
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
                          <ul className="list-group row">
                            <li className="list-group-item ">1. Ingridient</li>
                            <li className="list-group-item ">2. Ingridient</li>
                            <li className="list-group-item ">3. Ingridient</li>
                          </ul>
                        </div>
                        <div className="col-2 p-3">
                          <button className="btn btn-outline-secondary width mb-2" type="button" name="btn-add">&gt;</button>
                          <button className="btn btn-outline-secondary width mt-2" type="button" name="btn-remove">&lt;</button>
                        </div>
                        <div className="col-5 p-3">
                          <ul className="list-group row">
                            <li className="list-group-item ">1. Ingridient <span className="ml-5">1</span></li>
                            <li className="list-group-item ">2. Ingridient <span className="ml-5">5</span></li>
                            <li className="list-group-item ">3. Ingridient <span className="ml-5">2</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </main>
    );
  }
}

export default MainReceptEdit;