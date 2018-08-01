import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, CardBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import API from '../utils/API';

class singleListing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			messageProps: [],
			listing: {}
		};
	}
	arr = [];

	state = {
		messages: [],
		messageBody: [],
		receiver: '',
		body: ''
	};

	componentDidMount() {
		console.log('single listing hit');
		API.getUser(this.props.username);
		API.checkListing(this.props.match.params.id)
			.then((res) => this.setState({ listing: res.data }))
			.catch((err) => console.log(err));
	}
	getUser = (username) => {
		API.getUser(username).then((res) => {
			console.log(res);
			this.setState({
				messages: res.data.message
			});
			this.state.messages.map((id) => {
				this.getMessageBody(id);
				return id;
			});
			console.log(this.state.messageBody);
			// this.getMessageBody(this.state.messages[0])
		});
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		console.log(this.props.username + 'LINE 109!!!!!!!!!!!!!!!!!!');
		if (this.state.receiver && this.state.body) {
			API.sendMessage({
				receiver: this.state.receiver,
				body: this.state.body,
				sender: this.props.username
			}).catch((err) => console.log(err));
			console.log('here 133');
			if (this.state.receiver === this.props.username) {
				console.log('135 Receiver is the same');
			} else {
				console.log('135 Receiver isnt same');
			}
			// this.getUser(this.props.username)
		}
	};

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
						<h1>Description</h1>
						<p>{this.state.listing.description}</p>
					</CardBody>
				</Card>

				<div>
					<Card id="mess" className="text-center" body outline color="danger">
						<CardBody>
							<h1>Send Message</h1>
							<Form>
								<FormGroup>
									<Label for="exampleText">Message</Label>
									<Input
										type="textarea"
										name="body"
										id="exampleText"
										onChange={this.handleInputChange}
										value={this.state.body}
										bsSize="lg"
									/>
								</FormGroup>
								<FormGroup>
									<Label for="exampleEmail">User</Label>
									<Input
										type="textarea"
										name="receiver"
										id="exampleEmail"
										onChange={this.handleInputChange}
										value={this.state.receiver}
										bsSize="lg"
									/>
								</FormGroup>
								<Button
									disabled={!(this.state.receiver && this.state.body)}
									onClick={this.handleFormSubmit}
									color="primary"
									size="lg"
									block
									style={{ margin: 'auto' }}
								>
									Send Message
								</Button>
								<h1 className="display-1">Inbox</h1>
							</Form>
						</CardBody>
					</Card>
				</div>

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

// getUser = username => {
//   API.getUser(username).then(res => {
//     console.log(res);
//     this.setState({
//       messages: res.data.message
//     });
//     this.state.messages.map(id => {
//       this.getMessageBody(id);
//       return id;
//     });
//     console.log(this.state.messageBody);
//     // this.getMessageBody(this.state.messages[0])
//   });
// };

// renderMessages = message => {
//   var para = document.createElement("p");
//   var node = document.createTextNode(message);
//   para.appendChild(node);
//   var element = document.getElementById("messageDiv");
//   element.appendChild(para);
// };
// getMessageBody = id => {
//   console.log(id);
//   API.getMessageBody(id).then(res => {
//     this.state.messageProps.push(res);
//   });
// };
// displayMessages = event => {
//   event.preventDefault();
// this.state.messageBody.map(message => {
//     return (
//       <MessageListItem id="center">
//         <strong>
//           <h1>{message.data[0].body}</h1>
//         </strong>
//       </MessageListItem>
//     );
//   });
// };

