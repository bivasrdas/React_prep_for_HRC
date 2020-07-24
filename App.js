import React from 'react';
import logo from './logo.svg';
import './App.css';
import Check from './day2';
import Apple from './apple';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/" component={Apple} />
      <Route path="/Check" component={Check} />
    </div>
    </Router>
  );
}

export default App;
