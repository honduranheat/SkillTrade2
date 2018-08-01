import React from 'react';
import { Jumbotron, Button,  Form, FormGroup, Input, Card} from 'reactstrap';
import "./search.css";

const Search = (props) => {
    return (
        <section id="back">
            <Jumbotron id="jumboText">
                <Card id="contain">
                
                    <h2 className="text-center text-primary">
                        Welcome to Skill-Trade!
                    </h2>
                    <Form>
                        <FormGroup>
                            {/* <Label for="search" id="label">Search</Label> */}
                            <Input type="text" name="search" id="search" placeholder="Search Listings" large className = "text-center searchbar"/>
                        </FormGroup>
                        <Button id="btn">Submit</Button>
                        </Form>
                </Card>
            </Jumbotron>
        </section>
    );
};

export default Search;