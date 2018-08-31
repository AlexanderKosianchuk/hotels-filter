import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

import Filter from 'components/filter/Filter';
import Results from 'components/results/Results';

class Hotels extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col md={3}>
            <Filter
              searchQuery={ this.props.searchQuery }
              stars={ this.props.stars }
              hasPool={ this.props.hasPool }
            />
          </Col>
          <Col md={9}>
          <Results
            searchQuery={ this.props.searchQuery }
            stars={ this.props.stars }
            hasPool={ this.props.hasPool }
          />
          </Col>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    searchQuery: ownProps.match.params.searchQuery || null,
    stars: parseInt(ownProps.match.params.stars) || null,
    hasPool: ownProps.match.params.hasPool || null,
  };
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Hotels);
