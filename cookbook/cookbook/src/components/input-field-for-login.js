import React, { Component } from 'react';

class InputFieldForLogin extends Component {
  render() {
    const{
        textParagraph,
        placeholder,
        typeInput,
        nameInput,
        maxLength,
        value,
        onchange
      } = this.props;
    return (
      <div className="col-10 row form-group">
        <div className="col">
          <p className="font-weight-bold float-right pt-2">{textParagraph}</p>
        </div>
        <div className="col clear-padding-left">
          <input 
            type={typeInput} 
            name={nameInput} 
            className="form-control" 
            maxLength={maxLength}
            placeholder={placeholder}
            value={value}
            onChange={onchange}
          />
        </div>
      </div>
    );
  }
}

export default InputFieldForLogin;