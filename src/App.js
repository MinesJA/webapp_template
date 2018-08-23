// REACT
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
// REDUX
import { connect } from 'react-redux'
// COMPONENTS
import NavBar from './components/NavBar'
import HomeContainer from './containers/HomeContainer'
import AddToolContainer from './containers/AddToolContainer'
import SavedTools from './containers/SavedTools'
import UserLogin from './containers/UserLogin'

import { getQueryParms } from './Adapter'
import { fetchTools, fetchTags } from './actions/toolsActions'

// STYLING
import './App.css';


class App extends Component {
  constructor(){
    super();

    const params = getQueryParms();
    this.state = {token: params.token}
  }


  componentDidMount(){
    this.props.fetchTools();
    this.props.fetchTags();


    let url_array = window.location.href.split("?")

    if(url_array.length > 1){
      let token = url_array[1].split("=")[1]
      localStorage.setItem('token', token)
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <Route path="/" exact component={HomeContainer} />
        <Route exact path="/tools/new" component={AddToolContainer} render />
        <Route exact path="/tools" component={SavedTools} />
        <Route exact path="/login" component={UserLogin} />
      </div>
    );
  }
}




function mapDispatchToProps(dispatch){
  return {
    fetchTools: (count) => {
      dispatch(fetchTools(count))
    },
    fetchTags: () => {
      dispatch(fetchTags())
    }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
