import React from 'react';
import useTitle from '../hooks/useTitle';
import Header from './Header';

const About = () => {
    useTitle('About');
    return (
        <div>
            <Header></Header>
            <h2>About page</h2>
        </div>
    );
};

export default About;