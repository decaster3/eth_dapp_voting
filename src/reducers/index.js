import { combineReducers } from 'redux';
import AuthenticationReducer from './authentication/authentication_reducer'
import BuisnesmanReducer from './buisnesman/buisnesman_reducer'
const rootReducer = combineReducers({
  user: AuthenticationReducer,
  buisnesman: BuisnesmanReducer
});

export default rootReducer;
