import React, { Component } from 'react';

class MainDiv extends Component {
  render() {
    return (
      <main className="container-fluid">
        <div className="row d-flex justify-content-center m-3">
          {this.props.children}
        </div>
      </main>
    );
  }
}

export default MainDiv;