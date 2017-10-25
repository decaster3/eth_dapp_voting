import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logoutUser } from '../../actions/authentication/authentication_actions';
import NavbarComponent from '../../components/layout/navbar_component';

class NavBarContainer extends Component {

  render(){
    let p = this.props
    let s = this.state
    var isLoged = p.user.currently == "SIGNED_IN";

    var logOut = isLoged ? p.logoutUser() : null;

    return <NavbarComponent logOut = {logOut}/>

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
      logoutUser: logoutUser
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer)
