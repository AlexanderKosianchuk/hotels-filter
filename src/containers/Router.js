import React, { Component } from 'react'
import { Route } from 'react-router';
import { connect } from 'react-redux';
import { ConnectedRouter, routerActions } from 'react-router-redux';

import Hotels from 'containers/hotels/Hotels';

class Router extends Component {
  constructor(props) {
    super (props);

    this.routes = [
      { isExact: true, path: '/search/:searchQuery/stars/:stars/has-pool/:hasPool', component: Hotels },
      { isExact: true, path: '/search/:searchQuery/stars/:stars/', component: Hotels },
      { isExact: true, path: '/search/:searchQuery', component: Hotels },
      { isExact: true, path: '/stars/:stars/has-pool/:hasPool', component: Hotels },
      { isExact: true, path: '/has-pool/:hasPool', component: Hotels },
      { isExact: true, path: '/stars/:stars', component: Hotels },
      { isExact: true, path: '/', component: Hotels },
    ];
  }

  render() {
    return (<ConnectedRouter history={ this.props.history }><div>
        { this.routes.map((item, key) => {
          if (item.isExact) {
            return <Route exact path={ item.path } component={ item.component } key={ key } />
          }

          return <Route path={ item.path } component={ item.component } key={ key }/>
        }) }
      </div></ConnectedRouter>
    )
  }
};

function mapStateToProps(state) {
  return {
    location: state.router.location
  };
}

export default connect(mapStateToProps, () => { return {} })(Router);
