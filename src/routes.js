import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import App from './components/App';

const configureRoutes = () => {
      return (<div>
                <Switch>
                  <Route exact path="/" component={App} />
                </Switch>
              </div>)
      }
export default configureRoutes
