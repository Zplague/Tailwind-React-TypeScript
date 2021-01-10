import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Home } from './pages/Home';
import { Planets } from './pages/Planets';
import { Nav } from './components/Nav'
import { People } from './pages/People';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Nav/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/planets" component={Planets}/>
        <Route path="/people" component={People}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

