import * as firebase from 'firebase';
let C = require("../../constants/buisnesman/buisnesman.js")

export function createContract(name, finalCost, ingridients){
  //
  let userContactsRef = firebase.database().ref().child('all_users').child(firebase.auth().currentUser.uid).child('contracts')
  let allContractsRef = firebase.database().ref().child('contracts')
  var pushh = allContractsRef.push()
  var pushhh = userContactsRef.push()
  var key = pushh.key
  return function(dispatch){
    pushhh.set(key)
      .then( () => {
        allContractsRef.child(key).set({
          name: name,
          finalCost: finalCost,
          ingridients: ingridients,
          isReady: false
        })
      })
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
