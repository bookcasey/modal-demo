import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Home from './Home';
import LogInForm from './LogInForm'
import RegisterForm from './RegisterForm'

import './App.css';



function App() {
  return (
    <div className="App">
      <Router>
        <Route path={['/', '/login', '/register']} exact component={Home} />
        <Route path='/login' exact component={LogInForm} />
        <Route path='/register' exact component={RegisterForm} />
      </Router>
    </div>
  );
}

export default App;
