import React, { Component } from 'react';

export default class MyContractsComponent extends Component {

  componentDidMount(){
    $('.collapsible').collapsible();
  }

  render(){
    var possibleContractsView = this.props.possibleContracts.map((contract, key) => {
      var ingridientsView = contract.ingridients.map((ingridient, ingredientKey) => {
        // TODO: добавить состояние ингридиента
        return (
          <div className="row" key = {ingredientKey}>
            <div className="col s12 ">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text ">
                  <span className="card-title">{ingridient.name}</span>
                    <p>price: {ingridient.price}</p>
                </div>

                  <div className="card-action">
                    {!ingridient.isReady ?
                      <a className=" teal-text text-accent-2" type="button" href="javascript:void(0);" onClick = { () => {Materialize.toast("You will suply " + ingridient.name, 10000); this.props.goToContract(contract.key, ingridient.name);this.props.setMyProviderContracts()}}>PROVIDE THIS INGRIDIENT</a>
                      :
                      <h5 className="red-text  text-lighten-3">This components already provided.</h5>
                    }
                </div>
              </div>
            </div>
          </div>

        )
      })

      return (
        <li key = {key}>
          <div className="collapsible-header valign-wrapper">
            <h5>{contract.name}</h5>
          </div>

          <div className="collapsible-body">
            <h4 className="header orange-text">Components</h4>
            <br/>
            {ingridientsView}
          </div>
        </li>
      )
    })

    return (
      <div>
        <ul className="collapsible" data-collapsible="accordion">
          {possibleContractsView}
        </ul>
      </div>
    )
	}
}
