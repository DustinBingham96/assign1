import React from 'react';
import logo from './assets/logo.svg';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ul>
      <li>
        <Link to ="/">Home</Link>
      </li>
      <li>
        <Link to ="/about">About</Link>
      </li>
      <li>
        <Link to ="/news">News</Link>
      </li>
      </ul>

      
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />  
        <Route path="/News" component={News} exact />
        
      </Switch>
    </div>
    </Router>
  );
}

export default App;
