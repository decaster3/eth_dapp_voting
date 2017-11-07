import React, { Component } from 'react';

export default class MyContractsComponent extends Component {
  render(){
    var possibleContractsView = this.props.possibleContracts.map((contract,key) => {
      var ingridientsView = null

      if(contract.ingridients){
        console.log(contract.ingridients);
        ingridientsView = contract.ingridients.map((ingridient,keyy) => {
        // TODO: добавить состояние ингридиента
          return(
            <div key = {keyy}>
              <p>Ingridient: {keyy}</p>
              <p>name: {ingridient.name}</p>
              <p>price: {ingridient.price}</p>
              {
                ingridient.isReady == false?
                  <div>
                    <button onClick = { () => {this.props.goToContract(contract.key, ingridient.name);this.props.setMyProviderContracts()}}>PROVIDE THIS INGRIDIENT</button>
                  </div>
                :
                  <div>
                    This ingridient already provided.
                  </div>
              }
            </div>
          )
        })
      }
      return (
        <div key = {key}>
          <p>Contract: {key}</p>
          <p>name: {contract.name}</p>
          <p>total price: {contract.price}</p>
          <p>is ready: {String(contract.isReady)}</p>
          {ingridientsView != null?
            <div>
              Ingridients
              {ingridientsView}
            </div>
          :
            <div>There is no ingridients</div>}
        </div>
      )
    })
    console.log(possibleContractsView);
    return (
      <div>
        {possibleContractsView}
      </div>
    )
	}
}
