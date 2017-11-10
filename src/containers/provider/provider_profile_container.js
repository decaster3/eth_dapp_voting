import React, { Component } from 'react';
import {
  setPossibleContracts,
  goToContract,
  setMyProviderContracts } from '../../actions/provider/provider_actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PossibleContractsComponent from '../../components/provider/possible_contracts_component';
import MyContractsProviderContainer from './my_contracts_provider_container'
import Loader from '../../components/layout/loader'

class ProviderProfileContainer extends Component {

  componentDidMount(){
    this.props.setPossibleContracts()
  }

  render() {
    let p = this.props
    switch (p.provider.possibleContractsCurrently) {
      case "POSSIBLE_CONTRACTS_LOADED":
        return (
          <div className="row">
            <div className="col s6">
              <MyContractsProviderContainer />
            </div>
            <div className="col s6">
              {
                p.provider.possibleContracts.length>0?
                  <PossibleContractsComponent
                    goToContract = {p.goToContract}
                    possibleContracts = {p.provider.possibleContracts}
                    setMyProviderContracts = {p.provider.setMyProviderContracts}/>
                :
                  <blockquote>
                    <div>There is no any offers yet</div>
                  </blockquote>
              }
            </div>
          </div>
        )

      case "POSSIBLE_CONTRACTS_LOADING":
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
      provider: state.provider
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {
      setPossibleContracts: setPossibleContracts,
      goToContract: goToContract,
      setMyProviderContracts: setMyProviderContracts
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProviderProfileContainer)
