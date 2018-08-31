import './hotel-short.sass';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Image, Button } from 'react-bootstrap';

export default class HotelShort extends Component {
  render() {
    return (
      <Row className="show-grid hotel-short">
        <Col md={4}>
           <Image src={ this.props.img } thumbnail />
        </Col>
        <Col md={8}>
          <h3 className="hotel-short__name">{ this.props.name }</h3>
          <div className="hotel-short__address">{ this.props.address }</div>
          <div className="hotel-short__description">{ this.props.description }</div>
          <div className="hotel-short__rate">{ this.props.rate }</div>
          <div className="hotel-short__has-pool">{ this.props.hasPool }</div>
          <div className="hotel-short__detail">
            <Button>Details</Button>
          </div>
        </Col>
      </Row>
    );
  }
}

HotelShort.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  address: PropTypes.string,
  location: PropTypes.object,
  description: PropTypes.string,
  rate: PropTypes.number,
  hasPool: PropTypes.bool,
  price: PropTypes.object
};
