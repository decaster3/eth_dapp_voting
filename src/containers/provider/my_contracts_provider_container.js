import React, { Component } from 'react';
import { setMyProviderContracts } from '../../actions/provider/provider_actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MyContractsProviderComponent from '../../components/provider/my_contracts_provider_component';
import Loader from '../../components/layout/loader'

class MyContractsProviderContainer extends Component {

  componentDidMount() {
    this.props.setMyProviderContracts()
  }

  render() {
    let p = this.props
    switch (p.provider.myProviderContractsCurrently) {
      case "MY_PROVIDER_CONTRACTS_LOADED":
        return (
          <div>
            {
              p.provider.myProviderContracts.length>0?
                <MyContractsProviderComponent
                  myProviderContracts = {p.provider.myProviderContracts}/>
              :
                <blockquote>
                  <div>You havent got contracts yet</div>
                </blockquote>
            }
          </div>
        )
      case "MY_PROVIDER_CONTRACTS_LOADING":
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
      setMyProviderContracts: setMyProviderContracts
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MyContractsProviderContainer)
