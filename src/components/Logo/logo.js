import React from 'react';
import "./logo.css";
import {Container} from 'reactstrap';

const Logo = (props) => {
    return (
        <Container id="logo">
            <img src={require('../Images/skilllogo1.png')} id="img" responsive/>
        </Container>
    );
};

export default Logo;