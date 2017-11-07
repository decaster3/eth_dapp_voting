let C = require("../../constants/client/client.js");
let initialState = require("./initial_state.js");

module.exports = function(currentstate = initialState.client,action){
  switch(action.type){
    case C.POSSIBLE_CLIENT_CONTRACTS_CHANGING_STATE:
      return {
        ...currentstate,
        possibleClientContractsCurrently: action.possibleClientContractsCurrently,
        possibleClientContracts: action.possibleClientContracts
      };
    default: return currentstate;
  }
}
