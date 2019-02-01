import { commonStateType } from '../reducers/state-types';

export const getTemperatureColor = ({
    weather: { temperature }
}: commonStateType) => {
    if (temperature <= 50) {
        return ' cold';
    } else if (temperature <= 70) {
        return ' cool';
    } else {
        return ' warm';
    }
};
