import { Dispatch, ActionCreator, Action } from 'redux';
import ReactGA from 'react-ga';
import {
    SET_LOCATION,
    SET_ERRROS,
    SET_WEATHER,
    ACCEPT_TERMS,
    SIGNUP
} from '../constants';

import { CurrentWeatherAction, StringAction } from './common-types';

ReactGA.initialize('UA-133606683-1');

export const setErrors: ActionCreator<Action> = (errs: string | object) => ({
    type: SET_ERRROS,
    payload: errs
});

export const acceptTerms: ActionCreator<Action> = () => ({
    type: ACCEPT_TERMS
});

export const signUp: ActionCreator<Action> = () => {
    ReactGA.event({
        category: 'User',
        action: 'Created account'
    });

    return {
        type: SIGNUP,
        payload: true
    };
};

export const setLocation = (location: string) => (
    dispatch: Dispatch<StringAction>
) => {
    dispatch({
        type: SET_LOCATION,
        payload: location
    });
};

export const getCurrentWeather = () => (
    dispatch: Dispatch<CurrentWeatherAction>
) => {
    fetch(
        'https://j9l4zglte4.execute-api.us-east-1.amazonaws.com/api/ctl/weather'
    )
        .then(async res => {
            if (res.status === 200) {
                const json = (await res.json()).today;

                const weather = {
                    temperature: Math.round(json.temperature),
                    highTemperature: Math.round(json.highTemperature),
                    lowTemperature: Math.round(json.lowTemperature),
                    city: json.city,
                    state: json.state,
                    description: json.description,
                    iconLink: json.iconLink
                };

                dispatch({
                    type: SET_WEATHER,
                    payload: weather
                });
            }
        })
        .catch(err => console.log(err)); //No true server response error, just tries again
};
