import React from 'react';

export const Descriotion =(props)=>{
	const {text, aboutText} = props;
	let existSpan;
	if(!aboutText){
		existSpan = null;
	}else{
		existSpan = <span className="font-weight-bold pr-4">{aboutText}</span>;
	}
	return(
		<p className="my-3">
			{existSpan}
      {text}
		</p>
	)
}