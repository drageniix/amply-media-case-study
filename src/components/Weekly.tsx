import React from 'react';
import { connect } from 'react-redux';
import { fullStateType, DayType } from '../redux/reducers/state-types';

export const Weekly = ({ week }: { week: DayType[] }) => (
    <section className="weekly">
        <h1 className="weekly__title">Weekly Forecast</h1>
        <div className="weekly__forecast">
            {week.map((day: DayType, index: number) => (
                <div key={index} className="weekly__forecast--day">
                    <p>{day.dayOfWeek}</p>
                    <img src={day.iconLink} />
                    <p>{day.temp}°F</p>
                </div>
            ))}
        </div>
    </section>
);

const mapStateToProps = (state: fullStateType) => ({
    week: state.common.week
});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Weekly);
