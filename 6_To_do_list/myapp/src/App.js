import React from 'react';

import Task from './components/task.js';
import {Button} from './components/button.js';
import './App.css';

let listToDo = ['Hey it is me!', 'Hello World!'	];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      addText:'',
      list: listToDo,
      changeProps:false
    };
    this.addToList = this.addToList.bind(this);
  };

  remove = (ind) => {
    let {list} = this.state;
    list.splice(ind, 1);
    this.setState({list:list});
  };

  save = (ind, saveText) => {
    let {list} = this.state;
    list[ind] = saveText;
    this.setState({list:list});
  };

  addToList= ()=>{
    let {list} = this.state;
    list.push(this.state.addText);
    this.setState({changeProps: true, addText:''});
  }

  changeText = (value)=>{
    this.setState({addText: value});
  }

  list = ()=>{
    const {list} = this.state;
    let listArray = list.map((el, ind)=>{
      return (
              <Task 
                key={ind}
                keyInd={ind}
                children={el}
                save={this.save}
                remove={this.remove}
              />
      )
    });

    if(this.state.changeProps === true){
      this.setState({changeProps: false})
    }

    return listArray;
  };

  render(){

    return(
      <div>
        <div>
          {	this.list()	}
        </div>
        <div className="input-group mb-3">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter text" 
            aria-label="Recipient's username" 
            onChange={(e)=>this.changeText(e.target.value)}
            value={this.state.addText}
          />
          <div className="input-group-append">
            <Button 
              className={"btn btn-outline-secondary"} 
              onClick={this.addToList}
              text={"Add to List"}
            />
          </div>
        </div>
      </div>
    )
  }
};

export default App;
