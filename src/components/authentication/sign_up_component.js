import React, { Component } from 'react';

export default class SignUpComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      signUpFields: true,
      role: null,
      pass: '',
      email: '',
      address: ''
    }
    this.changeView = this.changeView.bind(this)
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  changeView(role = null){
    var a = this.state.signUpFields
    this.setState({
      signUpFields: !a,
      role: role
    })
  }

  render(){
    let s = this.state
    let p = this.props
    if (this.state.signUpFields){
      return (
        <div>

          <div>
            <button onClick = {() => this.changeView("provider")}>Customer</button>
          </div>

          <div>
            <button onClick = {() => this.changeView("buisnesman")}>Buisnesman</button>
          </div>

          <div>
            <button onClick = {() => this.changeView("client")}>Client</button>
          </div>
        </div>
      )
    }
    else {
      return (
        <div>
          {s.role}
          <input type="text" name="email" onChange={this.handleChange} value={s.email}  placeholder="Email"/>
          <input type="password" name="pass" onChange={this.handleChange} value={s.pass} placeholder="Password"/>
          <input type="text" name="address" onChange={this.handleChange} value={s.address} placeholder="Address"/>
          <button onClick = {() => p.passwordSignup(s.email, s.pass, s.role, s.address)}> Sign up</button>

          <div>
            <button onClick = {() => this.changeView()}>Back</button>
          </div>
        </div>
      )
    }
	}
}
