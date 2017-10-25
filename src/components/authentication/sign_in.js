import React, { Component } from 'react';

export default class SignIn extends Component {
  render(){
    return (
      <div >
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
                        <input id="email" type="email" className="validate"/>
                        <label data-error="Wrong email format!" for="email">Email</label>
                      </div>

                       <div className="input-field col s6 offset-s3">
                         <input id="password" type="password" className="validate"/>
                         <label for="password">Password</label>
                       </div>
                    </div>

                    <div className="center">
                      <button className="btn waves-effect waves-light" type="submit" name="action">Submit
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
