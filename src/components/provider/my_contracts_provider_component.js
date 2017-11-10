import React, { Component } from 'react';
import * as firebase from 'firebase';

export default class MyContractsProviderContainer extends Component {
  render(){
    var myProviderContractsView = this.props.myProviderContracts.map((contract, key) => {
      var uid = firebase.auth().currentUser.uid;
      var myIngredients = contract.ingridients.map((ingredient, key) => {
        if (ingredient.provider_uid == uid) {
          return (
            <tr>
              <td>{ingredient.name}</td>
              <td>{ingredient.price} eth</td>
            </tr>
          )
        }
      })

      myIngredients = <table >
        <thead>
          <tr>
              <th>Name</th>
              <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {myIngredients}
        </tbody>
      </table>
      let state = contract.isReady ? "working" : "waiting other component providers"
      return (
        <div className="col s12 " key = {key}>
          <h2 className="header">{contract.name}</h2>
          <h5>Contract status: {state}</h5>
          <div className="card horizontal">
            <div className="card-image">
              <img src="assets/images/ethereum.png"/>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h6 className="orange-text text-darken-4 center">Providing components</h6>

                { myIngredients }
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
