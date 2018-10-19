import React from 'react';

export const List = (props)=>{
	const {id, ingridient} = props;
	return <li className="list-group-item noborder">{`${id}.  ${ingridient}`}</li>
}