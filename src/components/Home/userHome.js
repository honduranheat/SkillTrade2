import React, { Component } from "react";
import Jumbo from "../Jumbo";
import DemoCarousel from "../Carousel";
import Logo from "../Logo";

class userHome extends Component {

// if (loggedIn) {
render() {
    return (
    <div>
        <Logo/>
        <DemoCarousel/>
        <Jumbo/>
    </div>
    );
  }
// }
}

export default userHome;
