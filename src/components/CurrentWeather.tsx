import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentWeather } from '../redux/actions/common';
import { getTemperatureColor } from '../redux/selectors/common';
import { fullStateType, WeatherType } from '../redux/reducers/state-types';

export class CurrentWeather extends Component<
    {
        weather: WeatherType;
        color: String;
        getCurrentWeather: () => void;
    },
    {
        loaded: Boolean;
    }
> {
    state = {
        loaded: false
    };

    static getDerivedStateFromProps(nextProps: any, prevState: any) {
        if (!nextProps.weather.iconLink) {
            nextProps.getCurrentWeather();
        } else if (!prevState.loaded) {
            return { loaded: true };
        }
        return null;
    }

    render() {
        const {
            city,
            state,
            temperature,
            highTemperature,
            lowTemperature,
            description,
            iconLink
        } = this.props.weather;

        return (
            <section className="weather">
                <h4 className="weather-location">
                    <span
                        className={'weather-location--span' + this.props.color}>
                        {city}, {state}
                    </span>
                </h4>
                <div className="weather-current">
                    <img className="weather-current--icon" src={iconLink} />
                    <div className="weather-current--content">
                        <p className="weather-current--header">Right Now</p>
                        <p className="weather-current--description">
                            {description}
                        </p>
                    </div>
                    <p className="weather-current--temperature">
                        {temperature}°F
                    </p>
                </div>
                <div className="weather-forecast">
                    <span className="weather-forecast__type">High: </span>
                    <span className="weather-forecast__temp">
                        {highTemperature}°F
                    </span>
                    <span className="weather-forecast__type">Low: </span>
                    <span className="weather-forecast__temp">
                        {lowTemperature}°F
                    </span>
                </div>
            </section>
        );
    }
}

const mapStateToProps = ({ common }: fullStateType) => ({
    weather: common.weather,
    color: getTemperatureColor(common) + '--reverse'
});

const mapDispatchToProps = {
    getCurrentWeather
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrentWeather);
