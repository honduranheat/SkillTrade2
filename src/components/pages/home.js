import React, { Component } from "react";
import Jumbo from "../Jumbo";

class Home extends Component {
  
// if (loggedIn) {
  render() {
    return (
      <div>
          <Jumbo/>
        <p>HOME PAGE (not logged in)</p>
      </div>
    );
  }
// }
}

export default Home;
