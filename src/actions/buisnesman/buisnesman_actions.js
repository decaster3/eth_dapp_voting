import * as firebase from 'firebase';
// import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'
import product_sell_artifacts from '../../../build/contracts/ProductSell.json'
let C = require("../../constants/buisnesman/buisnesman.js")
// var A = require("../../constants/eth_constants.js")
var ProductSell = contract(product_sell_artifacts);
ProductSell.setProvider(web3.currentProvider);

export function createContract(name, finalCost, ingridients){
  return function(dispatch, getState){
    if (name !== '' && finalCost !== 0 ) {
      var product_name = name;
      var cost = web3.toWei(finalCost, 'ether');
      var adress = '';
      console.log(web3.eth);
      dispatch({type: C.CONTRACT_MANIPULATION, contractCurrently: C.WAITING_FOR_CONTRACT})
      // var contract = web3.eth.contract(A.abi)

      var ing_names = []
      ingridients.map(ing => {
        ing_names.push(ing.name)
      })
      var ing_prices = []
      ingridients.map(ing => {
        ing_prices.push(web3.toWei(ing.price, 'ether'));
      })
      var contractInstance;
      ProductSell.deployed().then(function(contractInstance) {
        contractInstance.addProduct(product_name, cost, ing_names, ing_prices,
        {
          from: web3.eth.coinbase,
          gas: A.gas_price
        }, function(error, addr) {
        if (error) {
          dispatch({type: C.CONTRACT_MANIPULATION, contractCurrently: C.NOT_WAITING_FOR_CONTRACT})
          alert("When deploying contract error has occured: " + error)
          console.log("When deploying contract error has occured: " + error);
        } else {
          console.log('Deployed.');
          var newContract;
          newContract.address = contractInstance.getProduct();
          if (!newContract.address) {
            console.log("Tx hash: " + newContract.transactionHash);
          } else {
            console.log("Address: " + newContract.address);
            adress = newContract.address
            dispatch({type: C.CONTRACT_MANIPULATION, contractCurrently: C.NOT_WAITING_FOR_CONTRACT})
            let userContactsRef = firebase.database().ref().child('all_users').child(firebase.auth().currentUser.uid).child('contracts')
            let allContractsRef = firebase.database().ref().child('contracts')
            var pushh = allContractsRef.push()
            var pushhh = userContactsRef.push()
            var key = pushh.key
              pushhh.set(key)
                .then( () => {
                  allContractsRef.child(key).set({
                    address: adress,
                    name: name,
                    finalCost: finalCost,
                    ingridients: ingridients,
                    isReady: false
                  })
                }).then( () => {
                  updateMyContracts(dispatch, getState)
                })
          }
        }
      });
    } else {
      dispatch({type: C.CONTRACT_MANIPULATION, contractCurrently: C.NOT_WAITING_FOR_CONTRACT})
      alert("Enter name of product and price!: " + error)
      console.log('Enter name of product and price!');
    }
  }
}

function addIngredient(contractInstance, ingredient_name, ingredient_cost) {
  contractInstance.addIngredient(ingredient_name, web3.toWei(ingredient_cost, 'ether'),
    {from: web3.eth.coinbase, gas: A.gas_price},
     function(error, data) {
    if (error || data === 'undefined') {
      console.log('Error occured: ' + error);
    } else {
      console.log('Ingredient successfully added, tx address: ' + data);
    }
  });
}

export function updateMyContracts(dispatch, getState){
    if(getState().user.contracts){
      dispatch({type: C.MY_CONTRACTS_CHANGING_STATE, myContractsCurrently: C.MY_CONTRACTS_LOADING})
      var myContracts = []
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
          myContracts.push(contract)
        })
        console.log(myContracts.length);

        dispatch({type: C.MY_CONTRACTS_CHANGING_STATE, myContractsCurrently: C.MY_CONTRACTS_LOADED, myContracts: myContracts})
      })
    }
    else {
      dispatch({type: C.MY_CONTRACTS_CHANGING_STATE, myContractsCurrently: C.MY_CONTRACTS_LOADED, myContracts: []})
    }
}

export function setMyContracts(){
  return function(dispatch, getState){
    if(getState().user.contracts){
      dispatch({type: C.MY_CONTRACTS_CHANGING_STATE, myContractsCurrently: C.MY_CONTRACTS_LOADING})
      var myContracts = []
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
          myContracts.push(contract)
        })
        console.log(myContracts.length);

        dispatch({type: C.MY_CONTRACTS_CHANGING_STATE, myContractsCurrently: C.MY_CONTRACTS_LOADED, myContracts: myContracts})
      })
    }
    else {
      dispatch({type: C.MY_CONTRACTS_CHANGING_STATE, myContractsCurrently: C.MY_CONTRACTS_LOADED, myContracts: []})
    }
  }
}
