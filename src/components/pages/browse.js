import React, { Component } from 'react';
import PageSelect from '../PageSelect';
// import React, { Component } from 'react';
// import PageSelect from '../Header/PageSelect';
import { Link } from 'react-router-dom';
import '../../App.js';
import '../../App.css';
//import Input from '../Form/Input';
import { List, ListItem } from '../List';
import { Col, Row, Container } from '../Grid';
import API from '../utils/API';
//import singleListing from '../singleListing'

class Browse extends Component {
	state = {
		listings: [],
		title: '',
		description: '',
		duration: '',
		datesAvailable: '',
		tags: ''
	};

	componentDidMount() {
		this.loadListings();
	}

	loadListings = () => {
		API.getListings()
			.then((res) =>
				this.setState({
					listings: res.data,
					title: '',
					description: '',
					duration: '',
					datesAvailable: '',
					tags: ''
				})
			)
			.catch((err) => console.log(err));
	};

	// checkListing = () => {
	// 	API.checkListing()
	// 		.then((res) =>
	// 			this.setState({

	// 				title: '',
	// 				description: '',
	// 				duration: '',
	// 				datesAvailable: '',
	// 				tags: ''
	// 			})

	// 		)
	// 		.catch((err) => console.log(err));
	// };

	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	render() {
		return (
			<div>
				<PageSelect />
				<Container>
					<Row>
						<Col size="md-6 sm-12">
							{this.state.listings.length ? (
								<List>
									{this.state.listings.map((listing) => (
										<ListItem key={listing._id}>
											<Link to={'/listing/' + listing._id}>
												<strong>
													<ul>
														<li className="listTitle"> {listing.title} </li>
													</ul>
												</strong>
											</Link>
											<li> {listing.description} </li>
											<li> {listing.duration} </li>
											<li> {listing.datesAvailable} </li>
											<li> {listing.tags} </li>
											
										</ListItem>
									))}
								</List>
							) : (
								<h3>No Results to Display</h3>
							)}
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Browse;
