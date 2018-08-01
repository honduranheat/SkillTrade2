import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, CardBody } from 'reactstrap';
import API from '../utils/API';

class singleListing extends Component {
	state = {
		listing: {}
	};

	componentDidMount() {
		console.log('single listing hit');
		API.checkListing(this.props.match.params.id)
			.then((res) => this.setState({ listing: res.data }))
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<Container>
				<Card>
					<CardBody>
						<h1>{this.state.listing.title} from user ID</h1>
					</CardBody>
				</Card>
				<Card>
					<CardBody>
						<p>{this.state.listing.description}</p>
						<p>Duration: {this.state.listing.duration}</p>
            <p>Dates Available: {this.state.listing.datesAvailable}</p>
            <p>Tags: {this.state.listing.tags}</p>
            
					</CardBody>
				</Card>
				<Card>
					<CardBody>
						<Link to="/browse/">← Back to Browse</Link>
					</CardBody>
				</Card>
			</Container>
		);
	}
}

export default singleListing;
