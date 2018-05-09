// REACT
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// REDUX
import { connect } from 'react-redux'
// COMPONENTS
import NavBar from './components/NavBar'
import HomeContainer from './containers/HomeContainer'
import AddToolContainer from './containers/AddToolContainer'
// STYLING
import './App.css';




class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route path="/" exact component={HomeContainer} />
        <Route path="/tools/new" exact component={AddToolContainer} render />
      </div>
    );
  }
}

export default App;
