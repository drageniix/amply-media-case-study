import ReactGA from 'react-ga';
ReactGA.initialize('UA-133606683-1');

import {
    SET_LOCATION,
    SET_ERRROS,
    SET_MODAL,
    SET_WEATHER,
    ACCEPT_TERMS,
    SIGNUP
} from '../constants';

export const setModal = modal => ({
    type: SET_MODAL,
    payload: modal
});

export const setErrors = error => ({
    type: SET_ERRROS,
    payload: error
});

export const acceptTerms = () => ({
    type: ACCEPT_TERMS
});

export const signUp = () => {
    ReactGA.event({
        category: 'User',
        action: 'Created account'
    });

    return {
        type: SIGNUP,
        payload: true
    };
};

export const setLocation = location => dispatch => {
    dispatch({
        type: SET_LOCATION,
        payload: location
    });
};

export const getCurrentWeather = () => dispatch =>
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
            } else setErrors('Weather failed to load.');
        })
        .catch(err => dispatch(setErrors(err)));
