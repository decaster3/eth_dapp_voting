import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/configureStore'
import * as firebase from 'firebase';
import { startListeningToAuth } from './actions/authentication/authentication_actions';
// var Web3 = require('web3');
var C = require("./constants/eth_constants.js")

var config = {
  apiKey: "AIzaSyAs3VlJPo3kRYrw361TvAyySKh2UubXdaQ",
  authDomain: "dapp-16e5e.firebaseapp.com",
  databaseURL: "https://dapp-16e5e.firebaseio.com",
  projectId: "dapp-16e5e",
  storageBucket: "",
  messagingSenderId: "53818920401"
};
firebase.initializeApp(config);

  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source like Metamask")
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    window.web3 = new Web3(new C.Web3.providers.HttpProvider("http://localhost:8545"));
  }

const store = configureStore()

ReactDOM.render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

setTimeout(function(){
	store.dispatch( startListeningToAuth() );
});

// NOTE: хот реплейсмент при появлении новых верхних элементов в дереве редаксa
if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    ReactDOM.render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
