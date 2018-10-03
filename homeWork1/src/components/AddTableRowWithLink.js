import React from 'react';

export const AddTableRowWithLink = (props) =>{
	
	return (
			<tr>
				<td>{props.titleData}</td>
				<td><a href={props.link}>{props.info}</a></td>
			</tr>
	)
}