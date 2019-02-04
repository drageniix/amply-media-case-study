import React from 'react';
import Particles from '../components/Particles';
import CurrentWeather from '../components/CurrentWeather';
import Navigation from '../components/Navigation';
import Highlights from '../components/highlights';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div className="homePage">
            <Navigation />
            <Particles />
            <CurrentWeather />
            <Highlights />
            <Footer />
        </div>
    );
};

export default HomePage;
