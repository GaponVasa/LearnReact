import React from 'react';

class Input extends React.Component{
    render(){
        const {id, type, placeholder,value, onBlur, onClick} = this.props;
        return(
            <div className="wrapper">
              <input 
                id={id} 
                type={type} 
                placeholder={placeholder}
                value={value}
                onBlur={onBlur}
                onClick={onClick}
              />
            </div>
        )
    }
};

export default Input;