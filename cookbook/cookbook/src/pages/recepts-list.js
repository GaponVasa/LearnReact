import React, { Component } from 'react';
import Header from '../components/header';
import MainReceptList from '../components/main-recept-list';
import logo from '../img/logo2.png';
import muffin from '../img/muffin2.png';

import './recept-list.css';




class ReceptList extends Component {
  render() {
    return (
      <React.Fragment>
				<Header 
					logoLink={logo}
					signUpOutText={'User Login'}
					signUpOut={'Sign Out'}
				/>
				<MainReceptList
					picLink={muffin}
				/>
			</React.Fragment>
    );
  }
}

export default ReceptList;
