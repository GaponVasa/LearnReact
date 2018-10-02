import React from 'react';

import {Button} from './button.js';

class Task extends React.Component {
			constructor(props) {
				super(props);
				this.state = {
          edit: false,
          value: "",
				};
			};

			edit = () =>{
        this.setState ({edit: true, value: this.props.children});
      };

			remove = () => {
				const {keyInd, remove} = this.props;
        remove(keyInd);
			};

			save = () => {
        const {keyInd, save} = this.props;
        this.setState ({edit: false});
        save(keyInd, this.state.value);
      };
      
      changeValue = (textValue)=>{
        this.setState({value: textValue});
      }

			rendNorm = () => {
				return (
					<div className="border rounded p-3 my-3" >
						<div className="border-bottom pb-2 mb-2">{this.props.children}</div>
						<div className="d-flex justify-content-between">
							<Button
								onClick={this.edit}
								className={"btn btn-outline-primary"}
								text={"Edit"}
							/>
							<Button
								onClick={this.remove}
								className={"btn btn-outline-danger"}
								text={"Delete"}
							/>
						</div>
					</div>
				);
			};

			rendEdit = () => {
				return (
					<div className="border rounded p-3 my-3" >
            <textarea 
              className="form-control mb-3" 
              defaultValue={this.state.value}
              onChange={(event)=>{this.changeValue(event.target.value)}}
            />
						<Button
							onClick={this.save}
							className={"btn btn-outline-success"}
							text={"Save"}
						/>
					</div>
				);
			};
			
			render() {
				if (this.state.edit) {
					return this.rendEdit();
				} else {
					return this.rendNorm();
				}
			}
		};

export default Task;