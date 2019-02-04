import { WeatherType, DayType } from '../reducers/state-types';

export type StringAction = {
    type: String;
    payload: String;
};

export type CurrentWeatherAction = {
    type: String;
    payload: { weather: WeatherType; week: DayType[] };
};
