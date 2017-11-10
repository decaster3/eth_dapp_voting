import React, { Component } from 'react';
import { initCounter } from '../../assets/js/init';
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
        <div className="container">
            <h4 className="header center" >Choose the role:</h4>
            <br/>
            <div className="section">

            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text"><i className="material-icons">local_grocery_store</i></h2>
                  <h5 className="center">Provider</h5>
                  <br/>
                  <br/>
                  <div className="row center">
                    <a onClick = {() => this.changeView("Provider")} id="download-button" className="btn-large waves-effect waves-light orange">Get Started</a>
                  </div>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text"><i className="material-icons">monetization_on</i></h2>
                  <h5 className="center">Businessman</h5>
                  <br/>
                  <br/>
                  <div className="row center">
                    <a onClick = {() => this.changeView("Businessman")} id="download-button" className="btn-large waves-effect waves-light orange">Get Started</a>
                  </div>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text"><i className="material-icons">group</i></h2>
                  <h5 className="center">Client</h5>
                  <br/>
                  <br/>
                  <div className="row center">
                    <a onClick = {() => this.changeView("Client")} id="download-button" className="btn-large waves-effect waves-light orange">Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    else {
      initCounter();
      return (
        <div>
        <div className="section no-pad-bot" id="index-banner">

            <h1 className="header center orange-text">Sign up</h1>
            <br/><br/>
          </div>

          <div className="row">
          <div className="col s6 offset-s3">
              <div className="row">
                <div className="col s6 offset-s1">
                    <a onClick = {() => this.changeView()} className="waves-effect waves-green btn white grey-text text-darken-4">Back to chooser</a>
                  <blockquote><h6>User role: </h6>   <h5>{s.role}</h5></blockquote>
                </div>
              </div>
          </div>
          <br/><br/>
          <div className="container">
            <div className="section">

              <div className="row">
                <form className="col s12">


                    <div className="input-field col s6 offset-s3">
                      <input id="email" type="email" required="" aria-required="true" className="validate" name="email" onChange={this.handleChange} value={s.email}/>
                      <label data-error="Wrong email format!" for="email">Email</label>
                    </div>

                     <div className="input-field col s6 offset-s3">
                       <input id="password" type="password" minLength="4" className="validate" name="pass" onChange={this.handleChange} value={s.pass}/>
                       <label for="password">Password</label>
                     </div>


                     <div className="input-field col s6 offset-s3">
                       <input id="address" type="text" data-length="32" name="address" onChange={this.handleChange} value={s.address}/>
                       <label data-error="Wrong address format!" for="address">Address</label>
                     </div>

                    <div className="col s6 offset-s3 center">
                      <button className="btn waves-effect waves-light" type="button" name="action" onClick = {() => p.passwordSignup(s.email, s.pass, s.role, s.address)}>Submit
                         <i className="material-icons right">send</i>
                      </button>
                    </div>
                </form>
             </div>

            </div>
          <br/><br/>
          </div>
          </div>


        </div>
      )
    }
	}
}
