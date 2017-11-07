import React, { Component } from 'react';

export default class MyContractsProviderContainer extends Component {
  render(){
    var myProviderContractsView = this.props.myProviderContracts.map((contract,key) => {
      return (
        <div key = {key}>
          <p>Contract: {key}</p>
          <p>name: {contract.name}</p>
          <p>total price: {contract.price}</p>
          <p>is ready: {String(contract.isReady)}</p>
        </div>
      )
    })
    console.log(myProviderContractsView);
    return (
      <div>
        {myProviderContractsView}
      </div>
    )
	}
}
