import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import App from './components/App';
import AuthenticationContainer from './containers/authentication/authentication_container'
const configureRoutes = () => {
      return (<div>
                <Switch>
                  <Route exact path="/" component={App} />
                  <Route path="/authentication" component={AuthenticationContainer} />
                </Switch>
              </div>)
      }
export default configureRoutes
