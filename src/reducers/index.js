import { combineReducers } from 'redux';
import AuthenticationReducer from './authentication/authentication_reducer'
const rootReducer = combineReducers({
  user: AuthenticationReducer
});

export default rootReducer;
