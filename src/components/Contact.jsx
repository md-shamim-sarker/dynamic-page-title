import React from 'react';
import useTitle from '../hooks/useTitle';
import Header from './Header';

const Contact = () => {
    useTitle('Contact');
    return (
        <div>
            <Header></Header>
            <h2>Contact page</h2>
        </div>
    );
};

export default Contact;