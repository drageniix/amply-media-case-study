export type WeatherType = {
    city: string;
    state: string;
    temperature: number;
    highTemperature: number;
    lowTemperature: number;
    description: string;
    iconLink: string;
};

export type DayType = {
    dayOfWeek: string;
    temp: number;
    description: string;
    iconLink: string;
};

export type commonStateType = {
    signedUp: boolean;
    termsAndConditions: string;
    acceptedTerms: boolean;
    location: string;
    weather: WeatherType;
    week: DayType[];
};

export type fullStateType = {
    common: commonStateType;
};
