import React, { Component } from "react";
import { Link } from "react-router-dom";

class Profile extends Component {

  //   // When this component mounts, grab the book with the _id of this.props.match.params.id
  //   // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  //   componentDidMount() {
  //     API.getBook(this.props.match.params.id)
  //       .then(res => this.setState({ book: res.data }))
  //       .catch(err => console.log(err));
  //   }


  render() {
    return (
      <div>
        <p>User Profile</p>

        <form action="/action_page.php">
          <input type="text" name="firstname" value="Mickey" />

          <input type="text" name="lastname" value="Mouse" />

          <input type="submit" value="Submit" />
        </form>

        {/* {this.state.loggedIn && <Route path="/browse" component={Browse} />} */}
        {/* {console.log("/messaging/" + this.props.username)} */}
        <a> <Link to={`/messaging/${this.props.username}`}>Messaging</Link></a>
      </div>
    );
  }
}

export default Profile;
