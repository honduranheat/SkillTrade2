import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import axios from "axios";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      username: "pop"
    }
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios
      .post("/user/logout")
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null
          });
        }
      })
      .catch(error => {
        console.log("Logout error");
      });
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log("navbar render, props: ");
    console.log(this.props);

    return (
      <div>
        <header className="navbar App-header" id="nav-container">
          <div className="col-4">
            {loggedIn ? (
              <section className="navbar-section">
                <Link
                  to="#"
                  id="navText"
                  className="btn btn-link text-secondary"
                  onClick={this.logout}
                >
                  <span className="text-secondary">logout</span>
                </Link>
              </section>
            ) : (
              
              <section className="navbar-section">
                <Link to="/" className="btn btn-link text-secondary">
                  <span id="navText" className="text-secondary">home</span>
                </Link>
                <Link to="/login" className="btn btn-link text-secondary">
                  <span id="navText" className="text-secondary">login</span>
                </Link>
                <Link to="/signup" className="btn btn-link">
                  <span id="navText" className="text-secondary">sign up</span>
                </Link>
              </section>    
            )}
          </div>
          <section className="navbar-section rightside">
                <Link to="/browse" className="btn btn-link text-secondary">
                  <span id="navText" className="text-secondary">browse</span>
                </Link>
                <Link to="/topcont" className="btn btn-link text-secondary">
                  <span id="navText" className="text-secondary">top contributors</span>
                </Link>
                <Link to="/profile" className="btn btn-link">
                  <span id="navText" className="text-secondary">Profile</span>
                </Link>
                <Link to="/addListing" className="btn btn-link">
                  <span id="navText" className="text-secondary">add listing</span>
                </Link>
                <Link to="/messaging/" className="btn btn-link">
                  <span id="navText" className="text-secondary">Messaging</span>
                </Link>
              </section>
        </header>
      </div>
    );
  }
}

export default Navbar;
