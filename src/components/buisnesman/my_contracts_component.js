import React, { Component } from 'react';

export default class MyContractsComponent extends Component {
  render(){
    var myContractsView = this.props.myContracts.map((contract,key) => {
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
              <p>is ready: {String(ingridient.isReady)}</p>
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
    console.log(myContractsView);
    return (
      <div>
        {myContractsView}
      </div>
    )
	}
}
