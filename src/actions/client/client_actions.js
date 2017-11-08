import * as firebase from 'firebase';
let C = require("../../constants/client/client.js")

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
