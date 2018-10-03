import React from 'react';

export const AddTableRow = (props) =>{
	
	return (
			<tr>
				<td>{props.titleData}</td>
				<td>{props.info}</td>
			</tr>
	)
}
