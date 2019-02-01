import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentWeather } from '../redux/actions/common';

export class CurrentWeather extends Component<any, any> {
    static propTypes = {
        weather: PropTypes.object,
        getCurrentWeather: PropTypes.func
    };

    state = {
        loaded: false
    };

    static getDerivedStateFromProps(nextProps: any, prevState: any) {
        if (!nextProps.weather) {
            nextProps.getCurrentWeather();
        } else if (!prevState.loaded) {
            return { loaded: true };
        }
        return null;
    }

    render() {
        const city = (this.props.weather && this.props.weather.city) || 'City';
        const state =
            (this.props.weather && this.props.weather.state) || 'State';
        const temperature =
            (this.props.weather && this.props.weather.temperature) || 0;
        const highTemperature =
            (this.props.weather && this.props.weather.highTemperature) || 0;
        const lowTemperature =
            (this.props.weather && this.props.weather.lowTemperature) || 0;
        const description =
            (this.props.weather && this.props.weather.description) ||
            'Loading Description';
        const iconLink =
            (this.props.weather && this.props.weather.iconLink) || '';

        return (
            <section className="weather">
                <h4 className="weather__heading">
                    <span className="weather__heading--span">
                        {city}, {state}
                    </span>
                </h4>
                <div className="weather__current">
                    <img className="weather__current--icon" src={iconLink} />
                    <div className="weather__current--content">
                        <p className="weather__current--header">Right Now</p>
                        <p className="weather__current--description">
                            {description}
                        </p>
                    </div>
                    <p className="weather__current--temperature">
                        {temperature}°F
                    </p>
                </div>
                <div className="weather__forecast">
                    <span>High: {highTemperature}°F</span>
                    <span>Low: {lowTemperature}°F</span>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state: any) => ({
    weather: state.common.weather
});

const mapDispatchToProps = {
    getCurrentWeather
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrentWeather);
