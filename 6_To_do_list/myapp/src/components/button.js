import React from 'react';

export const Button = (props)=>{
    const {className, onClick, text} = props;
    return(
        <button
            className={className}
            onClick={onClick}
        >
            {text}
        </button>
    );
}