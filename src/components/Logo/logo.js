import React from 'react';
import "./logo.css";

const Logo = (props) => {
    return (
        <section id="logo">
            <img src={require('../Images/skill.png')} id="img"/>
        </section>
    );
};

export default Logo;