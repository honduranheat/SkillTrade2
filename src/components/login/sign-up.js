import React, { Component } from 'react'
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Card, CardBody, CardHeader } from 'reactstrap';

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			// confirmPassword: '',

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


render() {
	return (
		<Container>
		<Card className="SignupForm">
		<CardHeader>
			<h4 className="text-center">
				Sign up
			</h4>
			</CardHeader>
			<CardBody>
			<Form>
				<FormGroup>
					<div>
						<Label htmlFor="username">
						Username
						</Label>
					</div>
					<div>
						<Input className="form-input"
							type="text"
							id="username"
							name="username"
							placeholder="Username"
							value={this.state.username}
							onChange={this.handleChange}
						/>
					</div>
				</FormGroup>
				<FormGroup>
					<div>
						<Label className="form-label" htmlFor="password">
						Password : 
						</Label>
					</div>
					<div>
						<Input
							placeholder="password"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</div>
				</FormGroup>
				<FormGroup>
					<div className="col-7"></div>
					<Button
						className="btn"
						onClick={this.handleSubmit}
						type="submit">
						Sign up
					</Button>
				</FormGroup>
			</Form>
			</CardBody>
			</Card>
			</Container>
	)
}
}

export default Signup
