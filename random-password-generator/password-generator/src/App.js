import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="col-6 my-3">
          <form className="d-flex flex-column justify-content-center">
            <div className="form-group">
              <h1>Random password generator.</h1>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Enter length password."/>
              <small id="emailHelp" className="form-text text-muted">Password length in characters.</small>
            </div>
            <div className="form-group">
              <input type="checkbox" className="" id="exampleCheck1"/>
              <label className="form-check-label" htmlFor="exampleCheck1">A-Za-z0-9</label>
            </div>
            <div className="form-group">
              <input type="checkbox" className="" id="exampleCheck2"/>
              <label className="form-check-label" htmlFor="exampleCheck2"></label>
              {/*~ ! @ # $ % ^ & * ( ) _ + ` - = { } [ ] : ; < > . / \ */}
            </div>
            {/* <div className="form-group">
              <input type="checkbox" className="" id="exampleCheck3"/>
              <label className="form-check-label" htmlFor="exampleCheck3"></label>
            </div>
            <div className="form-group">
              <input type="checkbox" className="" id="exampleCheck4"/>
              <label className="form-check-label" htmlFor="exampleCheck4">()!@#$%^&*_+</label>
            </div> */}
            
            <button type="submit" className="col-4 btn btn-primary ">Generate password</button>
          </form>
          <div className="input-group my-3">
            <input type="text" className="form-control" aria-describedby="button-addon2"/>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" id="button-addon2">Copy</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
