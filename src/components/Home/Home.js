import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Nav from '../Nav/Nav';

const Home = () => {
    return (
        <div>
            <Nav/>
            <Banner />
            <About/>
        </div>
    );
};

export default Home;