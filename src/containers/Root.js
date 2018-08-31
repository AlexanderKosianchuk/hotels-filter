import './root.sass';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';

import React, { Component } from 'react';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Router from 'containers/Router';

class Root extends Component {
  render() {
    return (
      <AppContainer>
        <Provider store={ this.props.store }>
          <Router history={ this.props.history } />
        </Provider>
      </AppContainer>
    );
  }
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
