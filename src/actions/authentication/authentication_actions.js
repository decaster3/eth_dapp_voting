import * as firebase from 'firebase';
let C = require("../../constants/authentication/authentication.js")
import { routerMiddleware, push } from 'react-router-redux'

export function startListeningToAuth(){
  return function(dispatch,getState){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user){
        let authRef = firebase.database().ref().child('all_users').child(user.uid)
        authRef.on('value', function(snapshot){
          dispatch({
            type: C.SIGNIN_USER,
            uid: snapshot.key,
            email: snapshot.val().email,
            role: snapshot.val().role,
            address: snapshot.val().address
          })
        })
      } else {
					if (getState().user.currently !== C.ANONYMOUS){ // иногда выбрасывал что залогинен, хотя не был, хз почему, это костыль
						dispatch({type:C.LOGOUT});
					}
				}
    })
  }
}

export function passwordSignin(email,pass){
  return function(dispatch){
    dispatch({type:C.ATTEMPTING})
    firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
      console.log("ERROR IN SIGNIN");
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    })
  }
}
export function passwordSignup(email, pass, role, address){
  let authRef = firebase.database().ref().child('all_users')
  return function(dispatch){
    dispatch({type:C.ATTEMPTING})
    firebase.auth().createUserWithEmailAndPassword(email, pass).then( () => {
      var user = firebase.auth().currentUser
      authRef.child(user.uid).set({
        email: email,
        pass: pass,
        role: role,
        address: address
      })
    }).catch(function(error) {
      console.log("ERROR IN SIGNUP");
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      });
  }
}

export function logoutUser(){
  return function(dispatch){
    firebase.auth().signOut().then(function() {
      dispatch({type:C.LOGOUT});
    }).catch(function(error) {
      console.log("ERROR IN LOGOUT");
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
  }
}
