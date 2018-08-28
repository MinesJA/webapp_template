import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import NavBar from './components/NavBar'
import HomeContainer from './containers/HomeContainer'
import AddToolContainer from './containers/AddToolContainer'
import SavedTools from './containers/SavedTools'
import UserLogin from './containers/UserLogin'
import { fetchTools, fetchTags } from './actions/toolsActions'
import { setCurrentUser } from './actions/usersActions'
import Adapter from './Adapter'
import './App.css';


class App extends Component {


  componentDidMount(){
    this.props.fetchTools();
    this.props.fetchTags();
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
        <Route exact path="/tools/new" component={AddToolContainer} render />
        {this.props.isAuthenticated ? <Route exact path="/tools" component={SavedTools} /> : null}
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
    },
    setCurrentUser: () => {
      dispatch(setCurrentUser())
    }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
