import React from 'react';

export const List = (props)=>{
	const {id, ingridient, cssClassList} = props;
	return <li className={cssClassList}>{`${id}.  ${ingridient}`}{props.children}</li>
}