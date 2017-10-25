import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="light-blue lighten-1" role="navigation">
        <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">Logo</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="./sign_in.html">Sign in</a></li>
          </ul>

          <ul id="nav-mobile" className="side-nav">
            <li><a href="./sign_in.html">Sign in</a></li>
          </ul>
          <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
        </div>
      </nav>
    );
  }
}
