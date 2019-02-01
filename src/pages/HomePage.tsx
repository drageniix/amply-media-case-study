import React from 'react';
import Particles from '../components/Particles';
import CurrentWeather from '../components/CurrentWeather';
import CallToAction from '../components/CallToAction';
import Brand from '../components/Brand';

const HomePage = () => {
    return (
        <div className="homePage">
            <Particles />
            <CurrentWeather />
            <CallToAction />
            <Brand />
        </div>
    );
};

export default HomePage;
