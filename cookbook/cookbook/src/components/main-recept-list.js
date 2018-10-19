import React, { Component } from 'react';

import Recept from './recept.js'

import muffin from '../img/muffin2.png';

const recepts = [
	{
		name: 'firstRecept',
		ingridients:[
			'firstIngridient', 'secondIngridient', 'thirdIngridient', 'fourthIngridient', 'fifthIngridient'
		],
		picLink:muffin
	},
	{
		name: 'secondRecept',
		ingridients:[
			'firstIngridient', 'secondIngridient', 'thirdIngridient', 'fourthIngridient', 'fifthIngridient'
		],
		picLink:muffin
	},
	{
		name: 'thirdRecept',
		ingridients:[
			'firstIngridient', 'secondIngridient', 'thirdIngridient', 'fourthIngridient', 'fifthIngridient'
		],
		picLink:muffin
	},
	{
		name: 'forthRecept',
		ingridients:[
			'firstIngridient', 'secondIngridient', 'thirdIngridient', 'fourthIngridient', 'fifthIngridient'
		],
		picLink:muffin
	},
	{
		name: 'fiftRecept',
		ingridients:[
			'firstIngridient', 'secondIngridient', 'thirdIngridient', 'fourthIngridient', 'fifthIngridient'
		],
		picLink:muffin
	}
]

class MainReceptList extends Component {
	
	createReceptList(){
		return recepts.map((el, ind)=>{;
			const {
					name, 
					picLink, 
					ingridients
				} = el;
			return <Recept
							key={ind}
							picLink={picLink}
							name={name}
							ingridients={ingridients}
							/>
		})
	}


  render() {
		const{picLink} = this.props;
    return (
			<main className="container-fluid">
				<div className="row d-flex justify-content-center m-3">
					<div className="row col-12 m-3 pl-4 pr-4">
						<div className="col-4 d-flex justify-content-center">
							<input type="text" className="form-control" placeholder="Fragment name or ingridient"/>
						</div>
						<div className="col-3 d-flex justify-content-start">
							<button className="btn btn-outline-secondary" type="button" name="btn-find">Find</button>
						</div>	
						<div className="col-2 d-flex justify-content-center"></div>
						<div className="col-3 d-flex justify-content-end">
							<button className="btn btn-outline-secondary" type="button" name="btn-add-recept">Add recept</button>
						</div>
					</div>
					<div className="col-12 border border-primary">
						{this.createReceptList()}
					</div>
				</div>
			</main>
    );
  }
}

export default MainReceptList;