import React from 'react';
import { Jumbotron, Button, Container, Row, Col, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import "./search.css";

const Search = (props) => {
    return (
        <section id="back">
            <Jumbotron id="jumboText">
                <Container>
                
                    <h1 className="display-2 text-center text-primary">
                        Welcome to Skill-Trade!
                    </h1>
                    <Form>
                        <FormGroup>
                            <Label for="search">Search</Label>
                            <Input type="text" name="search" id="search" placeholder="Search Listings" />
                        </FormGroup>
                        <Button id="btn">Submit</Button>
                        </Form>
                </Container>
            </Jumbotron>
        </section>
    );
};

export default Search;