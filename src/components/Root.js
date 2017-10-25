import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import Routes from '../routes'
import { connect } from 'react-redux'

export default class Root extends Component {

  render() {
    const { store, history } = this.props;

    return ( <div>

        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Routes/>
          </ConnectedRouter>
        </Provider>
      </div>
    );
  }
}
Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
