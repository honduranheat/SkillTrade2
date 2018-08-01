import React, { Component } from "react";
import { Link } from "react-router-dom";

import API from "../utils/API";
import axios from "axios";
import ReactDOM from "react-dom";
import "./profile.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import API from '../utils/API';
import axios from 'axios';
import UserProfile from "./userprofile";
import {Card, CardBody, CardHeader, Container,  Button, Form, FormGroup, Label, Input, Popover, PopoverHeader, PopoverBody  } from 'reactstrap';

class Profile extends Component {
    
    state = {
        id: this.props.id,
        usr: this.props.username,
        profile: [],
        _id: "",
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        imageLink: "",
        birthdate: "",
        location: "",
        skills: "",
        karmaChips: "",
        dateJoined: ""
    };
    componentDidMount() {
      
        this.loadProfile();
    };
    
    getProfile(id, username){
      axios.get("/api/profiles/exist/" + id + "/" + username )
      .then(response => {
        console.log(response);
        this.setState({ profile: response.data, _id: response.data._id, username: response.data.username, firstName: response.data.firstName, lastName: response.data.lastName, email: response.data.email, imageLink: response.data.imageLink, birthdate: response.data.birthdate, location: response.data.location, skills: response.data.skills, karmaChips: response.data.karmaChips, dateJoined: response.data.dateJoined })
      })
      .catch(err => console.log(err));
    ;}
    loadProfile() {
        this.getProfile(this.state.id, this.state.usr);
    };
    
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };
    
    handleFormSubmit = event => {
        event.preventDefault();
        
          var profileData = {
            _id: this.state._id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            imageLink: this.state.imageLink,
            birthdate: this.state.birthdate,
            location: this.state.location,
            skills: this.state.skills
          };
          console.log(profileData);
          // let req = {
          //   url: "/api/profiles/" + this.state.id,
          //   method: 'PUT',
          //   data: profileData
          // };
          axios.put("/api/profiles/" + this.state.id, {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            imageLink: this.state.imageLink,
            birthdate: this.state.birthdate,
            location: this.state.location,
            skills: this.state.skills
          })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };
    console.log(profileData);
    // let req = {
    //   url: "/api/profiles/" + this.state.id,
    //   method: 'PUT',
    //   data: profileData
    // };
    axios
    .put("/api/profiles/" + this.state.id, {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        imageLink: this.state.imageLink,
        birthdate: this.state.birthdate,
        location: this.state.location,
        skills: this.state.skills
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
        <section>
          <Container>
            <Card>
              <CardHeader>
              <h1>{`★${this.state.average}`}</h1>
              <h1>_id: {this.props.id}</h1>
              </CardHeader>
              <CardBody>
              <Form>
                <FormGroup>
                  <Label for="firstName" className="form-text">
                    First Name
                  </Label>
                  <div className="">
                    <Input
                      type="title"
                      className="form-control text-center"
                      id="firstName"
                      name="firstName"
                      placeholder={this.state.firstName}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  <Label for="lastName" className="form-text">
                    Last Name
                  </Label>
                  <div className="">
                    <Input
                      type="title"
                      className="form-control text-center"
                      id="lastName"
                      name="lastName"
                      placeholder={this.state.lastName}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  <Label for="email" className="form-text">
                    Email?
                  </Label>
                  <div className="">
                    <Input
                      type="title"
                      className="form-control text-center"
                      id="email"
                      name="email"
                      placeholder={this.state.email}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  <Label for="imageLink" className="form-text">
                    Image Link?
                  </Label>
                  <div className="">
                    <Input
                      type="title"
                      className="form-control text-center"
                      id="imageLink"
                      name="imageLink"
                      placeholder={this.state.imageLink}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  <Label for="birthdate" className="form-text">
                    Birthday (mm/dd/yy)?
                  </Label>
                  <div className="">
                    <Input
                      type="title"
                      className="form-control text-center"
                      id="birthdate"
                      name="birthdate"
                      placeholder={this.state.birthdate}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  <Label for="location" className="form-text">
                    Where are you located?
                  </Label>
                  <div className="">
                    <Input
                      type="title"
                      className="form-control text-center"
                      id="location"
                      name="location"
                      placeholder={this.state.location}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  <Label for="skills" className="form-text">
                    Description of your Skills
                  </Label>
                  <div className="">
                    <Input type = "textarea"
                      className="form-control text-center"
                      id="skills"
                      name="skills"
                      placeholder={this.state.skills}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                <Button onClick={this.handleFormSubmit}>
                Update Profile
                </Button>
                </FormGroup>
                  {/* <Popover
                    id="Popover1"
                    placement="bottom"
                    isOpen={this.state.popoverOpen}
                    target="Popover1"
                    toggle={this.toggle}
                  >
                    <PopoverHeader>Thanks For The Review</PopoverHeader>
                    <PopoverBody>
                      You've earned a KarmaChip! (˚◒˚)
                    </PopoverBody>
                  </Popover> */}
                  </Form>
                  </CardBody>
                  </Card>
                  <Card>
                    <CardHeader>
                    <h1>Leave a Review</h1>
                    </CardHeader>
                    <CardBody id="reviewForm">
                    <Form>
                    <FormGroup>
                      
                      <Label for="exampleSelect">Rating</Label>
                      <Input
                        type="select"
                        name="rating"
                        id="exampleSelect"
                        onChange={this.handleInputChange}
                        value={this.state.rating}
                        // onClick={console.log(this.state.rating)}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>

    };
    
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };
    
    handleFormSubmit = event => {
        event.preventDefault();
        
          var profileData = {
            _id: this.state._id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            imageLink: this.state.imageLink,
            birthdate: this.state.birthdate,
            location: this.state.location,
            skills: this.state.skills
          };
          console.log(profileData);
          // let req = {
          //   url: "/api/profiles/" + this.state.id,
          //   method: 'PUT',
          //   data: profileData
          // };
          axios.put("/api/profiles/" + this.state.id, {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            imageLink: this.state.imageLink,
            birthdate: this.state.birthdate,
            location: this.state.location,
            skills: this.state.skills
          })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };
    
    render() {
        return (
            <section>
                <Container>
                    <Card body border color="danger">
                        <CardHeader>
                {/* <h1>_id: {this.props.id}</h1>
                <h1>karma chips : {this.state.karmaChips}</h1>
                <UserProfile karmaChips={this.state.karmaChips} imageLink={this.state.imageLink} firstName={this.state.firstName} lastName={this.state.lastName} skills={this.state.skills} location={this.state.location} dateJoined={this.state.dateJoined} />
                <form>
                    <div className= "form-group">
                        <label for="firstName" className="form-text"> */}
                </CardHeader>
                <CardBody>
                <Form>
                    <FormGroup>
                        <Label for="firstName" className="form-text">
                            First Name
                        </Label>
                        <div className="">
                            <Input type="title" className="form-control text-center" id="firstName" name="firstName" placeholder={this.state.firstName} onChange={this.handleInputChange}/>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName" className="form-text">
                            Last Name
                        </Label>
                        <div className="">
                            <Input type="title" className="form-control text-center" id="lastName" name="lastName" placeholder={this.state.lastName} onChange={this.handleInputChange}/>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email" className="form-text">
                            Email?
                        </Label>
                        <div className="">
                            <Input type="title" className="form-control text-center" id="email" name="email" placeholder={this.state.email} onChange={this.handleInputChange}/>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <Label for="imageLink" className="form-text">
                            Image Link?
                        </Label>
                        <div className="">
                            <Input type="title" className="form-control text-center" id="imageLink" name="imageLink" placeholder={this.state.imageLink} onChange={this.handleInputChange}/>
                        </div>
                    </FormGroup>

                    <Button
                      id="Popover1"
                      disabled={!this.state.message || !this.state.rating}
                      style={{ margin: "auto" }}
                      onClick={this.handleFormSubmit2}
                      // toggle={this.toggle}
                    >
                      Post
                    </Button>
                  </Form>
                  <div id="reviewDiv" />
                  <Link to={`/messaging/${this.props.username}`}>Messaging</Link>
                </CardBody>
              </Card>
            </Container>
          </section>
        )
      }
        
                export default Profile;         



                    <FormGroup>
                        <Label for="birthdate" className="form-text">
                            Birthday (mm/dd/yy)?
                        </Label>
                        <div className="">
                            <Input type="title" className="form-control text-center" id="birthdate" name="birthdate" placeholder={this.state.birthdate} onChange={this.handleInputChange}/>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <Label for="location" className="form-text">
                            Where are you located?
                        </Label>
                        <div className="">
                            <Input type="title" className="form-control text-center" id="location" name="location" placeholder={this.state.location} onChange={this.handleInputChange}/>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <Label for="skills" className="form-text">
                            Description of your Skills
                        </Label>
                        <div className="">
                            <Input type="textarea" className="form-control text-center" id="skills" name="skills" placeholder={this.state.skills} onChange={this.handleInputChange}/>
                        </div>
                    </FormGroup>
                    <button onClick={this.handleFormSubmit}>Update Profile</button>
                </Form>
                <Link to={`/messaging/${this.props.username}`}>
                    Messages
                </Link>
                       {/* {this.state.loggedIn && <Route path="/browse" component={Browse} />} */}
                       {/* {console.log("/messaging/" + this.props.username)} */}
                </CardBody> 
            </Card>
        </Container>
    </section>
        );
    }
};
export default Profile;

