import React, { Component } from 'react';
import {
  setPossibleContracts,
  goToContract,
  setMyProviderContracts } from '../../actions/provider/provider_actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PossibleContractsComponent from '../../components/provider/possible_contracts_component';
import MyContractsProviderContainer from './my_contracts_provider_container'
class ProviderProfileContainer extends Component {
  componentDidMount(){
    this.props.setPossibleContracts()
  }
  render(){
    let p = this.props
    switch (p.provider.possibleContractsCurrently) {
      case "POSSIBLE_CONTRACTS_LOADED":
        return (
          <div>
            <MyContractsProviderContainer />
            {
              p.provider.possibleContracts.length>0?
                <PossibleContractsComponent
                  goToContract = {p.goToContract}
                  possibleContracts = {p.provider.possibleContracts}
                  setMyProviderContracts = {p.provider.setMyProviderContracts}/>
              :
                <div>You havent got contracts yet</div>
            }
          </div>
        )
      case "POSSIBLE_CONTRACTS_LOADING":
        return (
          <div>
            <MyContractsProviderContainer />
            <div class="preloader-wrapper big active">
              <div class="spinner-layer spinner-blue">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div><div class="gap-patch">
                  <div class="circle"></div>
                </div><div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>
            </div>
          </div>
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
