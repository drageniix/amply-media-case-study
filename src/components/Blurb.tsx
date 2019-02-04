import React from 'react';

const Blurb = () => {
    return (
        <div className="blurb">
            <img
                src="https://media.pixcove.com/X/7/9/Winter-Season-Parking-Cars-Free-Image-Snow-Minneap-6960.jpg"
                className="blurb__image"
            />
            <h1 className="blurb__title">Breaking Weather</h1>
            <p>
                Snow to overspread central US at midweek. "The heaviest snow may
                fall in parts of Iowa, Minnesota, Wisconsin, and Northern
                Michigan Thursday and Friday."{' '}
                <a href="#">Find out how to prepare!</a>
            </p>
        </div>
    );
};

export default Blurb;
