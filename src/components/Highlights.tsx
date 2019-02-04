import React from 'react';
import CallToAction from './CallToAction';
import Weekly from './Weekly';
import Blurb from './Blurb';

export const Highlights = () => (
    <div className="highlights">
        <Weekly />
        <CallToAction />
        <Blurb />
    </div>
);

export default Highlights;
