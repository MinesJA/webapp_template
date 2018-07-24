// REACT
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
// REDUX
import { connect } from 'react-redux'
// COMPONENTS
import NavBar from './components/NavBar'
import HomeContainer from './containers/HomeContainer'
import AddToolContainer from './containers/AddToolContainer'
import { fetchTools } from './actions/toolsActions'

// STYLING
import './App.css';




class App extends Component {

  componentDidMount(){
    this.props.fetchTools(8)
  }


  render() {
    return (
      <div>
        <NavBar />
        <Route path="/" exact component={HomeContainer} />
        <Route exact path="/tools/new" component={AddToolContainer} render />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch){
  return {
    fetchTools: (count) => {
      dispatch(fetchTools(count))
    }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
