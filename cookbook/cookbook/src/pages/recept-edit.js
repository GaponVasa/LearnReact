import React, { Component } from 'react';
import Header from '../components/header';
import MainReceptEdit from '../components/main-recept-edit';
import logo from '../img/logo2.png';
import muffin from '../img/muffin2.png';

import './recept-edit.css';



class ReceptEdit extends Component {
  render() {
    return (
      <React.Fragment>
				<Header 
					logoLink={logo}
					signUpOutText={'User Login'}
					signUpOut={'Sign Out'}
				/>
				<MainReceptEdit
					picLink={muffin}
				/>
			</React.Fragment>
    );
  }
}

export default ReceptEdit;
