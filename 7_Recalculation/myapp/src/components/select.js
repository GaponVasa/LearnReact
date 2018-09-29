import React from 'react';

class Select extends React.Component{

	createOptionArr= (arr)=>{
		return arr.map((el, ind)=>{
			return <option key={ind} value={ind!==0?ind:""}>{el}</option>
		})
	}

	render(){
		const {classNameSelect, optionArr, value, onChange } = this.props;
		return(
			<select className={classNameSelect} value={value} onChange={onChange}>
				{this.createOptionArr(optionArr)}
			</select>
		)
	}
};

export default Select;