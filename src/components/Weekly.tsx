import React from 'react';
import { connect } from 'react-redux';
import { fullStateType, DayType } from '../redux/reducers/state-types';

export const Weekly = ({ week }: { week: DayType[] }) => (
    <section className="weekly">
        <h1 className="weekly__title">Weekly Forecast</h1>
        {week.map((day: DayType, index: number) => (
            <div key={index} className="weekly__day">
                <p>{day.dayOfWeek.substring(0, 3)}</p>
                <img src={day.iconLink} />
                <p>{day.temp}°F</p>
            </div>
        ))}
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
