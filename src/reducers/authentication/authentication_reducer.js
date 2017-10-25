let C = require("../../constants/authentication/authentication.js");
let initialState = require("./initial_state.js");

module.exports = function(currentstate = initialState.auth,action){
  switch(action.type){
    case C.ATTEMPTING:
      return {
        currently: C.AWAITING,
        email: "guest",
        uid: null
      };
    case C.LOGOUT:
      return {
        currently: C.SIGNED_IN,
        email: "guest",
        uid: null
      };
    case C.SIGNIN_USER:
      return {
        currently: C.SIGNED_IN,
        role: action.role,
        email: action.email,
        address: action.address
      };
    default: return currentstate;
  }
}
