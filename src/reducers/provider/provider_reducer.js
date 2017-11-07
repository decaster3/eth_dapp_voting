let C = require("../../constants/provider/provider.js");
let initialState = require("./initial_state.js");

module.exports = function(currentstate = initialState.provider,action){
  switch(action.type){
    case C.POSSIBLE_CONTRACTS_CHANGING_STATE:
      return {
        ...currentstate,
        possibleContractsCurrently: action.possibleContractsCurrently,
        possibleContracts: action.possibleContracts
      };
    case C.MY_PROVIDER_CONTRACTS_CHANGING_STATE:
      return {
        ...currentstate,
        myProviderContractsCurrently: action.myProviderContractsCurrently,
        myProviderContracts: action.myProviderContracts
      }
    default: return currentstate;
  }
}
