import React, { Component } from 'react';

export default class MyContractsProviderComponent extends Component {
  render(){
    var myProviderContractsView = this.props.possibleClientContracts.map((contract,key) => {
      return (
         <div className="col s12 m4 " key = {key}>
           <div className="card hoverable">
             <div className="card-image waves-effect waves-block waves-light">
               <img className="activator" src="assets/images/pizza.png"/>
             </div>
             <div className="card-content">
               <span className="card-title activator grey-text text-darken-4">{contract.name}<i className="material-icons right">more_vert</i></span>
               <p><a type="button" href="javascript:void(0);" onClick={() => Materialize.toast(contract.name + ' was bought!', 3000)}>Buy</a></p>
             </div>
             <div className="card-reveal">
               <span className="card-title grey-text text-darken-4">{contract.name}<i className="material-icons right">close</i></span>
               <p>Price: {contract.finalCost}</p>
             </div>
           </div>
         </div>
      )
    })
    return (
      <div className="row">
        {myProviderContractsView}
      </div>
    )
	}
}
