import { SET_LOCATION, SET_WEATHER, ACCEPT_TERMS, SIGNUP } from '../constants';

const initialState = {
    signedUp: false,
    acceptedTerms: false,
    weather: null,
    location: ''
};

export default () => (state = initialState, { type, payload }) => {
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
