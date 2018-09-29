import React from 'react';

class Input extends React.Component{
    render(){
        const {className, type, placeholder,value, onChange } = this.props;
        return(
            <div className="wrapper">
              <input 
                className={className}
                type={type} 
                placeholder={placeholder}
                value={value}
                onChange={onChange}
              />
            </div>
        )
    }
};

export default Input;