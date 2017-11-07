import React from 'react';
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import App from './components/App';
import AuthenticationContainer from './containers/authentication/authentication_container'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
let C = require("./constants/authentication/authentication.js");
import MainProfileContainer from './containers/main_profile_container'
import NavBarContainer from './containers/layouts/navbar_container'
export const Routes = (props) => {

    let userState = props.user.currently;
    var loggedIn = userState == C.SIGNED_IN;

    return (
      <HashRouter>
        <div>
          <NavBarContainer />
          <Switch>
          <Route exact path="/" component= {MainProfileContainer} />
          <Route exact path="/authentication" component={AuthenticationContainer} />
          </Switch>
        </div>
      </HashRouter>)
    }

function mapStateToProps(state){
    return {
      user: state.user
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {

    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
