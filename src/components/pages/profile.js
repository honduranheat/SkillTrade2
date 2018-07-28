import React, { Component } from "react";
import { Link } from "react-router-dom";
// import API from '../utils/API';
import axios from 'axios';
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
        skills: ""
    };

    // getID() {
    //   const userID = props =>  (
    //     props.id
    //   )
    //   setState({
    //     _id: userID
    //   });
    // };

    componentDidMount() {
      // this.getID();
        this.loadProfile();
    };
    

    getProfile(id){
      axios.get("/api/profiles/exist/" + id)
      .then(response => {
        console.log(response);
        this.setState({ profile: response.data, _id: response.data._id, firstName: response.data.firstName, lastName: response.data.lastName, email: response.data.email, imageLink: response.data.imageLink, birthdate: response.data.birthdate, location: response.data.location, skills: response.data.skills })
      })
      .catch(err => console.log(err));
    ;}

    loadProfile() {
        this.getProfile(this.state.id);
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
			<section className = "card container text-center mx-auto">
                <div className ="card-body">
                <h1>_id: {this.props.id}</h1>
                <form>
                    <div className= "form-group">
                        <label for="firstName" className="form-text">
                            First Name
                        </label>
                        <div className="">
                            <input type="title" className="form-control text-center" id="firstName" name="firstName" placeholder={this.state.firstName} onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    <div className= "form-group">
                        <label for="lastName" className="form-text">
                            Last Name
                        </label>
                        <div className="">
                            <input type="title" className="form-control text-center" id="lastName" name="lastName" placeholder={this.state.lastName} onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    <div className= "form-group">
                        <label for="email" className="form-text">
                            Email?
                        </label>
                        <div className="">
                            <input type="title" className="form-control text-center" id="email" name="email" placeholder={this.state.email} onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    <div className= "form-group">
                        <label for="imageLink" className="form-text">
                            Image Link?
                        </label>
                        <div className="">
                            <input type="title" className="form-control text-center" id="imageLink" name="imageLink" placeholder={this.state.imageLink} onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    <div className= "form-group">
                        <label for="birthdate" className="form-text">
                            Birthday (mm/dd/yy)?
                        </label>
                        <div className="">
                            <input type="title" className="form-control text-center" id="birthdate" name="birthdate" placeholder={this.state.birthdate} onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    <div className= "form-group">
                        <label for="location" className="form-text">
                            Where are you located?
                        </label>
                        <div className="">
                            <input type="title" className="form-control text-center" id="location" name="location" placeholder={this.state.location} onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    <div className= "form-group">
                        <label for="skills" className="form-text">
                            Description of your Skills
                        </label>
                        <div className="">
                            <textarea className="form-control text-center" id="skills" name="skills" placeholder={this.state.skills} onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    <button onClick={this.handleFormSubmit}>Update Profile</button>
                </form>

                 <Link to={`/messaging/${this.props.username}`}>Messaging</Link>

                </div>
			</section>
		);
	}
};


export default Profile;
