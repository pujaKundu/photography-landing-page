import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Nav from '../Nav/Nav';
import Services from '../Services/Services';
import Work from '../Work/Work';

const Home = () => {
    return (
        <div>
            <Nav/>
            <Banner />
            <About />
            <Services />
            <Work/>
        </div>
    );
};

export default Home;