import React, { Component } from 'react';

export default class MyContractsComponent extends Component {

  componentDidMount(){
    $('.collapsible').collapsible();
  }

  render(){
    var myContractsView = this.props.myContracts.map((contract,key) => {
      var ingridientsView = null

      if(contract.ingridients) {
        ingridientsView = contract.ingridients.map((ingridient,keyy) => {
        // TODO: добавить состояние ингридиента
          return(
              <tr key = {keyy}>
                <td>{ingridient.name}</td>
                <td>{ingridient.price}</td>
                <td><i className="material-icons ">{ingridient.isReady ? "done" : "close"}</i></td>
              </tr>
          )
        })
      }
      var icon = contract.isReady ? "done" : "close";

      return (
        <li key = {key}>
          <div className="collapsible-header valign-wrapper">
            <i className="material-icons ">{icon}</i>
            <h5>{contract.name}</h5>
          </div>
          <div className="collapsible-body">
            {ingridientsView != null ?
              <div>
              <h2 className="header orange-text">Components</h2>
              <br/>
              <table className="centered highlight">
                <thead>
                  <tr>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Is ready</th>
                  </tr>
                </thead>
                <tbody>
                  {ingridientsView}
                </tbody>
              </table>
              </div>
            :
              <h5 className="red-text">There is no ingridients</h5>}
            <br/>
            <div className="row">
              <div className="col s3 offset-s9">
                <h5 className="blue-text text-darken-1 ">Total price: <span className="blue-text text-darken-4">{contract.price}</span></h5>
              </div>
            </div>

          </div>
        </li>
      )
    })

    return (
      <ul className="collapsible" data-collapsible="accordion">
        {myContractsView}
      </ul>
    )
	}
}
