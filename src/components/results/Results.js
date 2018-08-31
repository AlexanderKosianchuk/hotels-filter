import './results.sass'

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HotelShort from 'components/hotel-short/HotelShort';

class Results extends Component {
  buildResults() {
    let hotels = this.props.hotels;

    if (this.props.searchQuery) {
      hotels = hotels.filter(item => item.name.toLowerCase().includes(this.props.searchQuery.toLowerCase()));
    }

    if (this.props.stars) {
      hotels = hotels.filter(item => parseInt(item.rate) <= this.props.stars);
    }

    if (this.props.hasPool && (this.props.hasPool === 'true')) {
      hotels = hotels.filter(item => item.hasPool === 'true');
    }

    return hotels.map((item, index) => {
      return <HotelShort
        key={ index }
        name={ item.name }
        img={ item.img }
        address={ item.address }
        location={ item.location }
        description={ item.description }
        rate={ parseInt(item.rate) }
        hasPool={ item.hasPool === 'true'}
        price={ item.price }
      />
    })
  }

  render() {
    return (
      <div className="results">
        { this.buildResults() }
      </div>
    );
  }
}

Results.propTypes = {
  searchQuery: PropTypes.string,
  stars: PropTypes.number,
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
