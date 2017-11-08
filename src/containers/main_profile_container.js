import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
let C = require("../constants/authentication/authentication.js")

import Loader from '../components/layout/loader'
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
    var profile = null;

		switch(user.role){
			case "Businessman":
        profile = <BuisnesmanProfileContainer />
        break;
      case "Provider":
        profile =  <ProviderProfileContainer />
        break;
      case "Client":
        profile =  <ClientProfileContainer />
        break;
      case "no":
        profile =  <Redirect to = "/authentication"/>
        break;
      default:
        <Loader/>
        break;
		}

    return (
      <div className="profile container">
        {profile}
      </div>
    )
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainProfileContainer))
