import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../utils/API";

class singleListing extends Component {
  state = {
    listing: {}
  };
  
  componentDidMount() {
    API.checkListing(this.props.match.params.id)
      .then(res => this.setState({ listing: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
           
              <h1>
                {this.state.listing.title} from user ID
              </h1>
           
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Description</h1>
              <p>
                {this.state.listing.description}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/browse/">← Back to Browse</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default singleListing;
