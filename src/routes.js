import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import App from './components/App';
import AuthenticationContainer from './containers/authentication/authentication_container'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
let C = require("./constants/authentication/authentication.js");

export const Routes = (props) => {

    let userState = props.user.currently;
    var loggedIn = userState == C.SIGNED_IN;

    return (<div>
              <Switch>

                <Route exact path="/" render={() => (
                  loggedIn ? (
                    <App/>
                  ) : (
                    <Redirect to="/authentication"/>
                  )
                )}/>
                <Route path="/authentication" component={AuthenticationContainer} />
              </Switch>
            </div>)
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
