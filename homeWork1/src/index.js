import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AddUserInfo} from './components/AddUserInfo.js';
 
const mountNode = document.getElementById('app');

const AddUsersCard = (props)=>{
	const {arr} = props;
	return(
		arr.map((el, ind) =>{
			el.id = ind + 1;
			return(<AddUserInfo key={ind} aboutUser={el}/>) 
		})
	)
}


axios.get('https://randomuser.me/api/?results=5&inc=gender,name,dob,email,phone,location,picture')
.then(res=>{
	ReactDOM.render(<AddUsersCard arr={res.data.results}/>, mountNode);
});