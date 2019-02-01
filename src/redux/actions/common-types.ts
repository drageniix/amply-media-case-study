import { WeatherType } from '../reducers/state-types';

export type StringAction = {
    type: String;
    payload: String;
};

export type CurrentWeatherAction = {
    type: String;
    payload: WeatherType;
};
