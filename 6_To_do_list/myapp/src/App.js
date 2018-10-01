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
    //this.setState({list:this.props.addToList});
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
    //console.log(list);
  };

  addToList = (userInput)=>{
    let {list} = this.state;
    // console.log(list);
    //console.log(typeof list);
    // console.log(Array.isArray(list));
    list.push(userInput);
    //console.log(typeof list);
    this.setState({changeProps: true, addText:''});
    //console.log(typeof list);
  }

  changeText = (value)=>{
    this.setState({addText: value});
  }

  list = ()=>{
    const {list} = this.state;
    //console.log('class AddToDoList   list()  list', list);
    let i = list.map((el, ind)=>{
      //console.log('class AddToDoList   list()  el', el);
      //console.log('class AddToDoList   list()  ind', ind);
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
    //console.log('class AddToDoList   list()  i', i);
    //console.log('class AddToDoList   list()');
    if(this.state.changeProps === true){
      this.setState({changeProps: false})
    }

    //console.log('class AddToDoList   list() this.state.list', this.state.list);
    return i;
  }

  render(){

    //console.log('class AddToDoList   render()  this.state.changeProps', this.state.changeProps)
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
              onClick={()=>this.addToList(this.state.addText)}
              text={"Add to List"}
            />
          </div>
        </div>
      </div>
    )
  }
};

export default App;
