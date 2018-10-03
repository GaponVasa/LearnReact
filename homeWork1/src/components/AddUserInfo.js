import React from 'react';

import {AddTableRow} from './AddTableRow';
import {AddTableRowWithLink} from './AddTableRowWithLink';
import {AddAvatar} from './AddAvatar';


export const AddUserInfo = (props) =>{

	const capitalizeFirstLetter=(string)=>{
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	const onlyDate=(string)=>{
		return string.slice(0,10);
	}

	const {aboutUser} = props;
	const {title, first, last} = aboutUser.name;
	const fullName = `${title} ${capitalizeFirstLetter(first)} ${capitalizeFirstLetter(last)}`;
	const {date, age} = aboutUser.dob;
	const birthdate = {titleData:'Date of birthday', info:`${onlyDate(date)}`};
	const agedate = {titleData:'Age', info:age};
	const gender = {titleData:'Gender', info:aboutUser.gender};
	const {city, postcode, state,street} = aboutUser.location;
	const address = {
					titleData:'Address', 
					info:`${postcode}, 
					state ${capitalizeFirstLetter(state)}, 
					city ${capitalizeFirstLetter(city)}, 
					${street} street`
				};
	const phone = {titleData:'Phone', info:aboutUser.phone};
	const dummyLink = "#";
	const emailData = {titleData:'Email', info: aboutUser.email, link: dummyLink};

	return(
		<div className="panel panel-info border-bottom border-info my-5" key={aboutUser.id}>
			<div className="panel-heading">
				<h3 className="panel-title">{fullName}</h3>
			</div>
			<div className="panel-body">
				<div className="column">
					<AddAvatar avatarUrl={aboutUser.picture.large}/>
					<div className="">
						<table className="table table-user-information">
							<tbody>
								<AddTableRow {...birthdate}/>
								<AddTableRow {...agedate}/>
								<AddTableRow {...gender}/>
								<AddTableRow {...address}/>
								<AddTableRow {...phone}/>
								<AddTableRowWithLink {...emailData}/>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddUserInfo;