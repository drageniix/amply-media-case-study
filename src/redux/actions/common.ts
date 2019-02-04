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
import { DayType } from '../reducers/state-types';

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
                const json = await res.json();

                const today = json.today;
                const weather = {
                    temperature: Math.round(today.temperature),
                    highTemperature: Math.round(today.highTemperature),
                    lowTemperature: Math.round(today.lowTemperature),
                    city: today.city,
                    state: today.state,
                    description: today.description,
                    iconLink: today.iconLink
                };

                const week = json.daily.slice(0, 5).map((day: any) => ({
                    dayOfWeek: day.weekday.substring(0, 3),
                    temp: Math.round(day.skyInfo),
                    description: day.description,
                    iconLink: day.iconLink
                }));

                dispatch({
                    type: SET_WEATHER,
                    payload: { weather, week }
                });
            }
        })
        .catch(err => console.log(err)); //No true server response error, just tries again
};
