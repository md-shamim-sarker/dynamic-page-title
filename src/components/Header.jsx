import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem'
        }}>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
        </div>
    );
};

export default Header;