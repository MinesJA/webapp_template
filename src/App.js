import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import NavBar from './components/NavBar'
import HomeContainer from './containers/HomeContainer'
import AddToolContainer from './containers/AddToolContainer'
import SavedTools from './containers/SavedTools'
import { fetchTools, fetchTags } from './actions/toolsActions'
import { setCurrentUser } from './actions/usersActions'
import Adapter from './Adapter'
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
        <Route exact path="/tools/new" component={AddToolContainer} />
        <Route exact path="/tools" component={SavedTools} />
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
