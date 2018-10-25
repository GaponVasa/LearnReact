import React, { Component } from 'react';

import { Button } from './button';
import MainDiv from './main-div';
import InputFieldForLogin from "./input-field-for-login";
import CheckboxField from './checkbox-field';

class MainLogin extends Component {
  render() {
		const linkDummy = '#';
    return (
      <MainDiv>
        <div className="col-12 border border-primary rounded">
          <form action={linkDummy} name="login" id="login" className="row p-3">
            <InputFieldForLogin
              textParagraph={"Username."}
              placeholder={"Enter user name. Maximum 20 letters."}
              typeInput={"text"}
              nameInput={"username"}
              maxLength={"20"}
            />
            <InputFieldForLogin
              textParagraph={"Password. Maximum 20 letters."}
              placeholder={"Password."}
              typeInput={"password"}
              nameInput={"password"}
              maxLength={"20"}
            />
            <div className="col-10 row form-group text-right">
              <div className="col">

              </div>
              <div className="col text-left mt-5">
                <div className="row">
                  <Button
                    cssClass={"btn btn-outline-primary"}
                    onclick={null}
                    textButton={"Sign in"}
                  />
                  <CheckboxField/>
                </div>
              </div>
            </div>
          </form>
        </div>
      </MainDiv>
    );
  }
}

export default MainLogin;