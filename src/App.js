import logo from './logo.svg';
import React from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginForm from './Components/Login/LoginForm';
import RegistrationForm from './Components/Registration/RegistrationForm';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (<Router>
    <div className="App">
      

      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
         
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
               
                <Link className="nav-link" to={"/LoginForm"}>Login</Link>
              </li>
              <li className="nav-item">


                <Link className="nav-link" to={"/RegistrationForm"}>Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
           
            <Route path="/LoginForm" component={LoginForm} />
            <Route path="/RegistrationForm" component={RegistrationForm} />
          </Switch>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