// removeMessage = id => {
//   console.log(id + "LINE 84!!!!!!!!!!!!!!!!!!!!!!!!1")
//   document.getElementById(id).remove();
// }
// deleteFromProps = id => {
//   console.log(this.state.messageProps[0].data);
//   // var mongoose = require("mongoose");
//   // id = ObjectId(id).str;
//   console.log(id)
//   for (var i = 0; i < this.state.messageProps.length; i++) {
//     console.log(this.state.messageProps[i].data[0]._id + "HEEEERRRRE))))))))))))))))))))))))))");
//     if (this.state.messageProps[i].data[0]._id == id) {
//       console.log("118");
//       this.state.messageProps.splice(i, 1)
//       console.log(this.state.messageProps)
//       this.provideMessagesB()
//       break;
//     } else {console.log("120"); i++};
//   }
// };
// deleteMessage = (username, id) => {
//   console.log(id);
//   API.deleteMessage({
//     username: username,
//     id: id
//   })
//   this.deleteFromProps(id);

//   // this.state.messageProps.map(message => {
//   //   if (message.data[0]._id === id) {
//   //     console.log(id);
//   // }
//   // })

//   // this.state.messageProps.splice(_.indexOf(this.state.messageProps, _.findWhere(this.state.messageProps, { id : id})), 1);
// };
// handleFormSubmit = event => {
//   event.preventDefault();
//   console.log(this.props.username + "LINE 109!!!!!!!!!!!!!!!!!!");
// if (this.state.receiver && this.state.body) {
//     API.sendMessage({
//       receiver: this.state.receiver,
//       body: this.state.body,
//       sender: this.props.username
//     })
//       // .then(res => {
//       //   console.log(res)

//         // if(res === this.props.username) {
//         //   console.log("Same User")
//         // }
//         // else {
//         //   console.log(
//         //   "different user"
//         //   )
//         // }
//         // console.log(res);
//         // this.componentDidMount()

//       // .then(res => this.loadBooks())
//       .catch(err => console.log(err));
//       console.log("here 133")
//       if(this.state.receiver === this.props.username) {
//         console.log("135 Receiver is the same")
//       }
//       else {
//         console.log("135 Receiver isnt same")

//       }
//       // this.getUser(this.props.username)
//   }

// };
// sayHi = event => {
//   event.preventDefault();
//   console.log(this.state.body);
// };
// handleInputChange = event => {
//   const { name, value } = event.target;
//   this.setState({
//     [name]: value
//   });
// };
// provideMessagesB = () => {
//   console.log(this.state.messageProps);
//   let data = this.state.messageProps;
//   const listItems = data.map(d => (
//     // <li receiver={d.data.}
//     <div class="messageClass" id={d.data[0]._id} key={d.data[0]._id}>
//       <li>From:{d.data[0].sender}</li>
//       <li>Body:{d.data[0].body}</li>
//       <DeleteButton
//         onClick={() => this.deleteMessage(this.props.username, d.data[0]._id)}
//         color="primary" bsSize="lg" block >
//         Delete
//       </DeleteButton>
//       <div>
//         <Button color="primary" bsSize="lg" block id="toggler" style={{ marginBottom: "1rem", margin: 'auto'}}>
//           Reply
//         </Button>
//         <UncontrolledCollapse toggler="#toggler">
//           <Card body outline color="warning">
//             <CardBody>
//               <Form>
//                 <FormGroup>
//                   <Label for="exampleText">Reply</Label>
//                   <Input
//                     type="textarea"
//                     name="body"
//                     id="exampleText"
//                     onChange={this.handleInputChange}
//                     value={this.state.body}
//                     onClick={this.setState({ receiver: d.data[0].sender })}
//                     bsSize="lg"
//                   />
//                   <Button
//                     // disabled={!(this.state.body)}
//                     style={{margin: 'auto'}}
//                     onClick={this.handleFormSubmit}
//                   >
//                     Send Message
//                   </Button>
//                 </FormGroup>
//               </Form>
//             </CardBody>
//           </Card>
//         </UncontrolledCollapse>
//       </div>
//     </div>
//   ));
//   console.log(listItems);
//   ReactDOM.render(listItems, document.getElementById("messageDiv"));
//   this.forceUpdate();
//   // return listItems;
// };
// provideMessages = () => {
//   window.setTimeout(this.provideMessagesB, 4000);
// };
// respond = event => {
//   event.preventDefault();
//   console.log(this.state.messageBody);

//   // alert(delButton)
// };
