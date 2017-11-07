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
        <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <br/><br/>
          <h1 className="header center orange-text">Sign in</h1>

          <br/><br/>

        </div>

        <div className="container">
            <div className="section">
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s6 offset-s3">
                      <input id="email" required="" aria-required="true" type="email" data-length="32" className="validate" name="email" onChange={this.handleChange} value={s.email} />
                      <label data-error="Wrong email format!" for="email">Email</label>
                    </div>

                     <div className="input-field col s6 offset-s3">
                       <input id="password" name="pass" onChange={this.handleChange} value={s.pass} type="password" className="validate"/>
                       <label for="password">Password</label>
                     </div>
                  </div>

                  <div className="center">
                    <button onClick = {() => p.passwordSignin(s.email, s.pass)} className="btn waves-effect waves-light" type="submit" name="action">Sign in
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
