import React, { Component } from 'react';
import { setMyContracts, createContract } from '../../actions/buisnesman/buisnesman_actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NewContractComponent from '../../components/buisnesman/new_contract_component'
import MyContractsComponent from '../../components/buisnesman/my_contracts_component'

class BuisnesmanProfileContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      newContract: false
    }
    this.changeView = this.changeView.bind(this)
  }

  changeView(a){
    this.setState({
      newContract: a
    })
  }
  componentDidMount(){
    let p = this.props
    p.setMyContracts()
  }

  render(){
    let s = this.state
    let p = this.props
    if(!s.newContract){

      switch (p.buisnesman.myContractsCurrently) {
        case "MY_CONTRACTS_LOADED":
          return (
            <div>
              {
                p.buisnesman.myContracts.length>0?
                  <MyContractsComponent myContracts = {p.buisnesman.myContracts}/>
                :
                  <div>You havent got contracts yet</div>
              }
              <button onClick = {() => this.changeView(true)}>Create</button>
            </div>
          )
        case "MY_CONTRACTS_LOADING":
          return (
            <div>Loading</div>
          )
        default:
          return (
            <div>Bad connection</div>
          )
      }
    }else{
      return(
        <div>
          <NewContractComponent createContract = {p.createContract}/>
          <button onClick = {() => this.changeView(false)}>Back</button>
        </div>
      )
    }
	}
}

function mapStateToProps(state){
    return {
      user: state.user,
      buisnesman: state.buisnesman
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {
      setMyContracts: setMyContracts,
      createContract: createContract
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(BuisnesmanProfileContainer)
