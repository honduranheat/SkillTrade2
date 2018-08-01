import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import axios from "axios";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap"; // https://reactstrap.github.io/components/navbar/

class Navbar2 extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      username: "pop",
      isOpen: false
    };
    this.logout = this.logout.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  // constructor(props) {
  //   super(props);

  //   this.toggleNavbar = this.toggleNavbar.bind(this);
  //   this.state = {
  //     collapsed: true
  //   };
  // }

  // toggleNavbar() {
  //   this.setState({
  //     collapsed: !this.state.collapsed
  //   });
  // }

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
      <section>
        {/* <Navbar color="dark" className="text-success text-center clearfix" dark>

          <Nav navbar>
            {loggedIn ? (
              <section className="float-left">
                <NavItem>
                  <Link to="#" id="navText" onClick={this.logout}>
                    <span className="text-success">Logout</span>
                  </Link>
                </NavItem>
              </section>
            ) : (
              <section className="float-left">
                <NavItem>
                  <Link to="/">
                    <span id="navText" className="text-success">
                      Skill-Trade Home
                    </span>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/login">
                    <span id="navText" className="text-success">
                      Login
                    </span>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/signup">
                    <span id="navText" className="text-success">
                      Sign Up
                    </span>
                  </Link>
                </NavItem>
              </section>
            )}
            <section className="float-right">
              <NavItem>
                <Link to="/browse">
                  <span id="navText" className="text-success">
                    Browse
                  </span>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/topcont">
                  <span id="navText" className="text-success">
                    Top Contributors
                  </span>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/profile">
                  <span id="navText" className="text-success">
                    Profile
                  </span>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/addListing">
                  <span id="navText" className="text-success">
                    Add a New Listing
                  </span>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/messaging/">
                  <span id="navText" className="text-success">
                    Messages
                  </span>
                </Link>
              </NavItem>
            </section>
          </Nav>
          {/* </Collapse> */}
        {/* </Container> */}
        {/* </Navbar> */}
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/" id="navText">
            Skill Trade
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {loggedIn ? (
                  <section className="float-left">
                    <NavItem>
                      <NavLink href="#" id="navText" onClick={this.logout}>
                        {/* <span className="text-success"> */}
                        Logout
                        {/* </span> */}
                      </NavLink>
                    </NavItem>
                  </section>
                ) : (
                  <section>
                    <section className="float-left">
                      <NavItem>
                        <NavLink href="/login" id="navText">
                          {/* <span id="navText" className="text-success"> */}
                            Login
                          {/* </span> */}
                        </NavLink>
                      </NavItem>
                    </section>
                    <section className="float-right">
                      <NavItem>
                        <NavLink href="/signup" id="navText">
                          {/* <span id="navText" className="text-success"> */}
                            Sign Up
                          {/* </span> */}
                        </NavLink>
                      </NavItem>
                    </section>
                  </section>
                )}
                <UncontrolledDropdown nav inNavbar id="drop">
                  <DropdownToggle nav caret>
                    <span id="navText">
                      Options
                    </span>
                  </DropdownToggle>
                  <DropdownMenu right>
                  <DropdownItem>
                  <NavItem>
                  <NavLink target="_blank" id= "navText" href="https://github.com/groupProject333/SkillTrade2" >
                    GitHub
                  </NavLink>
                </NavItem>
                </DropdownItem>
                <DropdownItem divider />
                    <DropdownItem>
                      <NavItem>
                        <NavLink href="/browse" id="navText">
                          {/* <span id="navText"> */}
                            Browse
                          {/* </span> */}
                        </NavLink>
                      </NavItem>
                    </DropdownItem>
                    <DropdownItem>
                      <NavItem>
                        <NavLink href="/profile" id="navText">
                          {/* <span id="navText"> */}
                            Profile
                          {/* </span> */}
                        </NavLink>
                      </NavItem>
                    </DropdownItem>
                    <DropdownItem>
                      <NavItem>
                        <NavLink href="/addListing" id="navText">
                          {/* <span id="navText"> */}
                            Add a New Listing
                          {/* </span> */}
                        </NavLink>
                      </NavItem>
                    </DropdownItem>
                    <DropdownItem>
                      <NavItem>
                        <NavLink href="/messaging/" id="navText">
                          {/* <span id="navText"> */}
                            Messages
                          {/* </span> */}
                        </NavLink>
                      </NavItem>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </section>

      // <div>
      //   <header>
      //   <Navbar>
      //   <Nav className = "cf" navbar>
      //   <Container id="contain">
      //         {loggedIn ? (
      //         <section className="float-left">
      //         <NavItem>
      //           <NavLink
      //             to="#"
      //             id="navText"
      //             className="text-secondary"
      //             onClick={this.logout}
      //           >
      //             <span className="text-secondary">
      //             Logout
      //             </span>
      //           </NavLink>
      //           </NavItem>
      //           <NavbarBrand>
      //             Skill-Trade App
      //           </NavbarBrand>
      //         </section>
      //       ) : (
      //         <section className="float-left">
      //         <NavItem>
      //           <Link to="/">
      //             <span id="navText">
      //             Home
      //             </span>
      //           </Link>
      //         </NavItem>
      //         <NavItem>
      //           <Link to="/login">
      //             <span id="navText">
      //             Login
      //             </span>
      //           </Link>
      //         </NavItem>
      //         <NavItem>
      //           <Link to="/signup">
      //             <span id="navText">Sign Up</span>
      //           </Link>
      //           </NavItem>
      //         </section>
      //       )}
      //     <section className="float-right">
      //         <NavItem>
      //           <Link to="/browse">
      //             <span id="navText" >Browse</span>
      //           </Link>
      //           </NavItem>
      //           <NavItem>
      //           <Link to="/topcont" >
      //             <span id="navText" >Top Contributors</span>
      //           </Link>
      //           </NavItem>
      //           <NavItem>
      //           <Link to="/profile" >
      //             <span id="navText" >Profile</span>
      //           </Link>
      //           </NavItem>
      //           <NavItem>
      //           <Link to="/addListing">
      //             <span id="navText" >Add a New Listing</span>
      //           </Link>
      //           </NavItem>
      //             <NavItem>
      //           <Link to="/messaging/" >
      //             <span id="navText">Messages</span>
      //           </Link>
      //           </NavItem>
      //         </section>
      //       </Container>
      //       </Nav>
      //       </Navbar>
      //   </header>
      // </div>
    );
  }
}

export default Navbar2;
