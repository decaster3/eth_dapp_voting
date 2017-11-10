import React, { Component } from 'react';

export default class NewContractComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      finalCost: '',
      ingridients: [],
      ingridientsCount: 1,
      currentIngridientName: '',
      currentIngridientPrice: '',
    }
    this.handleChangeIngrName = this.handleChangeIngrName.bind(this);
    this.handleChangeIngrPrice = this.handleChangeIngrPrice.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.addIngridient = this.addIngridient.bind(this);
  }
  addIngridient(){
    var ingridients = this.state.ingridients;
    this.setState({
      ingridients: ingridients.concat([{name: "", price: "",isReady: false}])
    })
    console.log(this.state.ingridients);
  }


  handleChangeIngrName(event){
    const value = event.target.value;
    const index = parseInt(event.target.name);
    var ob = {name: value, price: this.state.ingridients[index].price, isReady: false}
    var ingridients = this.state.ingridients
      .slice(0, index)
      .concat([ob])
      .concat(this.state.ingridients.slice(index + 1));

    this.setState({
      ingridients: ingridients
    });
  }

  handleChangeIngrPrice(event){
    const value = event.target.value;
    const index = parseInt(event.target.name);
    var ob = {name: this.state.ingridients[index].name, price: value, isReady: false}
    var ingridients = this.state.ingridients
      .slice(0, index)
      .concat([ob])
      .concat(this.state.ingridients.slice(index + 1));

    this.setState({
      ingridients: ingridients
    });
  }

  handleChange(event){
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: event.target.value
    });
  }

//
  render(){
    let p = this.props
    let s = this.state
    var ingridients = this.state.ingridients.map((ingridient, index) => {
      return(
        <div key ={index}>
          Name
          <input name = {index} value = {this.state.ingridients[index].name} onChange={this.handleChangeIngrName} />
          Price
          <input name = {index} value = {this.state.ingridients[index].price} onChange={this.handleChangeIngrPrice} />
        </div>
    )
  })
    return (
      <div>
        Name
        <input type = "text" name= "name" value = {s.name} onChange = {this.handleChange}/>
        Final Cost
        <input type = "text" name= "finalCost" value = {s.finalCost} onChange = {this.handleChange}/>
        ingridients
        <button onClick = {() => this.addIngridient()}>Add</button>
        {ingridients}

        <button onClick = {() => {p.createContract(s.name, s.finalCost, s.ingridients); p.setMyContracts()}}>Create</button>
      </div>
    )
	}
}
