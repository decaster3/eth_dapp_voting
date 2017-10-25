import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

let C = require("../constants/authentication/authentication.js")

import ClientProfileContainer from './client/client_profile_container'
import BuisnesmanProfileContainer from './buisnesman/buisnesman_profile_container'
import ProviderProfileContainer from './provider/provider_profile_container'

class MainProfileContainer extends Component {
  constructor(props){
    super(props)

    }

  render(){
		let p = this.props
    let user = p.user
    let s = this.state
		switch(user.role){
			case "buisnesman":
        return (
          <div>
            <BuisnesmanProfileContainer />
          </div>
        )
      case "provider":
        return (
          <div>
            <ProviderProfileContainer />
          </div>
        )
      case "client":
        return (
          <div>
            <ClientProfileContainer />
          </div>
        )
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

    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MainProfileContainer)
