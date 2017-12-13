import * as firebase from 'firebase';
let C = require("../../constants/provider/provider.js")
import { default as contract } from 'truffle-contract'
import product_sell_artifacts from '../../../build/contracts/ProductSell.json'
// var A = require("../../constants/eth_constants.js")
var ProductSell = contract(product_sell_artifacts);
ProductSell.setProvider(web3.currentProvider);

export function setPossibleContracts(){
  return function(dispatch, getState){
      dispatch({type: C.POSSIBLE_CONTRACTS_CHANGING_STATE, possibleContractsCurrently: C.POSSIBLE_CONTRACTS_LOADING})

      firebase.database().ref('contracts').once('value', function(snapshot) {
        var possibleContracts = []
        snapshot.forEach(function(contract) {
          var cont = contract.val()
          if (!cont.isReady){
            cont["key"] = contract.key
            possibleContracts.push(cont);
          }
        })
        dispatch({type: C.POSSIBLE_CONTRACTS_CHANGING_STATE, possibleContractsCurrently: C.POSSIBLE_CONTRACTS_LOADED, possibleContracts: possibleContracts})
      })
  }
}

export function goToContract(contractId, nameIngridient){
  return function(dispatch, getState){
    var a = false
    var c = true
    var newIngridients = []
    var address = ''
    firebase.database().ref('contracts').child(contractId).once('value', function(contract){
      address = contract.val().address
    }).then( () => {
      console.log();
      ProductSell.deployed().then(function(contractInstance){
        contractInstance.registerSupplier(firebase.auth().currentUser.uid, nameIngridient,
          {from: web3.eth.coinbase, gas: A.gas_price},
          function(error, data) {
            if (error || data === 'undefined') {
              console.log('Error occured: ' + error);
            } else {
              console.log('Add client, tx address: ' + data);
              //
              firebase.database().ref('contracts').child(contractId).once('value', function(contract){
                if (contract.val().ingridients){
                  contract.val().ingridients.map((ing) => {
                    if(ing.name == nameIngridient){
                      ing.isReady = true
                      ing["provider_uid"] = firebase.auth().currentUser.uid
                      a = true
                    }
                    newIngridients.push(ing)
                  })
                }
              }).then( () => {
                if(a){
                  firebase.database().ref('all_users').child(firebase.auth().currentUser.uid)
                    .child('contracts').push(contractId).then( () => {
                      firebase.database().ref('contracts').child(contractId).update({
                        ingridients: newIngridients
                      }).then( () => {
                        firebase.database().ref('contracts').child(contractId).once('value', function(contract){
                          contract.val().ingridients.map((ing) => {
                            if(ing.isReady == false){
                              c = false
                            }
                          })
                        }).then( () => {
                          if(c){
                            firebase.database().ref('contracts').child(contractId).update({
                              isReady: true
                            })
                          }
                        })
                      }).then( () => {
                          updatePossibleContracts(dispatch,getState)
                      })
                    })
                }
              })
            //
            }
          });
      })
    })
  }
}


export function updatePossibleContracts(dispatch,getState){
      dispatch({type: C.POSSIBLE_CONTRACTS_CHANGING_STATE, possibleContractsCurrently: C.POSSIBLE_CONTRACTS_LOADING})

      firebase.database().ref('contracts').once('value', function(snapshot) {
        var possibleContracts = []
        snapshot.forEach(function(contract){
          var cont = contract.val()
          if (!cont.isReady){
            cont["key"] = contract.key
            possibleContracts.push(cont);
          }
        })

        dispatch({type: C.POSSIBLE_CONTRACTS_CHANGING_STATE, possibleContractsCurrently: C.POSSIBLE_CONTRACTS_LOADED, possibleContracts: possibleContracts})
        updateMyProviderContracts(dispatch,getState)
      })
}

export function updateMyProviderContracts(dispatch, getState){
    if(getState().user.contracts){
      dispatch({type: C.MY_PROVIDER_CONTRACTS_CHANGING_STATE, myProviderContractsCurrently: C.MY_PROVIDER_CONTRACTS_LOADING})
      var myProviderContracts = []
      var promises = [];

      var contractKeys = Object.keys(getState().user.contracts).map((key) => {
          var allContractsRef = firebase.database().ref().child('contracts').child(getState().user.contracts[key])
          promises.push(allContractsRef.once('value'));
      })

      Promise.all(promises).then((contractSnaphots) => {
        contractSnaphots.map(snapshot => {
          var contract = {
            name: snapshot.val().name,
            ingridients: snapshot.val().ingridients,
            price: snapshot.val().finalCost,
            isReady: snapshot.val().isReady,
            id: snapshot.key
          }
          myProviderContracts.push(contract)
        })

        dispatch({type: C.MY_PROVIDER_CONTRACTS_CHANGING_STATE, myProviderContractsCurrently: C.MY_PROVIDER_CONTRACTS_LOADED, myProviderContracts: myProviderContracts})
      })
    }
    else {
      dispatch({type: C.MY_PROVIDER_CONTRACTS_CHANGING_STATE, myProviderContractsCurrently: C.MY_PROVIDER_CONTRACTS_LOADED, myProviderContracts: []})
    }
}


export function setMyProviderContracts(){
  return function(dispatch, getState){
    if(getState().user.contracts){
      dispatch({type: C.MY_PROVIDER_CONTRACTS_CHANGING_STATE, myProviderContractsCurrently: C.MY_PROVIDER_CONTRACTS_LOADING})
      var myProviderContracts = []
      var promises = [];

      var contractKeys = Object.keys(getState().user.contracts).map((key) => {
          var allContractsRef = firebase.database().ref().child('contracts').child(getState().user.contracts[key])
          promises.push(allContractsRef.once('value'));
      })

      Promise.all(promises).then((contractSnaphots) => {
        contractSnaphots.map(snapshot => {
          var contract = {
            name: snapshot.val().name,
            ingridients: snapshot.val().ingridients,
            price: snapshot.val().finalCost,
            isReady: snapshot.val().isReady,
            id: snapshot.key
          }
          myProviderContracts.push(contract)
        })

        dispatch({type: C.MY_PROVIDER_CONTRACTS_CHANGING_STATE, myProviderContractsCurrently: C.MY_PROVIDER_CONTRACTS_LOADED, myProviderContracts: myProviderContracts})
      })
    }
    else {
      dispatch({type: C.MY_PROVIDER_CONTRACTS_CHANGING_STATE, myProviderContractsCurrently: C.MY_PROVIDER_CONTRACTS_LOADED, myProviderContracts: []})
    }
  }
}
