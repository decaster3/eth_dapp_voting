import { combineReducers } from 'redux';
import AuthenticationReducer from './authentication/authentication_reducer'
import BuisnesmanReducer from './buisnesman/buisnesman_reducer'
import ProviderReducer from './provider/provider_reducer'
import ClientReducer from './client/client_reducer'
const rootReducer = combineReducers({
  user: AuthenticationReducer,
  buisnesman: BuisnesmanReducer,
  provider: ProviderReducer,
  client: ClientReducer
});

export default rootReducer;
