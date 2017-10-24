import React, { Component } from 'react';
import { connect } from 'react-redux';
import { passwordSignin, passwordSignup} from '../../actions/authentication/authentication_actions';
import { bindActionCreators } from 'redux';

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
            Redirect
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
          <div>
            Loading...
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationContainer)
