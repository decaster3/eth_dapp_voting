import React, { Component } from 'react';
import { setMyContracts, createContract } from '../../actions/buisnesman/buisnesman_actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs, Tab } from 'react-materialize';
import NewContractComponent from '../../components/buisnesman/new_contract_component'
import MyContractsComponent from '../../components/buisnesman/my_contracts_component'
import Loader from '../../components/layout/loader'

class BuisnesmanProfileContainer extends Component {
  constructor(props){
    super(props)

  }

  componentDidMount(){
    this.props.setMyContracts();
  }//

  render(){
    let s = this.state
    let p = this.props
    console.log(p.buisnesman.myContracts);
    var title =  (<span>My contracts <span className="badge new blue myContracts" data-badge-caption=""> {p.buisnesman.myContracts.length} </span></span>);
    switch (p.buisnesman.contractCurrently) {
      case "NOT_WAITING_FOR_CONTRACT":
      switch (p.buisnesman.myContractsCurrently) {
        case "MY_CONTRACTS_LOADED":
          return (
            <Tabs className='tab-demo z-depth-1 col s6 offset-s3' >
              <Tab className="tab col s5 offset-s1" title={title} active>
              <br/>
              <br/>
                {
                  p.buisnesman.myContracts.length > 0 ?
                    <MyContractsComponent changeView = {this.changeView} myContracts = {p.buisnesman.myContracts}/>
                  :
                  <blockquote>
                   <h4>You havent got contracts yet</h4>
                  </blockquote>
                }
              </Tab>
              <Tab className="tab col s5 " title="Create contract">
              <br/>
              <br/>

                <NewContractComponent setMyContracts = {p.setMyContracts} changeView = {this.changeView} createContract = {p.createContract}/>
              </Tab>
            </Tabs>
          )
        case "MY_CONTRACTS_LOADING":
          return (
            <Loader/>
          )
        default:
          return (
            <div>Bad connection</div>
          )
      }
      default:
      return (
        <div>
          <Loader/>
          <blockquote>
           <h4>Please wait for deploying your contract!</h4>
          </blockquote>
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
