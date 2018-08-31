import './filter.sass';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FormGroup, ControlLabel, Checkbox, FormControl, Button } from 'react-bootstrap';

import redirect from 'actions/redirect';

const STARS = [1, 2, 3, 4, 5];

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stars: props.stars || 0,
      hasPool: props.hasPool === 'true',
      searchQuery: props.searchQuery || '',
    }
  }
  buildStars() {
    return STARS.map((item, index) => {
      if (item > this.state.stars) {
        return <span
          className="glyphicon glyphicon-star-empty"
          key={ index }
          onClick={ this.handleStarsClick.bind(this, item) }
        >
        </span>;
      }

      return <span
        className="glyphicon glyphicon-star"
        key={ index }
        onClick={ this.handleStarsClick.bind(this, item) }
      >
      </span>;
    });
  }

  handleStarsClick(item) {
    this.setState({
      stars: item
    });
  }

  handleCheckstateChange() {
    this.setState({
      hasPool: !this.state.hasPool
    });
  }

  handleChange(e) {
    this.setState({ searchQuery: e.target.value });
  }

  handleApply() {
    let url = '';

    if (this.state.searchQuery) {
      url += '/search/' + this.state.searchQuery;
    }

    if (this.state.stars) {
      url += '/stars/' + this.state.stars;
    }

    if (this.state.hasPool) {
      url += '/has-pool/' + this.state.hasPool;
    }

    this.props.redirect(url);
  }

  render() {
    return (
      <div className="filter">
        <div className="filter__stars">
          <div>Stars</div>
          <div className="filter__stars-list">{ this.buildStars() }</div>
        </div>
        <div className="filter__options">
          <FormGroup>
            <ControlLabel>Options</ControlLabel>
            <Checkbox
              checked={ this.state.hasPool ? 'checked' : ''}
              onChange={ this.handleCheckstateChange.bind(this) }
            >Has Pool</Checkbox>
            </FormGroup>
        </div>
        <div className="filter__search">
          <FormGroup controlId="searchControl">
            <ControlLabel>Search</ControlLabel>
            <FormControl
              type="text"
              value={ this.state.searchQuery }
              placeholder="Search"
              onChange={ this.handleChange.bind(this) }
            />
          </FormGroup>
        </div>
        <div className="filter__button">
          <Button
            onClick={ this.handleApply.bind(this) }
          >Apply</Button>
        </div>
      </div>
    );
  }
};

Filter.propTypes = {
  searchQuery: PropTypes.string,
  stars: PropTypes.number,
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
