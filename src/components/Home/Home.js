import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Nav from '../Nav/Nav';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Work from '../Work/Work';

const Home = () => {
    return (
        <div>
            <Nav/>
            <Banner />
            <About />
            <Services />
            <Work />
            <Reviews/>
        </div>
    );
};

export default Home;