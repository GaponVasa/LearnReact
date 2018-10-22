import React, { Component } from 'react';
import Login from './pages/login';
import ReceptEdit from './pages/recept-edit';
import ReceptList from './pages/recepts-list'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  
  render(){
    return(
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/recept-edit">ReceptEdit</Link>
            </li>
            <li>
              <Link to="/recept-list">ReceptList</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Login} />
          <Route path="/recept-edit" component={ReceptEdit} />
          <Route path="/recept-list" component={ReceptList} />
        </div>
      </Router>
    )
  }
}

export default App;
