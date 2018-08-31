import './filter.sass';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'react-bootstrap';

import redirect from 'actions/redirect';

class Filter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filter">
        <div className="filter__stars">
        </div>
        <div className="filter__options">
        </div>
        <div className="filter__search">
        </div>
        <div className="filter__button">
          <Button>Apply</Button>
        </div>
      </div>
    );
  }
};

Filter.propTypes = {
  searchQuery: PropTypes.string,
  start: PropTypes.array,
  hasPool: PropTypes.bool,

  redirect: PropTypes.func,
};


function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    redirect: bindActionCreators(redirect, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
