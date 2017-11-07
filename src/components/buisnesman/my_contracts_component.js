import React, { Component } from 'react';

export default class MyContractsComponent extends Component {
  render(){
    var myContractsView = this.props.myContracts.map((contract,key) => {
      var ingridientsView = null

      if(contract.ingridients){
        console.log(123);
        console.log(contract.ingridients);
        ingridientsView = contract.ingridients.map((ingridient,keyy) => {
        // TODO: добавить состояние ингридиента
          return(
            <div key = {keyy}>
              <p>{ingridient.name}</p>
              <p>{ingridient.price}</p>
            </div>
          )
        })
      }
      console.log(ingridientsView);
      return (
        <div key = {key}>
          <p>Contract {key}</p>
          <p>{contract.name}</p>
          <p>{contract.idReady}</p>
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
