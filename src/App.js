import React from 'react';
import './App.css';
import Nav from './components/nav'
import Search from './components/search'
import Content from './components/content'
import { history } from './utils/history';
import {
  BrowserRouter as Router,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router history={history} >
        <Nav/> 
        <Content/>
        <Search/>
      </Router>
    </div>
  );
}

export default App;
