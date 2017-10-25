import React, { Component } from 'react';

export default class RoleChooser extends Component {
  render() {
    return (
      <div class="container">
          <h4 class="header center" >Choose the role:</h4>
          <br/>
          <div class="section">

          <!--   Icon Section   -->
          <div class="row">
            <div class="col s12 m4">
              <div class="icon-block">
                <h2 class="center light-blue-text"><i class="material-icons">local_grocery_store</i></h2>
                <h5 class="center">Vendor</h5>
                <br/>
                <br/>
                <div class="row center">
                  <a href="./sign_up.html" id="download-button" class="btn-large waves-effect waves-light orange">Get Started</a>
                </div>
              </div>
            </div>

            <div class="col s12 m4">
              <div class="icon-block">
                <h2 class="center light-blue-text"><i class="material-icons">monetization_on</i></h2>
                <h5 class="center">Customer</h5>
                <br/>
                <br/>
                <div class="row center">
                  <a href="./sign_up.html" id="download-button" class="btn-large waves-effect waves-light orange">Get Started</a>
                </div>
              </div>
            </div>

            <div class="col s12 m4">
              <div class="icon-block">
                <h2 class="center light-blue-text"><i class="material-icons">group</i></h2>
                <h5 class="center">User</h5>
                <br/>
                <br/>
                <div class="row center">
                  <a href="./sign_up.html" id="download-button" class="btn-large waves-effect waves-light orange">Get Started</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
	}
}
