import * as firebase from 'firebase';
let C = require("../../constants/client/client.js")
var A = require("../../constants/eth_constants.js")
export function setPossibleContracts(){
  return function(dispatch, getState){
      dispatch({type: C.POSSIBLE_CLIENT_CONTRACTS_CHANGING_STATE, possibleClientContractsCurrently: C.POSSIBLE_CLIENT_CONTRACTS_LOADING})
      var possibleContracts = []
      var contracts = [];
      //hz
      firebase.database().ref('contracts').once('value', function(snapshot) {
        snapshot.forEach(function(contract){
          var cont = contract.val()
          cont["key"] = contract.key
          contracts.push(cont);
        })//
      }).then(() => {
        contracts.map(contract => {
          if(contract.isReady == true)
            possibleContracts.push(contract)
        })
      }).then(() => {
        dispatch({type: C.POSSIBLE_CLIENT_CONTRACTS_CHANGING_STATE, possibleClientContractsCurrently: C.POSSIBLE_CLIENT_CONTRACTS_LOADED, possibleClientContracts: possibleContracts})
      })
  }
}

export function buyProduct(address) {
  var price;
  var contractInstance = web3.eth.contract(A.abi).at(address)
  return function(dispatch, getState){
    contractInstance._product(function(e, product) {
      price = product[1];
      console.log(price);
      contractInstance.buy({from: web3.eth.coinbase, gas: A.gas_price, value: price},
        function(error, data) {
          if (error || data === 'undefined') {
            console.log('Error occured: ' + error);
            console.log(product[1]);
          } else {
            console.log(product[1]);
            console.log('Add client, tx address: ' + data);
          }
      });
    });
  }
}
