import { SET_LOCATION, SET_WEATHER, ACCEPT_TERMS, SIGNUP } from '../constants';
import { commonStateType } from './state-types';

const initialState: commonStateType = {
    signedUp: false,
    termsAndConditions:
        'By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.',
    acceptedTerms: false,
    location: '',
    weather: {
        city: 'City',
        state: 'State',
        temperature: 0,
        highTemperature: 0,
        lowTemperature: 0,
        description: 'Loading Description',
        iconLink: ''
    }
};

export default () => (
    state = initialState,
    { type, payload }: { type: string; payload?: any }
) => {
    switch (type) {
        case SIGNUP:
            return { ...state, signedUp: payload };
        case ACCEPT_TERMS:
            return { ...state, acceptedTerms: !state.acceptedTerms };
        case SET_LOCATION:
            return { ...state, location: payload };
        case SET_WEATHER:
            return { ...state, weather: payload };
        default:
            return state;
    }
};
