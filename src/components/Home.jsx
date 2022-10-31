import React from 'react';
import useTitle from '../hooks/useTitle';
import Header from './Header';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Header></Header>
            <h2>Home page</h2>
        </div>
    );
};

export default Home;