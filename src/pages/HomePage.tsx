import React from 'react';
import Particles from '../components/Particles';
import CurrentWeather from '../components/CurrentWeather';
import CallToAction from '../components/CallToAction';

const HomePage = () => {
    return (
        <div className="homePage">
            <Particles />
            <CurrentWeather />
            <CallToAction />
        </div>
    );
};

export default HomePage;
