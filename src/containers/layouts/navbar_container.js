import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logoutUser } from '../../actions/authentication/authentication_actions';

class NavBarContainer extends Component {

  render(){
    let p = this.props
    let s = this.state
    switch(p.user.currently){
			case "SIGNED_IN":
        return (
          <div>
            <button onClick = { () => p.logoutUser()}></button>
          </div>
			   );
      default:
        return(
          <div>

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
      logoutUser: logoutUser
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer)
