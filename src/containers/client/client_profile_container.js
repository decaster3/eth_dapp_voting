import React, { Component } from 'react';
import {
  setPossibleContracts
} from '../../actions/client/client_actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PossibleContractsClientContainer from '../../components/client/possible_contracts_client_component';
import Loader from '../../components/layout/loader'

class ProviderProfileContainer extends Component {
  componentDidMount(){
    this.props.setPossibleContracts()
  }
  render(){
    let p = this.props
    switch (p.client.possibleClientContractsCurrently) {
      case "POSSIBLE_CLIENT_CONTRACTS_LOADED":
        return (
          <div>
            {
              p.client.possibleClientContracts.length > 0 ?
                <PossibleContractsClientContainer
                  possibleClientContracts = {p.client.possibleClientContracts}
                  />
              :
                <div>You cant buy enything for now!</div>
            }
          </div>
        )
      case "POSSIBLE_CLIENT_CONTRACTS_LOADING":
        return (
          <Loader/>
        )
      default:
        return (
          <div>Bad connection</div>
        )
    }
	}
}

function mapStateToProps(state){
    return {
      user: state.user,
      client: state.client
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {
      setPossibleContracts
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProviderProfileContainer)
