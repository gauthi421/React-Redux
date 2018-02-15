import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h1> {props.title} </h1>
            <h2> {props.message} </h2>
        </div>
    );
}

export default Header;
