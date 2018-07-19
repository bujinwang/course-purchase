import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CourseSales from "./CourseSales";

class App extends Component {
  render() {
    var courses = [
      {name: 'course 1', price: 199},
      {name: 'course 2', price: 129},
      {name: 'course 3', price: 99},
      {name: 'course 4', price: 299},
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React Course Purchase</h1>
        </header>
        <CourseSales items={courses}/>
      </div>
    );
  }
}

export default App;
