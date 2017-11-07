let C = require("../../constants/buisnesman/buisnesman.js");
let initialState = require("./initial_state.js");

module.exports = function(currentstate = initialState.buisnesman,action){
  switch(action.type){
    case C.MY_CONTRACTS_CHANGING_STATE:
      return {
        myContractsCurrently: action.myContractsCurrently,
        myContracts: action.myContracts 
      };
    default: return currentstate;
  }
}
