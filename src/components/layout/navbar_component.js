import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NavbarComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    var logOut = null;
    switch (this.props.userState) {
      case "SIGNED_IN":
        logOut = <li><a onClick={this.props.logOut}>Sign out</a></li>
        break;
      case "LOGOUT":
        logOut = <li><Link to="/authentication" >Sign in</Link></li>
    }

    return (
      <nav className="light-blue lighten-1" role="navigation">
        <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">Logo</a>
          <ul className="right hide-on-med-and-down">
            {logOut}
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
