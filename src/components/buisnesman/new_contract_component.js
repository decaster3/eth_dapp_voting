import React, { Component } from 'react';

export default class NewContractComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      finalCost: '',
      ingredients: [],
      ingredientsCount: 1,
      currentIngridientName: '',
      currentIngridientPrice: '',
    }
    this.handleChangeIngrName = this.handleChangeIngrName.bind(this);
    this.handleChangeIngrPrice = this.handleChangeIngrPrice.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.addIngridient = this.addIngridient.bind(this);
    this.removeIngridient = this.removeIngridient.bind(this);
  }

  addIngridient(){
    var ingredients = this.state.ingredients;
    this.setState({
      ingredients: ingredients.concat([{name: "", price: "",isReady: false}])
    })
    console.log(this.state.ingredients);
  }

  removeIngridient(index){
    var ingredients = this.state.ingredients;
    var ingredient = ingredients[index];
    ingredients.splice(index, 1);
    this.setState({
      ingredients: ingredients
    })
    Materialize.toast("Ingredient №" +(index + 1) + " " + ingredient.name + ' was deleted!', 3000);
  }

  handleChangeIngrName(event){
    const value = event.target.value;
    const index = parseInt(event.target.name);
    var ob = {name: value, price: this.state.ingredients[index].price, isReady: false}
    var ingredients = this.state.ingredients
      .slice(0, index)
      .concat([ob])
      .concat(this.state.ingredients.slice(index + 1));

    this.setState({
      ingredients: ingredients
    });
  }

  handleChangeIngrPrice(event){
    const value = event.target.value;
    const index = parseInt(event.target.name);
    var ob = {name: this.state.ingredients[index].name, price: value, isReady: false}
    var ingredients = this.state.ingredients
      .slice(0, index)
      .concat([ob])
      .concat(this.state.ingredients.slice(index + 1));

    this.setState({
      ingredients: ingredients
    });
  }

  handleChange(event){
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: event.target.value
    });
  }

<<<<<<< HEAD
//
=======


>>>>>>> c99a5d86a07d30d6351030286b56fb81e6572e36
  render(){
    let p = this.props
    let s = this.state
    var ingredients = this.state.ingredients.map((ingridient, index) => {
      return(
        <li className="collection-item"  key ={index}>
        <div className="row valign-wrapper">
          <div className="input-field col s5">
            <i className="material-icons prefix">add_shopping_cart</i>
            <input id="icon_prefix" type="text" className="validate" name = {index} value = {this.state.ingredients[index].name} onChange={this.handleChangeIngrName}/>
            <label for="icon_prefix">Ingredient name</label>
          </div>
          <div className="input-field col s5">
            <i className="material-icons prefix">attach_money</i>
            <input id="icon_telephone" type="number" className="validate" name = {index} value = {this.state.ingredients[index].price} onChange={this.handleChangeIngrPrice}/>
            <label for="icon_telephone">Ingredient price</label>
          </div>
          <a type="button" href="javascript:void(0);" onClick={() => this.removeIngridient(index)} className="secondary-content col s1 offset-s1 red-text"><i className="material-icons ">close</i></a>

        </div>
        </li>
      )
    })

    if (ingredients.length != 0)
      ingredients =   <ul className="collection with-header">
          <li className="collection-header"><h4>Ingredients</h4></li>
          {ingredients}
        </ul>

    return (
<<<<<<< HEAD
      <div>
        Name
        <input type = "text" name= "name" value = {s.name} onChange = {this.handleChange}/>
        Final Cost
        <input type = "text" name= "finalCost" value = {s.finalCost} onChange = {this.handleChange}/>
        ingridients
        <button onClick = {() => this.addIngridient()}>Add</button>
        {ingridients}

        <button onClick = {() => {p.createContract(s.name, s.finalCost, s.ingridients); p.setMyContracts()}}>Create</button>
=======
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">business_center</i>
              <input id="icon_prefix" type="text" className="validate" name= "name" value = {s.name} onChange = {this.handleChange}/>
              <label for="icon_prefix">Contract Name</label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">attach_money</i>
              <input id="icon_telephone" type="number" className="validate" name= "finalCost" value = {s.finalCost} onChange = {this.handleChange}/>
              <label for="icon_telephone">Total price</label>
            </div>
          </div>
          {ingredients}



          { (this.state.ingredients.length > 0 ) ?
              <div >
              <div className="right">
              <a  type="button" onClick = {() => this.addIngridient()} className="btn-floating btn-large red  waves-effect waves-light">
                <i className="large material-icons">add</i>
              </a>
              </div>
              <div className="center">
              <button type="button" className="waves-effect waves-light btn-large" onClick = {() => {console.log(123); p.createContract(s.name, s.finalCost, s.ingredients); p.setMyContracts()}}>Create</button>
              </div>
              </div>
            :
              <div>
              <h5 className="red-text">Add ingredients for creation</h5>
              <a  type="button" onClick = {() => this.addIngridient()} className="btn-floating btn-large red  waves-effect waves-light">
                <i className="large material-icons">add</i>
              </a>
              </div>
          }
        </form>
>>>>>>> c99a5d86a07d30d6351030286b56fb81e6572e36
      </div>

    )
	}
}
