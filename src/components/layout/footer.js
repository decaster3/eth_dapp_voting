import React, { Component } from 'react'

// <div className="container">
//   <div className="row">
//     <div className="col l6 s12">
//       <h5 className="white-text">Company Bio</h5>
//       <p className="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job.</p>
//
//
//     </div>
//     <div className="col l3 s12">
//       <h5 className="white-text">Settings</h5>
//       <ul>
//         <li><a className="white-text" href="#!">Link 1</a></li>
//
//       </ul>
//     </div>
//     <div className="col l3 s12">
//       <h5 className="white-text">Connect</h5>
//       <ul>
//         <li><a className="white-text" href="#!">Link 1</a></li>
//
//       </ul>
//     </div>
//   </div>
// </div>
export default class Footer extends Component {
  render() {


    return (
      <footer className="page-footer orange">


        <div className="container">
          Made by <a className="orange-text text-lighten-3" href="http://hikester.me">Hikester</a>
        </div>

      </footer>

    );
  }
}
