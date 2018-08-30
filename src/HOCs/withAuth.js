import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import * as actions from "../actions/usersActions";
import { Loader } from "semantic-ui-react";

const withAuth = WrappedComponent => {
  class AuthorizedComponent extends React.Component {

    componentDidMount() {
      if (localStorage.getItem("token") && !this.props.loggedIn) {
        this.props.setCurrentUser();
      }
    }

    render() {
      if (localStorage.getItem("token") && this.props.loggedIn) {
        return <WrappedComponent />;
      } else if (localStorage.getItem("token") && !this.props.loggedIn) {
        return <Loader active inline="centered" />;
      } else {
        return <Redirect to="/" />;
      }
    }
  }

  return connect(mapStateToProps, actions)(AuthorizedComponent);
};



const mapStateToProps = state => ({ loggedIn: state.Users.isAuthenticated });

export default withAuth;
