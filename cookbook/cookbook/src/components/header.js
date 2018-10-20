import React, { Component } from 'react';

class Header extends Component {

  render() {
		const linkDummy = '#';
		const{logoLink, signUpOutText, signUpOut} = this.props;
    return (
      <header className="container-fluid">
        <div className="d-flex justify-content-between align-items-center border border-primary m-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="col login">{signUpOutText}</div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className=" m-3">
              <a href={linkDummy} className="login">
                  {signUpOut}
              </a>
            </div>
            <div className="m-3">
              <a href={linkDummy}>
                  <img src={logoLink} alt="logo"/>
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
