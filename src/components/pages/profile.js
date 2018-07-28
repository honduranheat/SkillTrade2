import React, { Component } from "react";
import { Link } from "react-router-dom";
import Wrapper from '../Wrapper';
import {Card, Container} from 'reactstrap';

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
        <Wrapper>
          <Container>
            <Card className = "text-center">
            <h1>
              User Profile
            </h1>

        <form action="/action_page.php">
          <input type="text" name="firstname" value="Mickey" />

          <input type="text" name="lastname" value="Mouse" />

          <input type="submit" value="Submit" />
        </form>

        {/* {this.state.loggedIn && <Route path="/browse" component={Browse} />} */}
        {/* {console.log("/messaging/" + this.props.username)} */}
        <a> <Link to={`/messaging/${this.props.username}`}>Messaging</Link></a>
        </Card>
        </Container>
        </Wrapper>
      </div>
    );
  }
}

export default Profile;
