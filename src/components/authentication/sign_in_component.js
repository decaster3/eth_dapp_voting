import React, { Component } from 'react';

export default class SignInComponent extends Component {
  constructor(props) {
  super(props);

  this.state = {
    email: '',
    pass: '',
  };

  this.handleChange = this.handleChange.bind(this);
}

handleChange(event){
  const target = event.target;
  const name = target.name;
  this.setState({
    [name]: event.target.value
  });
}

  render(){
    let s = this.state
    let p = this.props
    return (
      <div>
        <input type="text" name="email" onChange={this.handleChange} value={s.email}  placeholder="Email"/>
        <input type="password" name="pass" onChange={this.handleChange} value={s.pass} placeholder="Password"/>
        <button onClick = {() => p.passwordSignin(s.email, s.pass)}> Sign in</button>
    </div>
  )
	}
}
