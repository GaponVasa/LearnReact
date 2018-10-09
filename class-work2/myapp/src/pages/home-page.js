import React, {Component} from 'react';

export class HomePage extends Component {
    
    render() {
        const{changeActivePageToAdminPage}=this.props;
        const{changeActivePageToUserPage}=this.props;
        return (
            <div className="container">
                <h1>Main Page</h1>
                <div className="row">
                    <button 
                        className="btn btn-outline-primary mr-3"
                        onClick = {changeActivePageToAdminPage}
                    >
                        Login as Admin
                    </button>
                    <button 
                        className="btn btn-outline-primary"
                        onClick = {changeActivePageToUserPage}
                    >
                        Login as User
                    </button>
                </div>
            </div>
        );
    }
}