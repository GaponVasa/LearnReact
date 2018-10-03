import React from 'react';

export const AddAvatar = (props) =>{
	
	return (
		<div className="col-md-3 col-lg-3 ">
			<img src={props.avatarUrl} className="pull-left"/>
		</div>
	)
}