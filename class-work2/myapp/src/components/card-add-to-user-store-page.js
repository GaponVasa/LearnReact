import React from 'react';

export class CardAddToUserStorePage extends React.Component {

    render() {
        const{someText}=this.props;
        const{link}=this.props;
        const{onClickFunction}=this.props;
        return(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{someText}</h5>
                    <p className="card-text">{someText}</p>
                    <a 
                        href={link} 
                        className="btn btn-primary"
                        onClick={()=>onClickFunction(someText)}
                    >
                        Buy
                    </a>
                </div>
            </div>
        )
    }
}