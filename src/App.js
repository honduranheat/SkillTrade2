import React, { Component } from 'react';

import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { Route } from 'react-router-dom';
// components
import Signup from './components/login/sign-up';
import LoginForm from './components/login/login-form';
import Navbar from './components/Header/navbar';
import Home from './components/pages/home';

import Browse from './components/pages/browse';
import Profile from './components/pages/profile';
import Ranking from './components/pages/topusers';
import Messaging from './components/pages/messaging';
import addListing from './components/pages/addListing';
import singleListing from './components/singleListing/singleListing.js';
//import Router from ReactRouter.Route;
//import Switch from ReactRouter.Switch;

class App extends Component {
	constructor() {
		super();
		this.state = {
			loggedIn: false,
			username: null,
			id: null
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
		axios.get('/user').then((response) => {
			console.log('Get user response: ');
			console.log(response.data);
			if (response.data.user) {
				console.log('Get User: There is a user saved in the server session: ');

				this.setState({
					loggedIn: true,
					username: response.data.user.username,
					id: response.data.user.id
				});
			} else {
				console.log('Get user: no user');
				this.setState({
					loggedIn: false,
					username: null,
					id: null
				});
			}
		});
	}

	render() {
		return (
			<div className="App">
				<div>
					<Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
					{/* greet user if logged in: */}
					{this.state.loggedIn && (
						<p>
							WELCOME, {this.state.username.toUpperCase()} TO THE HOMEPAGE your id is {this.state.id}{' '}
						</p>
					)}
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
							render={() => <Profile username={this.state.username} id={this.state.id} />}
						/>
					)}
					{this.state.loggedIn && <Route path="/topusers" component={Ranking} />}
					{this.state.loggedIn && <Route path="/addListing" component={addListing} />}
					{this.state.loggedIn && (
						<Route path="/messaging" render={() => <Messaging username={this.state.username} />} />
					)}
				</div>
				<div className="container" />

				<Switch>
					<Route exact path="/listing/:id" component={singleListing} />
				</Switch>
			</div>
		);
	}
}

export default App;
