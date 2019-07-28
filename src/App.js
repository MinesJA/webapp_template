import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
// Components
import NavBar from './components/NavBar'
import HomeContainer from './containers/HomeContainer'
import PageOne from './containers/AddToolContainer'
import PageTwo from './containers/SavedTools'
// Actions
import { fetchTools, fetchTags } from './actions/toolsActions'
import { setCurrentUser } from './actions/usersActions'
// Adapter
import Adapter from './Adapter'
// Stylesheets
import './App.css';


class App extends Component {


  componentDidMount(){
    this.props.fetchTools();
    const params = Adapter.getQueryParams();

    if(!!params){
      localStorage.setItem('token', params.token)
      this.props.setCurrentUser()
    } else if (localStorage.token !== undefined){
      this.props.setCurrentUser()
    }

  }

  render() {
    return (
      <div>
        <NavBar />
        <Route path="/" exact component={HomeContainer} />
        <Route exact path="/tools/new" component={PageOne} />
        <Route exact path="/tools" component={PageTwo} />
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
    },
    setCurrentUser: () => {
      dispatch(setCurrentUser())
    }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
