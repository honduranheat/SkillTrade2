import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import {  Button, Form, FormGroup, Label, Input, FormText, Container, Card, CardBody, CardHeader  } from 'reactstrap';
import Home from '../Home/home.js';
import './style.css';


class LoginForm extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			username: '',
			password: '',
			redirectTo: null,
			redirect: false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	componentDidMount() {
		this.setState({ redirectTo: null });
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log('handleSubmit');

		axios
			.post('/user/login', {
				username: this.state.username,
				password: this.state.password
			})
			.then((response) => {
				console.log('login response: ');
				console.log(response);
				if (response.status === 200) {
					// update App.js state
					this.props
						.updateUser({
							loggedIn: true,
							username: response.data.username,
							id: response.data.id
						});
						
						
						this.setState({redirectTo: 'home'});
						console.log(this.state.redirectTo);
						// .then(
						// 	// update the state to redirect to home
						// 	this.setState({
						// 		redirectTo: 'home'
						// 	})

							// console.log('/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////')
							// console.log(this.state.redirectTo)
					//	);
				}
				console.log(
					'/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////'
				);
				console.log(this.state.redirectTo);
			})
			.catch((error) => {
				console.log(this.state);
				console.log('login error: ');
				console.log(error);
			});
	}

	componentDidUpdate() {
		
	}

	render() {
		// if (this.state.redirectTo = 'home') {
		// 	return <Redirect to='/' />;
		// } else {
		return (
			<div>
				<h4>Login</h4>
				<Form>
					<FormGroup>
						<Label for="username">UserName :</Label>
						<Input
							className="loginForm"
							type="text"
							id="username"
							name="username"
							placeholder="Username"
							value={this.state.username}
							onChange={this.handleChange}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="password">Password :</Label>
						<Input
							className="loginForm"
							placeholder="password"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</FormGroup>
					<FormGroup>
						<Button color="primary" onClick={this.handleSubmit} type="submit">
							Login
						</Button>
					</FormGroup>
				</Form>
			</div>
		);
	}
}

export default LoginForm;
