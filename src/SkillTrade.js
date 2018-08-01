import React, { Component } from 'react';

import axios from 'axios';
import { Route } from 'react-router-dom';
// components
import Signup from './components/login/sign-up';
import LoginForm from './components/login/login-form';
import Navbar2 from './components/Navbar';
import Home from './components/Home/home';
//import UserProfiles from './components/pages/userprofiles';
import addListing from './components/Listing/addListing';

import Browse from './components/Listing/browse';
import Profile from './components/Profile/profile';
import Messaging from './components/Message/messaging';


import singleListing from './components/singleListing/singleListing.js';


//import Switch from ReactRouter.Switch;
// import Wrapper from './components/Wrapper';
import Footer from './components/Footer';

import './App.css'

class App extends Component {
	constructor() {
		super();
		this.state = {
			loggedIn: false,
			username: null
		};

		this.getUser = this.getUser.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
		this.updateUser = this.updateUser.bind(this);
	}

	componentDidMount() {
		this.getUser();
	}

	updateUser(userObject) {
		this.setState(userObject);
	}

	getUser() {
		axios.get('/user/').then((response) => {
			console.log('Get user response: ');
			console.log(response.data);
			if (response.data.user) {
				console.log('Get User: There is a user saved in the server session: ');

				this.setState({
					loggedIn: true,
					username: response.data.user.username
				});
			} else {
				console.log('Get user: no user');
				this.setState({
					loggedIn: false,
					username: null
				});
			}
		});
	}

	render() {
		return (
			<section className="App Site">
			{/* <Wrapper> */}
			<section className = "Site-Content">
			<Navbar2 updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
					{/* greet user if logged in: */}
					{this.state.loggedIn && <p>WELCOME, {this.state.username.toUpperCase()} TO THE HOMEPAGE </p>}
					{/* Routes to different components */}
					{!this.state.loggedIn && <Route exact path="/" component={Home} />}

					{!this.state.loggedIn && (
						<Route path="/login" render={() => <LoginForm updateUser={this.updateUser} />} />
					)}
					{!this.state.loggedIn && <Route path="/signup" render={() => <Signup signup={this.signup} />} />}
					{this.state.loggedIn && <Route path="/browse" component={Browse} />}
					{this.state.loggedIn && (
						<Route
							path="/profile"
							render={() => (
								<Profile
									username={this.state.username}
									id={this.state.id}
								/>
							)}
						/>
					)}
					{/* {this.state.loggedIn && <Route path="/topusers" component={Ranking} />} */}
					{this.state.loggedIn && <Route path="/addListing" component={addListing} />}
					{this.state.loggedIn && (
						<Route path="/messaging" render={() => <Messaging username={this.state.username} />} />
					)}
				</section>
				
				<Route exact path="/listing/:id" component={singleListing} />
				<Footer/>
			</section>
		);
	}
}

export default App;
