import React, { Component } from 'react';

export default class MyContractsProviderComponent extends Component {
  render(){
    var myProviderContractsView = this.props.possibleClientContracts.map((contract,key) => {
      return (
        <div key = {key}>
          <p>Product: {contract.name}</p>
          <p>Price: {contract.price}</p>
          <button>Buy</button>
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
