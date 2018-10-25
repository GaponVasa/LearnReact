import React, { Component } from 'react';

class CheckboxField extends Component {
  render() {
    return (
      <div className="form-group mb-0">
        <div className="mt-1">
          <input type="checkbox" name="remember-me" value="remember-me" className="m-2"/>
          <span>Remember me</span>
        </div>
      </div>
    );
  }
}

export default CheckboxField;