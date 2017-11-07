import React, { Component } from 'react';
import SignUpComponent from './sign_up_component'
import SignInComponent from './sign_in_component'
import { Tabs, Tab } from 'react-materialize';
let SIGN_IN = 1;
let SIGN_UP = 2;
export default class AuthenticationAnonymousComponent extends Component {

  constructor(props){
    super(props)
    this.state = {
      componentToShow: 1

    }
    this.changeView = this.changeView.bind(this)
  }

  changeView(num){
    var a = this.state.componentToShow
    this.setState({
      componentToShow: num
    })
  }

  render(){
      let p = this.props
      var component = this.state.componentToShow == SIGN_IN ?
                        <SignInComponent passwordSignin = {p.passwordSignin} />
                      :
                        <SignUpComponent passwordSignup = {p.passwordSignup}/>
      return (
        <div >
        <br/>
        <Tabs className='tab-demo z-depth-1 col s4 offset-s4'>
          <Tab className="tab col s5 offset-s1" title="Sign in" active><SignInComponent passwordSignin = {p.passwordSignin} /></Tab>
          <Tab className="tab col s5" title="Sign up" ><SignUpComponent passwordSignup = {p.passwordSignup}/></Tab>
        </Tabs>

        </div>
      )
    }
	}
