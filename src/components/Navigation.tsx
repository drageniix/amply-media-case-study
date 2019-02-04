import React from 'react';

export const Brand = () => {
    return (
        <div className="navigation">
            <div className="brand">
                <img
                    className={'brand__icon'}
                    src="https://image.flaticon.com/icons/svg/1113/1113756.svg"
                />
                <p className="brand__title">Overcast</p>
            </div>
            <div className="links">
                <a href="#">Forecast</a>
                <a href="#">Alerts</a>
                <a href="#">Login</a>
            </div>
        </div>
    );
};

export default Brand;
