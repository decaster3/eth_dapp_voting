import React, { Component } from 'react';
import { passwordSignin, passwordSignup} from '../../actions/authentication/authentication_actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import Loader from '../../components/layout/loader'
import  AuthenticationAwaitingComponent from '../../components/authentication/authentication_awaiting_component'
import  AuthenticationAnonymousComponent from '../../components/authentication/authentication_anonymous_component'
let C = require("../../constants/authentication/authentication.js")

class AuthenticationContainer extends Component {
  constructor(props){
    super(props)
  }
  render(){
		let p = this.props
    let user = p.user
    let s = this.state
		switch(user.currently){
			case C.SIGNED_IN:
        return (
          <div>
            <Redirect exact to ='/' />
          </div>
			   );
			case C.AWAITING:
        return (
          <div>
				        <AuthenticationAwaitingComponent />
          </div>
			  );
			case C.ANONYMOUS:
        return (
          <div>
            <AuthenticationAnonymousComponent
              passwordSignup = {p.passwordSignup}
              passwordSignin = {p.passwordSignin}/>
          </div>
  			);
      default:
        return(
          <Loader/>
        )
		}
	}
}

function mapStateToProps(state){
    return {
      user: state.user
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {
      passwordSignin: passwordSignin,
      passwordSignup: passwordSignup
    },
    dispatch
  )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthenticationContainer))
