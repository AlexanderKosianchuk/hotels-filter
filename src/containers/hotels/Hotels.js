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
              search={ this.props.search }
              stars={ this.props.stars }
              hasPool={ this.props.hasPool }
            />
          </Col>
          <Col md={9}>
          <Results
            search={ this.props.search }
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
    search: ownProps.match.params.searchQuery || null,
    stars: ownProps.match.params.stars || null,
    hasPool: ownProps.match.params.hasPool || null,
  };
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Hotels);
