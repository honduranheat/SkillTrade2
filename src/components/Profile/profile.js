import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import axios from "axios";
import ReactDOM from "react-dom";

import Wrapper from "../Wrapper";
import { Card, Container } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class Profile extends Component {
  state = {
    id: this.props.id,
    profile: [],
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    imageLink: "",
    birthdate: "",
    location: "",
    skills: "",
    reivews: [],
    reviewer: "",
    rating: "",
    message: "",
    reviewPoints: [],
    average: ""
  };

  componentDidMount() {
    // this.getID();
    this.loadProfile();
  }

  getUser = username => {
    API.getUser(username).then(res => {
      console.log(res);
      this.setState({
        reviews: res.data.reviews
      });
      this.state.reviews.map(id => {
        this.getReviewBody(id);
        return id;
      });
      console.log(this.state.reviews);
    });
  };
  getReviewAverage = () => {
      var total = 0;
      for (var i = 0; i < this.state.reviewPoints.length; i++) {
        var num = parseInt(this.state.reviewPoints[i]);
        if (num !== null)
        {
        total = total + num;
        console.log(total)
        }
        if (i == this.state.reviewPoints.length -1) {
            var average = (total / this.state.reviewPoints.length -1)
            this.setState({
                average: average
            })
            console.log(this.state.average)
        }
      }
      
  }
  getReviews = id => {
    console.log(id);
    API.getReviewBody(id).then(res => {
        console.log(res.data[0])
        var reviewItems = res.data.map(review => (
            // console.log(review)
            <div className="reviewClass" id={review._id} key={review._id}>
        <p>From:{review.reviewer}</p>
        <p>Rating:{review.rating}</p>
        <p>Message:{review.message}</p>
        {this.state.reviewPoints.push(review.rating)}
        </div>
        ))
        this.getReviewAverage()
        ReactDOM.render(reviewItems, document.getElementById("reviewDiv"));

  });
}
  getProfile = id => {
    axios
      .get("/api/profiles/exist/" + id)
      .then(response => {
        console.log(response);
        this.setState({
          profile: response.data,
          _id: response.data._id,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          imageLink: response.data.imageLink,
          birthdate: response.data.birthdate,
          location: response.data.location,
          skills: response.data.skills,
          reviews: response.data.reviews
        })
        console.log(this.state._id + " line 66")
        this.getReviews(this.state._id);
      })
      .catch(err => console.log(err));
      
    }

  loadProfile() {
    this.getProfile(this.state.id);
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  saveReview = reviewData => {
      API.saveReview(reviewData).then(res => {
          console.log(res + "line 97")
          
      })
  }
  handleFormSubmit2 = event => {
    event.preventDefault();
    console.log("here reivew");
    var reviewData = {
      reviewer: this.props.username,
      rating: this.state.rating,
      message: this.state.message,
      receiverId: this.state._id,
    };
    this.saveReview(reviewData);
    // axios.put("/api/profiles/" + this.state.id, {

    // })
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
            <h1>{`★${this.state.average}`}</h1>
            <h1>_id: {this.props.id}</h1>
            <form>
              <div className="form-group">
                <label for="firstName" className="form-text">
                  First Name
                </label>
                <div className="">
                  <input
                    type="title"
                    className="form-control text-center"
                    id="firstName"
                    name="firstName"
                    placeholder={this.state.firstName}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="lastName" className="form-text">
                  Last Name
                </label>
                <div className="">
                  <input
                    type="title"
                    className="form-control text-center"
                    id="lastName"
                    name="lastName"
                    placeholder={this.state.lastName}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="email" className="form-text">
                  Email?
                </label>
                <div className="">
                  <input
                    type="title"
                    className="form-control text-center"
                    id="email"
                    name="email"
                    placeholder={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="imageLink" className="form-text">
                  Image Link?
                </label>
                <div className="">
                  <input
                    type="title"
                    className="form-control text-center"
                    id="imageLink"
                    name="imageLink"
                    placeholder={this.state.imageLink}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="birthdate" className="form-text">
                  Birthday (mm/dd/yy)?
                </label>
                <div className="">
                  <input
                    type="title"
                    className="form-control text-center"
                    id="birthdate"
                    name="birthdate"
                    placeholder={this.state.birthdate}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="location" className="form-text">
                  Where are you located?
                </label>
                <div className="">
                  <input
                    type="title"
                    className="form-control text-center"
                    id="location"
                    name="location"
                    placeholder={this.state.location}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="skills" className="form-text">
                  Description of your Skills
                </label>
                <div className="">
                  <textarea
                    className="form-control text-center"
                    id="skills"
                    name="skills"
                    placeholder={this.state.skills}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <button onClick={this.handleFormSubmit}>Update Profile</button>
            </form>
            
            <Container>
              <Form>
                <FormGroup>
                  <h1>Leave a Review</h1>
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
                  </FormGroup>
                  <FormGroup>
                  <Label for="exampleText">Review</Label>
                  <Input
                    type="textarea"
                    name="message"
                    id="exampleText"
                    onChange={this.handleInputChange}
                    value={this.state.message}
                  />
                  </FormGroup>
                <Button
                  // disabled={!(this.state.body)}
                  style={{ margin: "auto" }}
                  onClick={this.handleFormSubmit2}
                >
                  Post
                </Button>

              </Form>
              <div id= "reviewDiv"></div>
            </Container>
            <Link to={`/messaging/${this.props.username}`}>Messaging</Link>
            {/* {this.state.loggedIn && <Route path="/browse" component={Browse} />} */}
            {/* {console.log("/messaging/" + this.props.username)} */}
            <Link to={`/messaging/${this.props.username}`}>Messaging</Link>
          </Card>
        </Container>
      </section>
    );
  }
}

export default Profile;
