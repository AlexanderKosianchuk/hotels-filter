import './results.sass'

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Results extends Component {
  render() {
    return (
      <div className="results">
        222
      </div>
    );
  }
}

Results.propTypes = {
  searchQuery: PropTypes.string,
  start: PropTypes.array,
  hasPool: PropTypes.bool,

  hotels: PropTypes.array
};

function mapStateToProps(state) {
  return {
    hotels: state.hotels.items
  };
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
