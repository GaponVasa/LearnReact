import React, { Component } from 'react';

import {List} from './list';

class Recept extends Component {

	createListIngridients(arr){
		return arr.map((el, ind)=>{
			return (<List 
				key={ind}
				id={ind+1}
				ingridient={el}
			/>)
		})
	}

  render() {
		const{picLink, name, ingridients} = this.props;
		return(
			<div className="row border border-primary rounded p-3 m-3">
				<div className="col-3">
					<img src={picLink} alt="recept"/>
				</div>
				<div className="col-3 d-flex flex-column justify-content-center">
					<p className="row mediumtext">{name}</p>
					<ul className="list-group row">
						{this.createListIngridients(ingridients)}
					</ul>
				</div>
				<div className="col-3 d-flex justify-content-center align-items-end">
					<p className="mediumtext">All ingredients:<span className="pl-3">{ingridients.length}</span></p>
				</div>
				<div className="col-3 d-flex flex-column justify-content-between flex-wrap">
					<button className="btn btn-outline-secondary width" type="button" name="btn-edit">Edit</button>
					<button className="btn btn-outline-secondary width" type="button" name="btn-delete">Delete</button>
				</div>
			</div>
		)
  }
}

export default Recept;