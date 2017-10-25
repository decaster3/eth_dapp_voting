import React, { Component } from 'react';
import SignUpComponent from './sign_up_component'
import SignInComponent from './sign_in_component'

export default class AuthenticationAnonymousComponent extends Component {

  constructor(props){
    super(props)
    this.state = {
      signUp: 1
    }
    this.changeView = this.changeView.bind(this)
  }

  changeView(num){
    var a = this.state.signUp
    this.setState({
      signUp: num
    })
  }

  render(){
    let p = this.props
      return (
        <div>
          <button onClick = {() => this.changeView(1)}>Sign in</button>
          <button onClick = {() => this.changeView(2)}>Sign up</button>
          {
            this.state.signUp == 2?
              <SignUpComponent passwordSignup = {p.passwordSignup}/>
            :
              <SignInComponent passwordSignin = {p.passwordSignin} />
          }
        </div>
      )
    }
	}
