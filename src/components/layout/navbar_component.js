import React, { Component } from 'react'

export default class NavbarComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    var logOut = this.props.logOut ?
      (
        <li><a onClick={this.props.logOut}>Sign in</a></li>
      )
      :
      null;

    return (
      <nav className="light-blue lighten-1" role="navigation">
        <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">Logo</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/#/authentication">Sign in</a></li>
          </ul>

          <ul id="nav-mobile" className="side-nav">
            {logOut}
          </ul>
          <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
        </div>
      </nav>
    );
  }
}
