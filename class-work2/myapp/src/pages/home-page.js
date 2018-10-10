import React, {Component} from 'react';
import { Button } from '../components/shared/button';

export class HomePage extends Component {
    
  render() {
    const{changeActivePageToAdminPage}=this.props;
    const{changeActivePageToUserPage}=this.props;
    return (
      <div className="container">
        <h1>Main Page</h1>
        <div className="row">
          <Button 
            cssClass={"btn btn-outline-primary mr-3"}
            onclick={changeActivePageToAdminPage}
            textButton={"Login as Admin"}
          />
          <Button 
            cssClass={"btn btn-outline-primary"}
            onclick={changeActivePageToUserPage}
            textButton={"Login as User"}
          />
        </div>
      </div>
    );
  }
}