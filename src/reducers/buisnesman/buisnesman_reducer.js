let C = require("../../constants/buisnesman/buisnesman.js");
let initialState = require("./initial_state.js");

module.exports = function(currentstate = initialState.buisnesman,action){
  switch(action.type){
    case C.CONTRACT_MANIPULATION:
      return {
        ...currentstate,
        contractCurrently: action.contractCurrently
      }
    case C.MY_CONTRACTS_CHANGING_STATE:
      return {
        ...currentstate,
        myContractsCurrently: action.myContractsCurrently,
        myContracts: action.myContracts || []
      };
    default: return currentstate;
  }
}
