import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logoutUser } from '../../actions/authentication/authentication_actions';
import NavbarComponent from '../../components/layout/navbar_component';

class NavBarContainer extends Component {

  render(){
    let p = this.props
    let s = this.state

    return <NavbarComponent logOut = {p.logoutUser} userState={p.user.currently}/>
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
