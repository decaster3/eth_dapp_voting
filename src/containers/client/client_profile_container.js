import React, { Component } from 'react';
import {
  setPossibleContracts,
  buyProduct
} from '../../actions/client/client_actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PossibleContractsClientContainer from '../../components/client/possible_contracts_client_component';
import Loader from '../../components/layout/loader'
import { Tabs, Tab } from 'react-materialize';

class ClientProfileContainer extends Component {
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
                  buyProduct = {p.buyProduct}
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
      setPossibleContracts,
      buyProduct
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientProfileContainer)
