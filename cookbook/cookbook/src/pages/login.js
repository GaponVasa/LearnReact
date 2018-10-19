import React, { Component } from 'react';
import Header from '../components/header';
import MainLogin from '../components/main-login';
import logo from '../img/logo2.png';

import './login.css';



class Login extends Component {
  render() {
    return (
      <React.Fragment>
				<Header 
					logoLink={logo}
					signUpOutText={''}
					signUpOut={'SignUp'}
				/>
				<MainLogin/>
			</React.Fragment>
    );
  }
}

export default Login;
