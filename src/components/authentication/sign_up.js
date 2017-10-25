import React, { Component } from 'react';

export default class SignUp extends Component {
  render(){
    return (
      <div >
      <div class="section no-pad-bot" id="index-banner">
        <div class="container">
          <br><br>
          <h1 class="header center orange-text">Sign up</h1>
          <br><br>
        </div>
      </div>

      <div class="row">
        <div class="col s6 offset-s3">
            <div class="row">
              <div class="col s6 offset-s1">
                  <a href="#!" class="waves-effect waves-green btn white grey-text text-darken-4">Back to chooser</a>
                <blockquote><h6>User role: </h6>   <h5>Customer</h5></blockquote>
              </div>
            </div>
       </div>
       <br><br>
        <div class="container">
          <div class="section">

            <div class="row">
              <form class="col s12">


                  <div class="input-field col s6 offset-s3">
                    <input id="email" type="email" class="validate">
                    <label data-error="Wrong email format!" for="email">Email</label>
                  </div>

                   <div class="input-field col s6 offset-s3">
                     <input id="password" type="password" class="validate">
                     <label for="password">Password</label>
                   </div>
                </div>

                <div class="center">
                  <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                     <i class="material-icons right">send</i>
                  </button>
                </div>
              </form>
           </div>

          </div>
        <br><br>
      </div>
      </div>
    )
	}
}
