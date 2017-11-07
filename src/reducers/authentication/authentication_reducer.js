let C = require("../../constants/authentication/authentication.js");
let initialState = require("./initial_state.js");

module.exports = function(currentstate = initialState.auth,action){
  switch(action.type){
    case C.ATTEMPTING:
      return {
        ...currentstate,
        currently: C.AWAITING,
        email: "guest",
        uid: null
      };
    case C.LOGOUT:
      return {
        ...currentstate,
        currently: C.ANONYMOUS,
        email: "guest",
        uid: null,
        role: "no"
      };
    case C.SIGNIN_USER:
      return {
        currently: C.SIGNED_IN,
        role: action.role,
        email: action.email,
        address: action.address,
        user: action.uid,
        contracts: action.contracts
      };
    default: return currentstate;
  }
}
