import React from 'react';

export class ListAddToAdminStorePage extends React.Component {

    render() {
        //console.log('ListAddToAdminStorePage')
        const{someText}=this.props;
        const{link}=this.props;
        return(
            <li className="list-group-item">
                <img src="#" alt=""/>
                <a href={link} className="admin-orders__link">
                    {someText}
                </a>
                <h2 className="float-right btn-link">✎</h2>
            </li>
        )
    }
}