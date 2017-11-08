import React, { Component } from 'react';

export default class MyContractsProviderContainer extends Component {
  render(){
    var myProviderContractsView = this.props.myProviderContracts.map((contract, key) => {
      return (
        <div className="col s12 m7" key = {key}>
          <h2 className="header">{contract.name}</h2>
          <div className="card horizontal">
            <div className="card-image">
              <img src="assets/images/ethereum.png"/>
            </div>
            <div className="card-stacked">
              <div className="card-content">
              <p>total price: {contract.price}</p>
              <p>is ready: {String(contract.isReady)}</p>
              </div>

            </div>
          </div>
        </div>
      )
    })
    return (
      <div>
        {myProviderContractsView}
      </div>
    )
	}
}
